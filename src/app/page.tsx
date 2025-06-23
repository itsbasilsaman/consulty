 
import Hero from "./components/Hero";
import BenefitsSection from "./components/BenifitSection";
import FeaturesSection from "./components/FeaturesSection";
import TipsSection from "./components/TipsSection";
import HowItWorks from "./components/HowItWorks";
import InsightSection from "./components/InsightSection";
import Pricing from "./components/Pricing";
import FaqSection from "./components/Faq";
import CounterSection from "./components/Counter";
import HealthMonitoringHero from "./components/MonitoringHero";
import TestimonialSection from "./components/TestimonialSection";
import ProductSection from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import ContactSection from "./components/Contact";
import SignInSection from "./components/SignIn";
import SignUpSection from "./components/SignUp";
 

export default function Home() {
  return (
     <>
  
     <Hero/>
     <BenefitsSection/>
     <CounterSection/>
     <HealthMonitoringHero/>
     <FeaturesSection/>
     <TipsSection/>
    <HowItWorks/>
   
    <Pricing/>
    <InsightSection/>
    <FaqSection/>
   
    <TestimonialSection/>
     
    <ProductSection/>
    <ProductDetail/>
    <ContactSection/>
    <SignInSection/>
    <SignUpSection/>
     </>
  );
}
