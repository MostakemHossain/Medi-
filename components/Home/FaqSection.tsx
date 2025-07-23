import { BadgeCheck } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      title: "অস্পষ্ট হাতের লেখা",
      desc: "হাতের লেখা ডিজিটাল রূপে রূপান্তর হওয়ায় আর বিভ্রান্তি নেই।",
    },
    {
      title: "ঔষধের সময় ভুলে যাওয়া",
      desc: "ডিজিটাল রিমাইন্ডার ও নোটিফিকেশনে সময়মতো ওষুধ গ্রহণ নিশ্চিত হয়।",
    },
    {
      title: "হারানো বা নষ্ট হওয়া",
      desc: "সব ব্যবস্থাপত্র ক্লাউডে সংরক্ষিত থাকে, কখনো হারায় না।",
    },
    {
      title: "ইংরেজি ভাষা না বোঝা",
      desc: "বাংলায় অনুবাদসহ নির্দেশনা পাওয়ার সুবিধা।",
    },
    {
      title: "ডাক্তার বদল করলে পুরাতন তথ্য না থাকা",
      desc: "পূর্ববর্তী সব তথ্য সেভ থাকায় চিকিৎসা ধারাবাহিক থাকে।",
    },
    {
      title: "ভুল ওষুধ কেনা",
      desc: "Prescription verification ব্যবস্থায় ফার্মেসিতে সঠিক ওষুধ নিশ্চিত হয়।",
    },
    {
      title: "অ্যালার্জির ইতিহাস জানা না থাকা",
      desc: "রোগীর মেডিকেল ইতিহাস সংরক্ষিত থাকে, নিরাপদ ওষুধ নির্বাচন সম্ভব।",
    },
    {
      title: "পরিপূর্ণ দিকনির্দেশনা না বোঝা",
      desc: "সহজ ভাষায় এবং ভিডিও নির্দেশনাসহ পরিষ্কার বোঝানোর ব্যবস্থা।",
    },
    {
      title: "বয়স্কদের ভুলে যাওয়া",
      desc: "অটো রিমাইন্ডার ও ডিজিটাল সহায়তায় ভুল কমে।",
    },
    {
      title: "Follow-up বা যোগাযোগের অসুবিধা",
      desc: "ডাক্তারের সাথে অনলাইন ফলোআপ ও মেসেজিং সুবিধা।",
    },
    {
      title: "শিশুদের জন্য সঠিক ডোজ নির্ধারণে সমস্যা",
      desc: "বয়স ও ওজন অনুযায়ী সঠিক ডোজ অটোমেটিক জেনারেট হয়।",
    },
    {
      title: "কোনো কেন্দ্রীয় রেকর্ড না থাকা",
      desc: "একটি Centralized Digital Prescription System সব ডেটা সংরক্ষণ করে।",
    },
  ];

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-green-700">
        আপনার সমস্যার সমাধান এখানে
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 space-y-6">
          {faqs.slice(0, 6).map((faq, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="flex items-start gap-3">
                <BadgeCheck className="text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">{faq.title}</h3>
                  <p className="text-gray-600 text-sm">{faq.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 space-y-6">
          {faqs.slice(6, 12).map((faq, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="flex items-start gap-3">
                <BadgeCheck className="text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">{faq.title}</h3>
                  <p className="text-gray-600 text-sm">{faq.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
