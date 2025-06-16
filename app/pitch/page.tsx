"use client";

import React, { useState, useCallback, useEffect } from 'react';
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
  const [scale, setScale] = useState<number>(1.0);
  const [loading, setLoading] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);

  // Set up PDF worker and check if mobile
  useEffect(() => {
    setIsClient(true);
    
    // Import and set up PDF.js worker
    import('react-pdf').then((reactPdf) => {
      import('pdfjs-dist').then((pdfjs) => {
        pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;
      });
    });
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
  }, []);

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
    setPageNumber(prev => Math.min(prev + 1, numPages));
  };

  const zoomIn = () => {
    setScale(prev => Math.min(prev + 0.2, 2.0));
  };

  const zoomOut = () => {
    setScale(prev => Math.max(prev - 0.2, 0.5));
  };

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/r3alai_pitchdeck.pdf';
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
        <div className="max-w-screen-xl mx-auto px-4 py-4">
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
      <div className="pt-32 pb-8 px-4">
        <div className="flex justify-center">
          <div className="relative max-w-full overflow-hidden">
            {loading && (
              <div className="flex items-center justify-center h-96">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                  <div className="text-white text-lg">Loading pitch deck...</div>
                </div>
              </div>
            )}
            
            <Document
              file="/r3alai_pitchdeck.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              loading={
                <div className="flex items-center justify-center h-96">
                  <div className="text-white">Loading PDF...</div>
                </div>
              }
              error={
                <div className="flex items-center justify-center h-96">
                  <div className="text-red-400">Failed to load PDF. Please try downloading it instead.</div>
                </div>
              }
              className="flex justify-center"
              options={{
                cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/cmaps/',
                cMapPacked: true,
                standardFontDataUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/standard_fonts/',
              }}
            >
              <Page
                pageNumber={pageNumber}
                scale={isMobile ? Math.min(scale, 0.8) : scale}
                className="shadow-2xl max-w-full h-auto"
                renderTextLayer={false}
                renderAnnotationLayer={false}
                width={isMobile ? Math.min(window.innerWidth - 32, 800) : undefined}
                canvasBackground="transparent"
              />
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