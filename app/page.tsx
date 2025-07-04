"use client";

import { Suspense, lazy } from "react";
import TypewriterText from "@/src/components/common/type-writer-text";
import StatusContainer from "@/src/components/global/status-container";
import PreoblemSolutionSection from "@/src/components/global/problem-and-solution-sec";
import OurProductSection from "@/src/components/global/out-product-sec";
import Image from "next/image";
import Link from "next/link";

// Lazy load components that are below the fold
const WhyChooseUsSection = lazy(() => import("@/src/components/global/choose-us-sec"));
const InnvotionSection = lazy(() => import("@/src/components/global/innovation-sec"));
const GlobalNetworkSection = lazy(() => import("@/src/components/global/global-network-sec"));
const SustainabilitySection = lazy(() => import("@/src/components/global/sustainability-sec"));
const CybersecuritySection = lazy(() => import("@/src/components/global/cyber-security-sec"));
const HowToStartSection = lazy(() => import("@/src/components/global/how-to-start-sec"));
const AIAcrosSection = lazy(() => import("@/src/components/global/ai-across-sec"));
const AboutUsSection = lazy(() => import("@/src/components/global/about-us-sec"));
const GetStartedSection = lazy(() => import("@/src/components/global/get-started-sec"));

// Simple loading component
const SectionLoading = () => <div className="w-full h-40 flex items-center justify-center"><div className="text-white/50">Loading...</div></div>;

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto md:mt-0 mt-8 md:px-0 px-6">
        <div className="flex 2xl:flex-row xl:flex-row md:flex-row 2xl:items-center xl:items-center flex-col gap-16">
          {/* ======= left side content ======== */}
          <div className="2xl:w-1/2 xl:w-1/2 md:w-1/2">
            <div className="w-fit px-7 py-2 bg-[#191133] rounded-full border border-solid border-white/15 bg-gradient-to-b from-white to-purple_400 text-transparent bg-clip-text">The Next Generation of AI</div>
            <h1 className="2xl:text-7xl xl:text-7xl text-4xl font-medium mt-7 text-white">
              AI That Adapts
            </h1>
            <TypewriterText
              texts={["Needs", "Data", "Goals", "Architecture", "Vision"]}
              speed={100}
              pauseDuration={2000}
            />
            <p className="text-gray-300 mt-4 xl:mt-0 tracking-wide">
              Accelerating innovation with faster, smarter, and more
            </p>
            <p className="text-gray-300 mt-0.5 tracking-wide">reliable AI models.</p>
            <div className="inline-flex items-center md:gap-x-4 gap-x-2 pt-7">
              <Link href="/contact" className='2xl:w-fit xl:w-fit md:w-fit lg:w-fit w-full max-w-fit px-6 font-medium py-3 text-white text-sm bg-primary rounded-lg border-none'>Get started</Link>
              <Link href="/contact" className='2xl:w-fit xl:w-fit md:w-fit lg:w-fit w-full max-w-fit px-6 font-medium py-3 text-white text-sm bg-transparent border border-solid border-white rounded-lg'>Learn More</Link>
            </div>
          </div>

          {/* ========= right side content ======== */}
          <div className="2xl:w-1/2 xl:w-1/2 md:w-1/2">
            <Image 
              src={`/assets/images/banner-image.svg`} 
              alt="Banner-Image" 
              quality={80} 
              className="w-full" 
              width={200} 
              height={100}
              priority 
            />
          </div>
        </div>
      </div>
      <StatusContainer />
      <PreoblemSolutionSection />
      <OurProductSection />
      
      {/* Lazy loaded components with suspense */}
      <Suspense fallback={<SectionLoading />}>
        <WhyChooseUsSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <InnvotionSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <GlobalNetworkSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <SustainabilitySection />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <CybersecuritySection />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <HowToStartSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <AIAcrosSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <AboutUsSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <GetStartedSection />
      </Suspense>
    </main>
  );
}
