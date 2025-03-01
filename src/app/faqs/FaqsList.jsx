"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "../../lib/faqsData";

export default function FaqList() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto py-20 px-8 md:p-20">
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-2 border-silver-slate rounded-xl p-6 bg-off-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div
              className="flex justify-between items-center cursor-pointer p-2 rounded-md transition-all duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-md md:text-xl font-semibold text-old-black">
                {faq.quiz_text}
              </h3>
              <div className="text-xl text-ocean-blue">
                {openIndex === index ? <Minus /> : <Plus />}
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              {openIndex === index && (
                <p className="mt-3 text-old-black text-sm md:text-lg transition-all duration-300 ease-in-out">
                  {faq.answer_text}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
