 
import Hero from "./components/Hero";
import BenefitsSection from "./components/BenifitSection";
import FaqSection from "./components/Faq";
import CounterSection from "./components/Counter";
import TestimonialSection from "./components/TestimonialSection";
import ContactSection from "./components/Contact";
 
 

export default function Home() {
  return (
     <>
     <Hero/>
     <BenefitsSection/>
     <CounterSection/>
    <FaqSection/> 
    <TestimonialSection/>    
    <ContactSection/>
     </>
  );
}
