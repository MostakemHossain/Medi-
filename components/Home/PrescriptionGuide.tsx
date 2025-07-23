'use client'

import { Camera, UploadCloud, FileText } from "lucide-react"

export default function PrescriptionGuide() {
  const steps = [
    {
      icon: <Camera className="w-10 h-10 text-green-700" />,
      title: "১. প্রেসক্রিপশনের ছবি তুলুন",
      description:
        "আপনার ডাক্তারি প্রেসক্রিপশনের একটি পরিষ্কার ছবি তুলুন।",
    },
    {
      icon: <UploadCloud className="w-10 h-10 text-green-700" />,
      title: "২. ছবি আপলোড করুন",
      description:
        "প্রেসক্রিপশন আপলোড ফর্মে ছবি আপলোড করুন দ্রুত ও নিরাপদে।",
    },
    {
      icon: <FileText className="w-10 h-10 text-green-700" />,
      title: "৩. আপনার ডিজিটাল প্রেসক্রিপশন পান",
      description:
        "আপনার প্রেসক্রিপশন স্বয়ংক্রিয়ভাবে তৈরি হবে, দ্রুত এবং নির্ভুল।",
    },
  ]

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-green-900 mb-6">
          কিভাবে প্রেসক্রিপশন তৈরি করবেন?
        </h2>
        <p className="text-green-800 mb-12 max-w-2xl mx-auto">
          সহজ তিন ধাপে আপনার প্রেসক্রিপশন ছবি তুলুন, আপলোড করুন এবং ডিজিটাল প্রেসক্রিপশন নিন।
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-12">
          {steps.map(({ icon, title, description }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center max-w-xs text-green-700"
            >
              <div className="p-4 rounded-full bg-green-100 mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-green-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
