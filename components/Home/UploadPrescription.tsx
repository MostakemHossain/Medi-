'use client'

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UploadCloud, FileImage } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export default function UploadPrescriptionSection() {
  const [fileName, setFileName] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
    }
  }

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <Card className="shadow-xl border-green-200">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-green-800">
              প্রেসক্রিপশন আপলোড করুন
            </CardTitle>
            <p className="text-green-700 mt-2 text-sm">
              আপনার প্রেসক্রিপশনের ছবি আপলোড করুন এবং দ্রুত ডিজিটাল কপি তৈরি করুন।
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <Label htmlFor="prescription" className="text-green-800 text-base">
                  আপনার প্রেসক্রিপশন ফাইল নির্বাচন করুন
                </Label>
                <div className={cn(
                  "mt-2 border-2 border-dashed border-green-300 rounded-xl p-6 text-center flex flex-col items-center justify-center",
                  "hover:bg-green-50 transition-colors"
                )}>
                  <UploadCloud className="w-10 h-10 text-green-600 mb-2" />
                  <p className="text-green-700 font-medium">ছবি ড্র্যাগ করুন অথবা এখানে ক্লিক করে নির্বাচন করুন</p>
                  <p className="text-sm text-green-500 mt-1">.jpg, .jpeg, .png ফাইল সমর্থিত</p>
                  <Input
                    type="file"
                    accept="image/*"
                    id="prescription"
                    className="opacity-0 absolute w-full h-full cursor-pointer"
                    onChange={handleFileChange}
                  />
                </div>
                {fileName && (
                  <div className="mt-4 flex items-center gap-2 text-green-800">
                    <FileImage className="w-5 h-5" />
                    <span className="text-sm font-medium">{fileName}</span>
                  </div>
                )}
              </div>

              <Button
                className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 mt-4"
              >
                ✅ প্রেসক্রিপশন জমা দিন
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
