import AppIntroSection from "@/components/Home/AppIntroSection";
import FaqSection from "@/components/Home/FaqSection";
import Footer from "@/components/Home/FooterSection";
import HeroSection from "@/components/Home/Hero";
import Navbar from "@/components/Home/Navbar";
import PrescriptionGuide from "@/components/Home/PrescriptionGuide";
import PricingSection from "@/components/Home/PricingSection";
import PrescriptionTransformSection from "@/components/Home/Transformation";
import UploadPrescription from "@/components/Home/UploadPrescription";
import Testimonials from "@/components/Home/WhatOurClientSay";
import WhyUseUsSection from "@/components/Home/WhyUseUsSection";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <PrescriptionTransformSection/>
      <PrescriptionGuide/>
      <UploadPrescription/>
      <WhyUseUsSection/>
      <PricingSection/>
      <FaqSection/>
      <Testimonials/>
      <AppIntroSection/>
      <Footer/>
    </div>
  );
}
