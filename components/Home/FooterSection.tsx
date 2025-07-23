'use client'

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-100  py-14 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 md:flex md:justify-between md:items-start space-y-12 md:space-y-0">
        
     
        <div className="md:w-1/3">
          <h3 className="text-3xl font-bold mb-4 text-green-500">Mediবুঝি</h3>
          <p className="leading-relaxed mb-4 ">
            আপনার বিশ্বাসযোগ্য ডিজিটাল প্রেসক্রিপশন প্ল্যাটফর্ম। সহজ, নিরাপদ ও দ্রুত সেবা।
            আমাদের মাধ্যমে আপনি হারানো বা অস্পষ্ট ব্যবস্থাপত্রের ঝামেলা থেকে মুক্তি পাবেন।
          </p>
          <p className="text-sm ">
            আমাদের লক্ষ্য — প্রতিটি রোগী ও ডাক্তারের জন্য উন্নত মানের স্বাস্থ্যসেবা ডিজিটাল মাধ্যমে পৌঁছে দেওয়া।
          </p>
        </div>

        
        <div className="md:w-1/4 grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">দ্রুত লিঙ্ক</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-green-500 transition duration-300">হোম</Link></li>
              <li><Link href="/doctors" className="hover:text-green-500 transition duration-300">ডাক্তাররা</Link></li>
              <li><Link href="/prescriptions" className="hover:text-green-500 transition duration-300">প্রেসক্রিপশন</Link></li>
              <li><Link href="/pharmacy" className="hover:text-green-500 transition duration-300">ফার্মেসি</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">সহায়তা</h4>
            <ul className="space-y-3">
              <li><Link href="/contact" className="hover:text-green-500 transition duration-300">যোগাযোগ</Link></li>
              <li><Link href="/blog" className="hover:text-green-500 transition duration-300">ব্লগ</Link></li>
              <li><Link href="/terms" className="hover:text-green-500 transition duration-300">শর্তাবলী</Link></li>
              <li><Link href="/privacy" className="hover:text-green-500 transition duration-300">গোপনীয়তা নীতি</Link></li>
            </ul>
          </div>
        </div>

        
        <div className="md:w-1/4">
          <h4 className="text-lg font-semibold mb-4 text-green-400">যোগাযোগ করুন</h4>
          <div className="flex items-center gap-2 mb-3">
            <Phone className="text-green-500" />
            <a href="tel:+8801234567890" className="hover:text-green-500 transition duration-300">
              +880 1234 567890
            </a>
          </div>
          <div className="flex items-center gap-2 mb-6">
            <Mail className="text-green-500" />
            <a href="mailto:support@medibuji.com" className="hover:text-green-500 transition duration-300">
              support@medibuji.com
            </a>
          </div>

          <div className="flex space-x-5 text-gray-400">
            <Link href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition duration-300">
              <Facebook size={28} />
            </Link>
            <Link href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition duration-300">
              <Twitter size={28} />
            </Link>
            <Link href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition duration-300">
              <Instagram size={28} />
            </Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition duration-300">
              <Linkedin size={28} />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-14 border-t border-gray-800 pt-6 text-center  text-sm select-none">
        © {new Date().getFullYear()} Mediবুঝি. সর্বস্বত্ব সংরক্ষিত। ডিজিটাল প্রেসক্রিপশনের জন্য আপনার সেরা সঙ্গী।
      </div>
    </footer>
  )
}
