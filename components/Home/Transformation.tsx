'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import digital from "../../public/digital.png"
import hand from "../../public/hand.jpg"

export default function PrescriptionTransformSection() {
  const imageWidth = 400
  const imageHeight = 300

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-green-900 mb-8">
          হাতের লেখা প্রেসক্রিপশন থেকে ডিজিটাল প্রেসক্রিপশনে রূপান্তর
        </h2>
        <p className="text-green-800 max-w-2xl mx-auto mb-12 text-lg">
          আপনার হাতের লেখা প্রেসক্রিপশন স্ক্যান করুন বা ছবি তুলুন, 
          আমরা দ্রুত এবং সঠিকভাবে সেটিকে ডিজিটাল ফরম্যাটে রূপান্তর করি।
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {/* Handwritten Prescription */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-sm w-full"
          >
            <h3 className="text-2xl font-semibold text-green-700 mb-4">হাতের লেখা প্রেসক্রিপশন</h3>
            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 w-[300px] h-[400px] mx-auto">
              <Image
                src={hand}
                alt="Handwritten Prescription"
                width={imageWidth}
                height={imageHeight}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden md:flex items-center justify-center"
            aria-hidden="true"
          >
            <svg
              className="w-16 h-16 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
            </svg>
          </motion.div>

          {/* Digital Prescription */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-sm w-full"
          >
            <h3 className="text-2xl font-semibold text-green-700 mb-4">ডিজিটাল প্রেসক্রিপশন</h3>
            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 w-[300px] h-[400px] mx-auto bg-green-50">
              <Image
                src={digital}
                alt="Digital Prescription"
                width={imageWidth}
                height={imageHeight}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
