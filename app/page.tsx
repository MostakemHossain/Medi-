import HeroSection from "@/components/Home/Hero";
import Navbar from "@/components/Home/Navbar";
import PrescriptionGuide from "@/components/Home/PrescriptionGuide";
import UploadPrescription from "@/components/Home/UploadPrescription";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <PrescriptionGuide/>
      <UploadPrescription/>
    </div>
  );
}
