import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Olympic Fit</title>
        <meta name="description" content="Privacy Policy of Olympic Fit" />
      </Head>

      {/* Outer container: White background with padding to avoid footer touch */}
      <section className="bg-white text-gray-900 min-h-screen flex flex-col items-center pt-32 pb-20 px-6">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-sm text-gray-600 mb-10">Last updated: March 6, 2025</p>
        </div>

        {/* Inner container: Dark background, shorter height */}
        <div className="max-w-3xl w-full bg-gray-900 text-white shadow-lg rounded-lg p-8 max-h-[80vh] overflow-y-auto">
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p className="mt-2 text-gray-300">
            Welcome to <strong>Olympic Fit</strong>. Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>

          <h2 className="text-2xl font-semibold mt-6">2. Information We Collect</h2>
          <p className="mt-2 text-gray-300">
            We may collect personal information such as your name, email, and payment details when you use our services.
          </p>

          <h2 className="text-2xl font-semibold mt-6">3. How We Use Your Information</h2>
          <p className="mt-2 text-gray-300">Your information is used to:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-300">
            <li>Provide and improve our services</li>
            <li>Process transactions</li>
            <li>Respond to customer support inquiries</li>
            <li>Send updates and marketing materials (if you opt-in)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">4. Sharing Your Information</h2>
          <p className="mt-2 text-gray-300">
            We do not sell your personal data. Your information may be shared with trusted third parties only when necessary for service fulfillment.
          </p>

          <h2 className="text-2xl font-semibold mt-6">5. Security Measures</h2>
          <p className="mt-2 text-gray-300">
            We implement security measures to protect your personal data from unauthorized access, disclosure, or misuse.
          </p>

          <h2 className="text-2xl font-semibold mt-6">6. Cookies and Tracking Technologies</h2>
          <p className="mt-2 text-gray-300">
            We use cookies to enhance your experience. You can adjust your browser settings to disable cookies.
          </p>

          <h2 className="text-2xl font-semibold mt-6">7. Changes to This Policy</h2>
          <p className="mt-2 text-gray-300">
            We may update this policy periodically. Please review this page regularly for changes.
          </p>

          <h2 className="text-2xl font-semibold mt-6">8. Contact Us</h2>
          <p className="mt-2 text-gray-300">
            If you have any questions, please contact us at  
            <a href="mailto:olympicfit@outlook.com" className="text-blue-400 hover:underline ml-1">
              olympicfit@outlook.com
            </a>.
          </p>
        </div>
      </section>
    </>
  );
}
