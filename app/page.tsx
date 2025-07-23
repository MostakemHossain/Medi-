import FaqSection from "@/components/Home/FaqSection";
import Footer from "@/components/Home/FooterSection";
import HeroSection from "@/components/Home/Hero";
import Navbar from "@/components/Home/Navbar";
import PrescriptionGuide from "@/components/Home/PrescriptionGuide";
import PricingSection from "@/components/Home/PricingSection";
import UploadPrescription from "@/components/Home/UploadPrescription";
import WhyUseUsSection from "@/components/Home/WhyUseUsSection";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <PrescriptionGuide/>
      <UploadPrescription/>
      <WhyUseUsSection/>
      <PricingSection/>
      <FaqSection/>
      <Footer/>
    </div>
  );
}
