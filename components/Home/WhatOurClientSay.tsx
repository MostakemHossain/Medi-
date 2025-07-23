'use client'

import { motion } from "framer-motion"

const testimonials = [
  {
    name: "মো. রাশেদ খান",
    role: "রোগী",
    rating: 5,
    comment: "Mediবুঝি প্ল্যাটফর্মটি আমার প্রেসক্রিপশন ব্যবস্থাপনাকে সহজ ও নিরাপদ করেছে। আমি এখন আমার ডাক্তারের নির্দেশনা আর কখনো মিস করি না।",
  },
  {
    name: "ডাঃ সুমাইয়া রহমান",
    role: "চিকিৎসক",
    rating: 5,
    comment: "হাতের লেখা অস্পষ্টতা কাটিয়ে ডিজিটাল প্রেসক্রিপশন সত্যিই রোগীদের জন্য একটি বড় সুবিধা। Mediবুঝি এর মাধ্যমে রোগীদের সঙ্গে যোগাযোগও অনেক সহজ হয়েছে।",
  },
  {
    name: "মিসেস নিলু ফেরদৌস",
    role: "রোগী",
    rating: 4,
    comment: "প্রেসক্রিপশন আপলোড করা এবং ড্রাগ স্টোর থেকে সঠিক ওষুধ পাওয়া এখন অনেক সহজ হয়েছে। ধন্যবাদ Mediবুঝি টিমকে।",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-green-50 py-16 px-6 max-w-7xl mx-auto">
      <motion.h2
        className="text-4xl font-extrabold text-green-900 text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        আমাদের গ্রাহকরা কী বলছেন
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map(({ name, role, rating, comment }, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-6 rounded-lg shadow-md border border-green-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <p className="text-gray-700 mb-4 italic">“{comment}”</p>
            <div className="flex items-center mb-3">
              <div className="flex text-yellow-400 mr-2">
                {Array.from({ length: rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.564-.955L10 0l2.946 5.955 6.564.955-4.755 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-green-700 font-semibold">{role}</span>
            </div>
            <h3 className="text-lg font-semibold text-green-900">{name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
