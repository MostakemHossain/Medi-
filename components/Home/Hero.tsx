'use client'

import React from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Download, UploadCloud } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="bg-green-50 min-h-[70vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-center gap-12">
       
        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-green-900 leading-tight">
            PrescriptoCare <br className="hidden sm:block" />
            <span className="text-green-700 italic text-2xl sm:text-3xl font-semibold">
              ডিজিটাল প্রেসক্রিপশন সেবা
            </span>
          </h1>

          <p className="mt-6 text-green-800 text-lg sm:text-xl max-w-md">
            আপনার ডাক্তারি প্রেসক্রিপশন এখন <span className="font-semibold">ডিজিটাল</span> ও <span className="font-semibold">নিরাপদ</span> <br />
            দ্রুত, সহজ, এবং বিশ্বস্ত সেবা বাংলাদেশিদের জন্য
          </p>

          <h2 className="mt-10 text-2xl font-semibold text-green-900 flex items-center gap-3 justify-center md:justify-start">
            <UploadCloud className="w-6 h-6 text-green-700" />
            প্রেসক্রিপশন আপলোড করুন সহজেই
          </h2>
          <p className="mt-2 text-green-700 max-w-sm">
            প্রেসক্রিপশনের ছবি তুলুন বা স্ক্যান করুন, <br className="hidden sm:block" />
            আর বাকিটা আমরা দেখব দ্রুত এবং সুরক্ষিতভাবে।
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <Button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 font-semibold shadow-md flex items-center gap-2">
              <Download className="w-5 h-5" />
              অ্যাপ ডাউনলোড করুন
            </Button>

            <Button className="border-green-700 text-green-700 hover:bg-green-100 px-6 py-3 font-semibold">
              🎯 ডেমো দেখুন
            </Button>
          </div>
        </div>

    
        <div className="w-full max-w-lg">
          <Image
            src="/hero.jpg" 
            alt="Upload prescription digitally"
            width={650}
            height={400}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  )
}
