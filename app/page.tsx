import TypewriterText from "@/src/components/common/type-writer-text";
import AboutUsSection from "@/src/components/global/about-us-sec";
import AIAcrosSection from "@/src/components/global/ai-across-sec";
import WhyChooseUsSection from "@/src/components/global/choose-us-sec";
import CybersecuritySection from "@/src/components/global/cyber-security-sec";
import GetStartedSection from "@/src/components/global/get-started-sec";
import GlobalNetworkSection from "@/src/components/global/global-network-sec";
import HowToStartSection from "@/src/components/global/how-to-start-sec";
import InnvotionSection from "@/src/components/global/innovation-sec";
import OurProductSection from "@/src/components/global/out-product-sec";
import PreoblemSolutionSection from "@/src/components/global/problem-and-solution-sec";
import StatusContainer from "@/src/components/global/status-container";
import SustainabilitySection from "@/src/components/global/sustainability-sec";
import Image from "next/image";

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
              texts={["to Your Needs", "Lead Generation.", "Market Intelligence"]}
              speed={100}
              pauseDuration={2000}
            />
            <p className="text-gray-300 mt-4 tracking-wide">
              Accelerating innovation with faster, smarter, and more
            </p>
            <p className="text-gray-300 mt-0.5 tracking-wide">reliable AI models.</p>
            <div className="inline-flex items-center md:gap-x-4 gap-x-2 pt-7">
              <button type="button" className='2xl:w-fit xl:w-fit md:w-fit lg:w-fit w-full max-w-fit px-6 font-medium py-3 text-white text-sm bg-primary rounded-lg border-none'>Get started</button>
              <button type="button" className='2xl:w-fit xl:w-fit md:w-fit lg:w-fit w-full max-w-fit px-6 font-medium py-3 text-white text-sm bg-transparent border border-solid border-white rounded-lg'>Learn More</button>
            </div>
          </div>

          {/* ========= right side content ======== */}
          <div className="2xl:w-1/2 xl:w-1/2 md:w-1/2">
            <Image src={`/assets/images/banner-image.svg`} alt="Banner-Image" className="w-full" width={200} height={100} />
          </div>
        </div>
      </div>
      <StatusContainer />
      <PreoblemSolutionSection />
      <OurProductSection />
      <WhyChooseUsSection />
      <InnvotionSection />
      <GlobalNetworkSection />
      <SustainabilitySection />
      <CybersecuritySection />
      <HowToStartSection />
      <AIAcrosSection />
      <AboutUsSection />
      <GetStartedSection />
    </main>
  );
}
