'use client'

import { ShieldCheck, UploadCloud, CheckCircle, ScanLine } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    title: "নিরাপদ এবং গোপনীয়তা নিশ্চিত",
    description: "আপনার তথ্য নিরাপদ ও এনক্রিপ্টেড রাখা হয় যাতে কোনো অননুমোদিত অ্যাক্সেস না হয়।",
    icon: ShieldCheck,
  },
  {
    title: "সহজ প্রেসক্রিপশন আপলোড",
    description: "ক্যামেরা দিয়ে ছবি তুলুন বা ফাইল আপলোড করুন — পুরো প্রক্রিয়াটি মাত্র কয়েক সেকেন্ডের!",
    icon: UploadCloud,
  },
  {
    title: "হস্তলিখিত থেকে ডিজিটাল রূপান্তর",
    description: "এআই প্রযুক্তির মাধ্যমে হস্তলিখিত প্রেসক্রিপশনকে নিখুঁতভাবে ডিজিটাল ফরম্যাটে রূপান্তর করুন।",
    icon: ScanLine,
  },
  {
    title: "দ্রুত এবং নির্ভরযোগ্য সেবা",
    description: "আমাদের টিম দ্রুত সময়ের মধ্যে আপনার প্রয়োজনীয় প্রেসক্রিপশন প্রসেস করে।",
    icon: CheckCircle,
  },
]

export default function WhyUseUsSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-green-800 mb-4"
        >
          কেন আমাদের প্ল্যাটফর্ম ব্যবহার করবেন?
        </motion.h2>
        <p className="text-lg text-green-700 max-w-2xl mx-auto mb-12">
          সহজ, নিরাপদ এবং আধুনিক ডিজিটাল প্রেসক্রিপশন ব্যবস্থাপনার জন্য আমাদের প্ল্যাটফর্মই সেরা সমাধান।
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-green-50 border border-green-100 rounded-2xl p-6 shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center mb-4 mx-auto">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">{feature.title}</h3>
              <p className="text-green-700 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
