/**** 
  IMPORTANT: This page is a Server Component by default. 
  DO NOT add "use client"; unless necessary.
  Keep this as a Server Component for better performance.

  Best Practice:
    - Keep **page.jsx** as a Server Component.
    - Create a separate **Client Component** inside the same folder and import it.
****/

export default function TermsOfUse() {
  return (
    <div className="container mx-auto py-32 px-8 sm:px-16 bg-white text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-4">Terms and Conditions</h1>
      <p className="text-center text-sm text-gray-500 mb-8">Last updated: March 09, 2025</p>
      <p className="text-lg leading-relaxed mb-8">
        Please read these terms and conditions carefully before using Our Service.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Interpretation and Definitions</h2>
      
      <h3 className="text-xl font-semibold mt-4 mb-2">Interpretation</h3>
      <p className="text-lg leading-relaxed mb-6">
        The words of which the initial letter is capitalized have meanings defined under the following conditions.
        The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">Definitions</h3>
      <p className="text-lg leading-relaxed mb-6">For the purposes of these Terms and Conditions:</p>
      <ul className="list-inside list-disc text-lg mb-8">
        <li><strong>Affiliate:</strong> An entity that controls, is controlled by, or is under common control with a party.</li>
        <li><strong>Country:</strong> Ontario, Canada</li>
        <li><strong>Company:</strong> Olympic Fit ("We", "Us", "Our")</li>
        <li><strong>Device:</strong> Any device capable of accessing the Service.</li>
        <li><strong>Service:</strong> The Website.</li>
        <li><strong>Terms and Conditions:</strong> These Terms and Conditions that form the entire agreement between You and the Company.</li>
        <li><strong>Third-party Social Media Service:</strong> Any services or content provided by a third party.</li>
        <li><strong>Website:</strong> Olympic Fit, accessible at
          <a 
            href="https://olympic-fit-project.vercel.app/home" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://olympic-fit-project.vercel.app/home
          </a>
        </li>
        <li><strong>You:</strong> The individual accessing or using the Service, or the entity they represent.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Acknowledgment</h2>
      <p className="text-lg leading-relaxed mb-6">
        These Terms and Conditions govern the use of this Service and outline the rights and obligations of users.
      </p>
      <p className="text-lg leading-relaxed mb-6">
        By accessing or using the Service, You agree to be bound by these Terms. If You disagree, do not access the Service.
      </p>
      <p className="text-lg leading-relaxed mb-6">
        You represent that you are over 18. The Company does not permit individuals under 18 to use the Service.
      </p>
      <p className="text-lg leading-relaxed mb-8">
        Your use of the Service is also subject to our <strong>Privacy Policy</strong>. Please review it before using Our Service.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Links to Other Websites</h2>
      <p className="text-lg leading-relaxed mb-6">
        Our Service may contain links to third-party websites not owned or controlled by the Company.
        We are not responsible for their content, privacy policies, or practices.
      </p>
      <p className="text-lg leading-relaxed mb-8">
        We strongly recommend reviewing the terms and privacy policies of any third-party websites You visit.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Termination</h2>
      <p className="text-lg leading-relaxed mb-6">
        We may terminate or suspend Your access immediately for any reason, including breach of these Terms.
      </p>
      <p className="text-lg leading-relaxed mb-8">Upon termination, Your right to use the Service ceases immediately.</p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Limitation of Liability</h2>
      <p className="text-lg leading-relaxed mb-8">
        To the maximum extent permitted by law, the Company and its suppliers shall not be liable for special, incidental, indirect, or consequential damages.
      </p>
    </div>
  );
}
  
