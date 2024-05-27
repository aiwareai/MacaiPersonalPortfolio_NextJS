import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import AboutWeb from "@/components/AboutWeb";
import AboutAi from "@/components/AboutAi";
import AboutMarketing from "@/components/AboutMarketing";
import FeaturesTab from "@/components/FeaturesTab";
import WebFeaturesTab from "@/components/FeaturesTabWeb";
import AiFeaturesTab from "@/components/FeaturesTabAi";
import MarketingFeaturesTab from "@/components/FeaturesTabMarketing";
import HeaderAi from "@/components/HeaderAi";
import HeaderWeb from "@/components/HeaderWeb";
import FunFact from "@/components/FunFact";
import GenAiHome from "@/components/GenAiHome";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
// import Voiceflow from "@/components/Voiceflow";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import PortfolioCta from "@/components/PortfolioCta";
import Slider from "@/components/Slider"
import HomePortfolio from "@/components/Portfolio/HomePortfolio";


export const metadata: Metadata = {
  title: "Piotr Macai - AI | Web | Automation For Business",
  description: "Tailored To The Needs Of Your Company Web & AI and Automation solutions that help businesses to grow. Discover our services tailored to the needs of your company.",
  openGraph: {
    title: "Piotr Macai - AI | Web | Automation For Business",
    description:"Tailored To The Needs Of Your Company Web & AI and Automation solutions that help businesses to grow. Discover our services tailored to the needs of your company.",
    images: [
      {
        url: '/images/about/logobig.jpg', // Updated path to your image
        alt: 'Potr Macai Business Development', // Optional: alt text for the image
      },
    ]
  }, 
  // inne metadane
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature /> 
       <About />           
      {/* <FeaturesTab />  */}
       <HomePortfolio/>    
                 
    
      {/* <PortfolioCta/> */}
  
      {/* <Integration /> */}
      {/* <FAQ /> */}
      {/* <Testimonial /> */}
      <div id="headerWeb">
      {/* <HeaderWeb/> */}
      <AboutWeb/>
      <WebFeaturesTab/>
      </div>
      <div id="headerAi">
      {/* <HeaderAi/>      */}
      <AboutAi/>
      <AiFeaturesTab/>
      </div> 
      <div id="headerMarketing">
      <AboutMarketing/>
      <MarketingFeaturesTab/>
      </div> 
      <div id="headerGenAi">
      <GenAiHome/> 
      </div>  
       <Pricing />   
       <FunFact /> 
       <CTA />
      <Contact /> 
      <Brands />   
      {/* <Voiceflow/> */}
      {/* <Blog /> */}
    </main>
  );
}
