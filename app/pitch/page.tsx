"use client";

import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import dynamic from 'next/dynamic';
import './styles.css';

// Dynamically import the PDF components to avoid SSR issues
const Document = dynamic(
  () => import('react-pdf').then((mod) => mod.Document),
  { ssr: false }
);

const Page = dynamic(
  () => import('react-pdf').then((mod) => mod.Page),
  { ssr: false }
);

export default function PitchDeckPage() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0); // Start bij 100% voor volledig zichtbare PDF
  const [loading, setLoading] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);
  const [windowSize, setWindowSize] = useState<{width: number, height: number}>({width: 0, height: 0});
  const [preloadedPages, setPreloadedPages] = useState<Set<number>>(new Set());
  const [loadingProgress, setLoadingProgress] = useState<number>(0);

  // Memoize PDF options to prevent unnecessary re-renders - OPTIMIZED for speed
  const pdfOptions = useMemo(() => ({
    cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/cmaps/',
    cMapPacked: true,
    standardFontDataUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/standard_fonts/',
    // Performance optimizations
    disableAutoFetch: false, // Allow prefetching
    disableStream: false, // Enable streaming for faster load
    disableRange: false, // Enable range requests for partial loading
    enableXfa: false, // Disable XFA for better performance
    isEvalSupported: false, // Disable eval for security and performance
    maxImageSize: 33554432, // Doubled max image size for heavy slides like slide 8
    cacheSize: 150, // Increased cache size for better performance
    useWorkerFetch: true, // Use worker for fetching to improve performance
  }), []);

  // Set up PDF worker and check if mobile
  useEffect(() => {
    setIsClient(true);
    
    // Import and set up PDF.js worker with optimized configuration
    import('react-pdf').then((reactPdf) => {
      // Use CDN worker for better performance
      reactPdf.pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${reactPdf.pdfjs.version}/build/pdf.worker.min.js`;
      
      // Optimize PDF.js settings for better performance
      reactPdf.pdfjs.GlobalWorkerOptions.workerPort = null;
      
      // Enable caching for faster subsequent loads
      if (typeof window !== 'undefined') {
        // Pre-warm the worker
        reactPdf.pdfjs.getDocument({ 
          url: '/r3alai_pitchdeck_25.pdf',
          cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/cmaps/',
          cMapPacked: true,
          standardFontDataUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/standard_fonts/',
          disableAutoFetch: false,
          disableStream: false,
          disableRange: false
        });
      }
      
      console.log('PDF.js worker configured, version:', reactPdf.pdfjs.version);
    }).catch((error) => {
      console.error('Failed to set up PDF worker:', error);
    });
    
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setIsMobile(width < 768);
      setWindowSize({width, height});
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
    console.log('PDF loaded successfully with', numPages, 'pages');
  }, []);

  const onDocumentLoadError = useCallback((error: Error) => {
    console.error('PDF loading error:', error);
    setLoading(false);
  }, []);

  const onDocumentLoadProgress = useCallback((progressData: { loaded: number; total: number }) => {
    const progress = (progressData.loaded / progressData.total) * 100;
    setLoadingProgress(progress);
  }, []);

  const onPageLoadSuccess = useCallback((page: any) => {
    console.log(`Page ${page.pageNumber} loaded successfully`);
    if (page.pageNumber === 8) {
      console.timeEnd('Slide 8 Navigation');
      console.log('Slide 8 loaded - this was the problematic slide');
    }
  }, []);

  const onPageLoadError = useCallback((error: Error) => {
    console.error(`Page loading error:`, error);
    // Check if it's slide 8 based on current page number
    if (pageNumber === 8) {
      console.error('Slide 8 failed to load:', error);
    }
  }, [pageNumber]);

  // Preload adjacent pages for faster navigation + prioritize slide 8
  const preloadAdjacentPages = useCallback(() => {
    if (!numPages || loading) return;
    
    const pagesToPreload = [];
    
    // Always prioritize slide 8 (heavy slide) for preloading
    if (numPages >= 8 && !preloadedPages.has(8)) {
      pagesToPreload.push(8);
    }
    
    // Preload next page
    if (pageNumber < numPages) {
      pagesToPreload.push(pageNumber + 1);
    }
    
    // Preload previous page
    if (pageNumber > 1) {
      pagesToPreload.push(pageNumber - 1);
    }
    
    // Preload pages 2 ahead and 2 behind for smoother experience
    if (pageNumber + 2 <= numPages) pagesToPreload.push(pageNumber + 2);
    if (pageNumber - 2 >= 1) pagesToPreload.push(pageNumber - 2);
    
    // If we're close to slide 8, preload it with higher priority
    if (Math.abs(pageNumber - 8) <= 3 && numPages >= 8) {
      pagesToPreload.unshift(8); // Add to front of array for priority
    }
    
    pagesToPreload.forEach(page => {
      if (!preloadedPages.has(page)) {
        setPreloadedPages(prev => new Set([...prev, page]));
      }
    });
  }, [pageNumber, numPages, loading, preloadedPages]);

  // Trigger preloading when page changes
  useEffect(() => {
    if (numPages > 0) {
      preloadAdjacentPages();
    }
  }, [pageNumber, numPages, preloadAdjacentPages]);

  // Calculate optimal width for the PDF based on viewport - BIGGER sizing
  const getOptimalWidth = useCallback(() => {
    if (!isClient || windowSize.width === 0) return undefined;
    
    const viewportWidth = windowSize.width;
    const headerHeight = 128; // Fixed header height (pt-32)
    const viewportHeight = windowSize.height - headerHeight;
    
    if (isMobile) {
      // On mobile, use most of the width but make it bigger
      return Math.min(viewportWidth - 16, 900);
    } else {
      // On desktop, make PDF much bigger while still fitting
      const maxWidth = Math.min(viewportWidth - 60, 1400); // Increased from 1000 to 1400
      const maxHeight = viewportHeight - 80; // Reduced margin from 120 to 80
      const widthBasedOnHeight = maxHeight * 0.77; // PDF aspect ratio
      
      // Prefer width-based sizing to make it bigger, fallback to height-based
      return Math.min(maxWidth, Math.max(widthBasedOnHeight, 1200)); // Minimum 1200px on desktop
    }
  }, [isClient, isMobile, windowSize]);

  // Keyboard navigation
  useEffect(() => {
    if (!isClient) return;
    
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          goToPrevPage();
          break;
        case 'ArrowRight':
        case ' ':
          event.preventDefault();
          goToNextPage();
          break;
        case '+':
        case '=':
          event.preventDefault();
          zoomIn();
          break;
        case '-':
          event.preventDefault();
          zoomOut();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pageNumber, numPages, scale, isClient]);

  const goToPrevPage = () => {
    setPageNumber(prev => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    const nextPage = Math.min(pageNumber + 1, numPages);
    
    // Add performance timing for slide 8
    if (nextPage === 8) {
      console.time('Slide 8 Navigation');
    }
    
    setPageNumber(nextPage);
  };

  const zoomIn = () => {
    setScale(prev => Math.min(prev + 0.2, 2.0));
  };

  const zoomOut = () => {
    setScale(prev => Math.max(prev - 0.2, 0.5));
  };

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/r3alai_pitchdeck_25.pdf';
    link.download = 'R3al.AI_Pitch_Deck.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Show loading while client-side hydration happens
  if (!isClient) {
    return (
      <div className="min-h-screen bg-backgroud_color flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <div className="text-white text-lg">Loading PDF Viewer...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-backgroud_color">
      {/* Header with controls */}
      <div className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-screen-2xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 md:space-x-4">
              <h1 className="text-white text-lg md:text-xl font-semibold">R3AL.AI Pitch Deck</h1>
              {numPages > 0 && (
                <div className="flex items-center space-x-2 text-gray-300">
                  <span className="text-xs md:text-sm">
                    {pageNumber}/{numPages}
                  </span>
                </div>
              )}
            </div>
            
            <div className="flex items-center space-x-2 md:space-x-3">
              {/* Zoom controls */}
              <div className="hidden sm:flex items-center space-x-2">
                <button
                  onClick={zoomOut}
                  className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                  disabled={scale <= 0.5}
                >
                  <span className="text-sm">−</span>
                </button>
                <span className="text-white text-sm w-12 text-center">
                  {Math.round(scale * 100)}%
                </span>
                <button
                  onClick={zoomIn}
                  className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                  disabled={scale >= 2.0}
                >
                  <span className="text-sm">+</span>
                </button>
              </div>

              {/* Download button */}
              <button
                onClick={downloadPDF}
                className="flex items-center space-x-2 px-3 md:px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors"
              >
                <ArrowDownTrayIcon className="w-4 h-4" />
                <span className="text-xs md:text-sm hidden sm:inline">Download</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="pt-32 pb-8 px-2 md:px-4">
        <div className="flex justify-center">
          <div className="relative w-full max-w-7xl overflow-hidden">
            {loading && (
              <div className="flex items-center justify-center h-96">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                  <div className="text-white text-lg mb-4">Loading pitch deck...</div>
                  {loadingProgress > 0 && (
                    <div className="w-64 bg-gray-700 rounded-full h-2 mx-auto">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${Math.min(loadingProgress, 100)}%` }}
                      ></div>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            <Document
              file="/r3alai_pitchdeck_25.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              onLoadProgress={onDocumentLoadProgress}
              loading={
                <div className="flex items-center justify-center h-96">
                  <div className="text-white">Loading PDF...</div>
                </div>
              }
              error={
                <div className="flex items-center justify-center h-96">
                  <div className="text-center">
                    <div className="text-red-400 mb-4">Failed to load PDF.</div>
                    <button
                      onClick={downloadPDF}
                      className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors"
                    >
                      Download PDF instead
                    </button>
                  </div>
                </div>
              }
              className="flex justify-center"
              options={pdfOptions}
            >
              <>
                {/* Main visible page */}
                <Page
                  pageNumber={pageNumber}
                  scale={scale}
                  className="shadow-2xl max-w-full h-auto transition-transform duration-200"
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  width={getOptimalWidth() || (isMobile ? 400 : 1200)}
                  canvasBackground="transparent"
                  onLoadSuccess={onPageLoadSuccess}
                  onLoadError={onPageLoadError}
                />
                
                {/* Hidden preloaded pages for caching */}
                {Array.from(preloadedPages)
                  .filter(page => page !== pageNumber && page <= numPages && page >= 1)
                  .sort((a, b) => {
                    // Prioritize slide 8 and pages close to current page
                    if (a === 8) return -1;
                    if (b === 8) return 1;
                    return Math.abs(a - pageNumber) - Math.abs(b - pageNumber);
                  })
                  .slice(0, 6) // Increased to 6 preloaded pages, prioritizing slide 8
                  .map(page => (
                    <div key={`preload-${page}`} className="hidden">
                      <Page
                        pageNumber={page}
                        scale={scale}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        width={getOptimalWidth() || (isMobile ? 400 : 1200)}
                        canvasBackground="transparent"
                      />
                    </div>
                  ))
                }
              </>
            </Document>

            {/* Navigation arrows */}
            {!loading && numPages > 0 && (
              <>
                <button
                  onClick={goToPrevPage}
                  disabled={pageNumber <= 1}
                  className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 p-2 md:p-3 bg-black/70 text-white rounded-full hover:bg-black/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeftIcon className="w-4 h-4 md:w-6 md:h-6" />
                </button>
                
                <button
                  onClick={goToNextPage}
                  disabled={pageNumber >= numPages}
                  className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 p-2 md:p-3 bg-black/70 text-white rounded-full hover:bg-black/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRightIcon className="w-4 h-4 md:w-6 md:h-6" />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Page navigation dots */}
        {!loading && numPages > 1 && (
          <div className="flex justify-center mt-6 space-x-2 flex-wrap">
            {Array.from({ length: Math.min(numPages, 20) }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setPageNumber(page)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  page === pageNumber
                    ? 'bg-primary'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
            {numPages > 20 && (
              <span className="text-gray-400 text-sm ml-2">
                ... {numPages} pages total
              </span>
            )}
          </div>
        )}

        {/* Keyboard shortcuts info */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Use arrow keys to navigate • + / - to zoom • Space for next page
          </p>
        </div>

        {/* Book a meeting button */}
        <div className="mt-12 text-center">
          <a
            href="https://cal.com/arshiamentis/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold text-lg rounded-lg hover:bg-primary/80 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            📅 Book a meeting here
          </a>
          <p className="text-gray-400 text-sm mt-4">
            Would like more info about R3AL.AI? Book a meeting here.
          </p>
        </div>
      </div>
    </div>
  );
} 