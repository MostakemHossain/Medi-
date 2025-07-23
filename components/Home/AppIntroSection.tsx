'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import ios from "../../public/ios.jpg"
import and from "../../public/and.jpg"

export default function AppIntroSection() {
  return (
    <section className="bg-green-50 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        
      
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-green-900 mb-4">অ্যান্ড্রয়েড ও আইওএস অ্যাপ</h2>
          <p className="text-green-800 mb-6 text-lg">
            এখন সহজেই ডাউনলোড করুন আমাদের অ্যাপ — আপনার প্রেসক্রিপশন হাতের মুঠোয়।
            <br />
            যেকোনো সময়, যেকোনো জায়গা থেকে নিরাপদ এবং দ্রুত সেবা নিশ্চিত করুন।
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button
              variant="default"
              className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-5 py-3 font-semibold shadow-md"
          
              
        
              rel="noopener noreferrer"
              aria-label="Download Android App"
            >
              <Download className="w-5 h-5" />
              অ্যান্ড্রয়েড ডাউনলোড
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 border-green-700 text-green-700 hover:bg-green-100 px-5 py-3 font-semibold"
              
              rel="noopener noreferrer"
              aria-label="Download iOS App"
            >
              <Download className="w-5 h-5" />
              আইওএস ডাউনলোড
            </Button>
          </div>
        </div>

       
        <div className="flex gap-6 justify-center">
          <div className="relative w-28 h-28 md:w-36 md:h-36 cursor-pointer hover:scale-105 transition-transform duration-300">
            <Image
              src={and}
              alt="Download on Android Play Store"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          <div className="relative w-28 h-28 md:w-36 md:h-36 cursor-pointer hover:scale-105 transition-transform duration-300">
            <Image
              src={ios}
              alt="Download on Apple App Store"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
