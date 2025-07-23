'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function PricingSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">মূল্য পরিকল্পনা</h2>
        <p className="text-gray-600 mb-12">
          আপনার প্রয়োজন অনুযায়ী সেরা প্ল্যান বেছে নিন।
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Free Plan */}
          <Card className="w-full md:w-1/3 shadow-md border-gray-200">
            <CardHeader>
              <CardTitle className="text-2xl text-green-600">ফ্রি</CardTitle>
              <p className="text-sm text-gray-500 mt-2">রোগীদের জন্য</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-4xl font-bold text-gray-800">৳ ০ / মাস</p>
              <ul className="text-left space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-500" size={18} /> মাসে ১০ প্রেসক্রিপশন আপলোড
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-500" size={18} /> ডিজিটাল কনভার্সন সুবিধা
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-500" size={18} /> মোবাইল ও ওয়েব অ্যাকসেস
                </li>
              </ul>
              <Button className="w-full">ফ্রি শুরু করুন</Button>
            </CardContent>
          </Card>

          {/* Standard Plan */}
          <Card className="w-full md:w-1/3 shadow-md border-green-400 border-2">
            <CardHeader>
              <CardTitle className="text-2xl text-green-700">স্ট্যান্ডার্ড</CardTitle>
              <p className="text-sm text-gray-500 mt-2">ডাক্তারদের জন্য</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-4xl font-bold text-gray-800">৳ ৫৯৯ / মাস</p>
              <ul className="text-left space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600" size={18} /> সীমাহীন প্রেসক্রিপশন আপলোড
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600" size={18} /> রোগীর ইতিহাস ব্যবস্থাপনা
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600" size={18} /> দ্রুত ও নির্ভরযোগ্য ডিজিটাল রূপান্তর
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600" size={18} /> অনলাইন ফলোআপ ব্যবস্থা
                </li>
              </ul>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">সাবস্ক্রাইব করুন</Button>
            </CardContent>
          </Card>

          {/* Premium Plan */}
          <Card className="w-full md:w-1/3 shadow-md border-green-700 border-2">
            <CardHeader>
              <CardTitle className="text-2xl text-green-800">প্রিমিয়াম</CardTitle>
              <p className="text-sm text-gray-500 mt-2">ফার্মাসি ও প্রতিষ্ঠানগুলোর জন্য</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-4xl font-bold text-gray-800">৳ ৯৯৯ / মাস</p>
              <ul className="text-left space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-700" size={18} /> আনলিমিটেড প্রেসক্রিপশন আপলোড
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-700" size={18} /> ফার্মাসিউটিক্যাল অ্যাপ ইন্টিগ্রেশন
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-700" size={18} /> উন্নত AI যাচাই ও ভেরিফিকেশন
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-700" size={18} /> সেন্ট্রালাইজড হেলথ রেকর্ডস
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-700" size={18} /> প্রাধান্য সাপোর্ট
                </li>
              </ul>
              <Button className="w-full bg-green-700 hover:bg-green-800 text-white">সাবস্ক্রাইব করুন</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
