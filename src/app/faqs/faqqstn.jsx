"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [  // Changed "faq" to "faqs" to match .map() reference
  {
    question: "What are the gym’s opening hours?",
    answer:
      "Our gym is open Monday to Friday from 7:00 AM to 11:00 PM, and on weekends from 10:00 AM to 5:00 PM. Holiday hours may vary.",
  },
  {
    question: "What types of memberships do you offer?",
    answer:
      "We offer monthly, quarterly, and annual memberships with different benefits tailored to your needs.",
  },
  {
    question: "What amenities are included with my membership?",
    answer:
      "Membership includes access to gym equipment, group classes, lockers, showers, and a sauna.",
  },
  {
    question: "Can I freeze or cancel my membership?",
    answer:
      "Yes, you can freeze or cancel your membership. Please contact our support team for details.",
  },
  {
    question: "I forgot my login credentials. What should I do?",
    answer:
      "Click on ‘Forgot Password’ on the login page and follow the instructions to reset your password.",
  },
  {
    question: "How do I update my personal details?",
    answer:
      "Log in to your profile and navigate to the settings section to update your personal details.",
  },
];

export default function FaqList() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="flex justify-center gap-4 mb-6">
        <button className="px-4 py-2 bg-gray-200 rounded">Membership</button>
        <button className="px-4 py-2 bg-gray-200 rounded">Classes</button>
        <button className="px-4 py-2 bg-gray-200 rounded">Payments</button>
        <button className="px-4 py-2 bg-gray-200 rounded">Facilities</button>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (  // This now correctly references "faqs"
          <div key={index} className="border rounded-lg p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              {openIndex === index ? <FaMinus /> : <FaPlus />}
            </div>
            {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
          </div>
        ))}
      </div>
      <footer className="text-center mt-10 text-sm text-gray-500">
        <p>© 2025 Olympic Fit. All rights reserved.</p>
        <p>Privacy Policy | Terms of Use</p>
      </footer>
    </div>
  );
}
