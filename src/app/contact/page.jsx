/**** 
  IMPORTANT: This page is a Server Component by default. 
  DO NOT add "use client"; unless necessary.
  Keep this as a Server Component for better performance.

  Best Practice:
    - Keep **page.jsx** as a Server Component.
    - Create a separate **Client Component** inside the same folder and import it.
****/

export const metadata = {
  title: "Olympic Fit - Contact Us",
};

import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-6 py-28">
        <h2 className=" text-3xl md:text-4xl font-bold text-midnights mb-4 text-center">
          FEEL FREE TO ASK US!
        </h2>
        <p className="text-brand-200 mb-8 text-center text-lg text-midnights">
          We’re happy to help! Drop us a message and we’ll get back to you soon.
        </p>

        <div className="flex flex-wrap md:flex-nowrap items-start bg-gradient-to-b from-silver-slate to-midnights justify-between bg-white/20 backdrop-blur-none rounded-xl p-8 md:p-16 shadow-md shadow-white">
          {/* Address Section */}
          <div className="w-full md:w-1/3 text-midnights space-y-2 mb-4">
            <h3 className="text-lg font-semibold text-white">Address:</h3>
            <p className="text-sm text-off-white">
              1750 Finch Ave E,
              <br /> North York, ON M2J 2X5
            </p>

            <h3 className="text-md font-semibold text-white">Email:</h3>
            <p className="text-sm text-off-white underline cursor-pointer">
              olympicfit@outlook.com
            </p>

            <h3 className="text-md font-semibold text-white">Phone:</h3>
            <p className="text-sm text-off-white">1-627-134-44527</p>
          </div>

          <div className="w-full md:w-2/3 md:pl-12">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
