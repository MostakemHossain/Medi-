'use client'

import { useState } from "react"
import { Phone, Mail, ClipboardCheck, User, Menu, X } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  "হোম",
  "ডাক্তারগণ",
  "প্রেসক্রিপশনসমূহ",
  "ফার্মেসি",
  "অ্যাপয়েন্টমেন্ট",
  "ব্লগ",
  "যোগাযোগ",
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full shadow-sm border-b bg-white">
    
      <div className="bg-green-100 text-green-800 text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-green-600 transition">
              নিয়মাবলী
            </Link>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <Link href="#" className="hover:text-green-600 transition">
              গোপনীয়তা নীতি
            </Link>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <Link href="#" className="hover:text-green-600 transition">
              আইনগত শর্তাবলী
            </Link>
          </div>
          <div className="flex space-x-4 text-green-700 items-center select-none">
            <Phone className="w-4 h-4 inline mr-1" aria-hidden="true" />
            <span className="text-xs sm:text-sm">+৮৮০ ১২৩৪ ৫৬৭৮৯০</span>
            <span className="text-gray-300">|</span>
            <Mail className="w-4 h-4 inline mr-1" aria-hidden="true" />
            <span className="text-xs sm:text-sm">support@medibuji.com</span>
          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
  
          <Link
            href="/"
            className="flex items-center space-x-3 cursor-pointer select-none"
            aria-label="Mediবুঝি - আপনার প্রেসক্রিপশন পার্টনার"
          >
            <ClipboardCheck className="w-8 h-8 text-green-700 flex-shrink-0" />
            <div>
              <span className="text-2xl font-extrabold text-black leading-none">
                Mediবুঝি
              </span>
              <span className="block text-sm italic text-gray-800">
                আপনার প্রেসক্রিপশন পার্টনার
              </span>
            </div>
          </Link>

          {/* ডেস্কটপ মেনু */}
          <nav className="hidden md:flex space-x-8 text-gray-700 font-semibold text-sm">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item}
                href="#"
                className={cn(
                  "px-3 py-2 rounded transition-colors duration-200 hover:text-green-700",
                  item === "হোম"
                    ? "bg-green-600 text-white shadow"
                    : "text-gray-700"
                )}
              >
                {item}
              </Link>
            ))}
          </nav>

          
          <div className="hidden md:flex items-center space-x-4">
            <User className="w-6 h-6 text-green-700" aria-hidden="true" />
            <Link
              href="/login"
              className="text-green-700 font-medium hover:underline"
            >
              লগইন
            </Link>
          </div>

         
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-green-700 hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            aria-label="মেনু টগল করুন"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="block w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="block w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        
        {mobileMenuOpen && (
          <nav
            className="md:hidden bg-green-50 rounded-lg shadow-md mb-4"
            aria-label="মোবাইল মেনু"
          >
            <ul className="flex flex-col space-y-2 p-4 text-gray-700 font-semibold text-base">
              {NAV_ITEMS.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className={cn(
                      "block px-4 py-2 rounded hover:bg-green-200 transition",
                      item === "হোম"
                        ? "bg-green-600 text-white shadow"
                        : ""
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li className="border-t border-green-300 mt-3 pt-3">
                <Link
                  href="/login"
                  className="block px-4 py-2 text-green-700 font-semibold hover:underline"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  লগইন
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
