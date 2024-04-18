import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import GenAiHome from "@/components/GenAiHome";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import PortfolioCta from "@/components/PortfolioCta";
import Slider from "@/components/Slider"
import HomePortfolio from "@/components/Portfolio/HomePortfolio";


// export const metadata: Metadata = {
//   title: "Aiware - Business development studio",
//   description: "We help you expand your business using the newest AI and Web technology & creating amazing web & social media presence and effective ads campaigns",
//   openGraph: {
//     title: "Aiware - Business development studio",
//     description: "We help you expand your business using the newest AI and Web technology & creating amazing web & social media presence and effective ads campaigns",
//     // other open graph properties
//   },
//   // other metadata
// };
export const metadata: Metadata = {
  title: "Aiware - Kompleksowe Rozwiązania Web & AI dla Twojego Biznesu",
  description: "Jesteśmy Aiware - Twoim partnerem w dziedzinie sztucznej inteligencji i rozwiązań webowych. Oferujemy kompleksowe usługi, które pomogą Ci wykorzystać potencjał internetu i AI dla rozwoju Twojego biznesu",
  openGraph: {
    title: "Aiware - Kompleksowe Rozwiązania Web & AI dla Twojego Biznesu",
    description:"Jesteśmy Aiware - Twoim partnerem w dziedzinie sztucznej inteligencji i rozwiązań webowych. Oferujemy kompleksowe usługi, które pomogą Ci wykorzystać potencjał internetu i AI dla rozwoju Twojego biznesu",
    images: [
      {
        url: '/images/about/logobig.jpg', // Updated path to your image
        alt: 'Aiware Business Development', // Optional: alt text for the image
      },
    ]
  }, 
  // inne metadane
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />   
      <Feature /> 
       <HomePortfolio/>    
      {/* <HomePortfolio />   */}
      <FeaturesTab /> 
      <GenAiHome/>             
      {/* <About />            */}
      {/* <PortfolioCta/> */}
      <FunFact />
      {/* <Integration /> */}
      {/* <FAQ /> */}
      {/* <Testimonial /> */}
       <Pricing />      
       <CTA />
      <Contact />
      {/* <Blog /> */}
    </main>
  );
}
