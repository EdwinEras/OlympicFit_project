/**** 
  IMPORTANT: This page is a Server Component by default. 
  DO NOT add "use client"; unless necessary.
  Keep this as a Server Component for better performance.

  Best Practice:
    - Keep **page.jsx** as a Server Component.
    - Create a separate **Client Component** inside the same folder and import it.
****/

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-32 px-8 sm:px-16 bg-white text-gray-800">
      <h1 className="text-3xl font-bold text-center text-gray-900">Privacy Policy</h1>
      <p className="text-center text-gray-600 mt-2">Last updated: March 09, 2025</p>

      <section className="mt-8">
        <p className="leading-relaxed">
          This Privacy Policy describes our policies on the collection, use, and disclosure of your
          information when you use our service. It also explains your privacy rights and how the law
          protects you.
        </p>
        <p className="mt-4">
          We use your personal data to provide and improve the service. By using the service, you agree
          to the collection and use of information in accordance with this Privacy Policy. This Privacy
          Policy has been created with the help of the{" "}
          <a
            href="https://www.termsfeed.com/privacy-policy-generator/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Privacy Policy Generator
          </a>.
        </p>
      </section>

      <h2 className="text-2xl font-semibold mt-10">Interpretation and Definitions</h2>

      <h3 className="text-xl font-semibold mt-6">Interpretation</h3>
      <p className="leading-relaxed">
        The words with capitalized first letters have meanings defined under the following conditions.
        The following definitions apply regardless of whether they appear in singular or plural.
      </p>

      <h3 className="text-xl font-semibold mt-6">Definitions</h3>
      <p className="mt-2">For the purposes of this Privacy Policy:</p>
      <ul className="list-disc list-inside mt-4 space-y-3">
        <li>
          <strong>Account:</strong> A unique account created for you to access our service.
        </li>
        <li>
          <strong>Affiliate:</strong> Any entity that controls, is controlled by, or is under common
          control with a party.
        </li>
        <li>
          <strong>Company:</strong> ("We", "Us", "Our") refers to Olympic Fit.
        </li>
        <li>
          <strong>Cookies:</strong> Small files placed on your device that store browsing data.
        </li>
        <li>
          <strong>Country:</strong> Ontario, Canada
        </li>
        <li>
          <strong>Device:</strong> Any device such as a computer, phone, or tablet.
        </li>
        <li>
          <strong>Personal Data:</strong> Any information that relates to an identifiable individual.
        </li>
        <li>
          <strong>Service:</strong> Refers to the website.
        </li>
        <li>
          <strong>Service Provider:</strong> A third-party company or individual that helps provide the service.
        </li>
        <li>
          <strong>Usage Data:</strong> Data collected automatically when using the service.
        </li>
        <li>
          <strong>Website:</strong> Olympic Fit, accessible at{" "}
          <a
            href="https://olympic-fit-project.vercel.app/home"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            olympic-fit-project.vercel.app/home
          </a>
        </li>
        <li>
          <strong>You:</strong> The individual or entity accessing the service.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10">Collecting and Using Your Personal Data</h2>

      <h3 className="text-xl font-semibold mt-6">Types of Data Collected</h3>

      <h4 className="text-lg font-semibold mt-4">Personal Data</h4>
      <p className="leading-relaxed">
        While using our service, we may ask you to provide certain personally identifiable information:
      </p>
      <ul className="list-disc list-inside mt-4 space-y-2">
        <li>Email address</li>
        <li>First name and last name</li>
        <li>Phone number</li>
        <li>Address, State, Province, ZIP/Postal code, City</li>
        <li>Usage Data</li>
      </ul>

      <h4 className="text-lg font-semibold mt-6">Usage Data</h4>
      <p className="leading-relaxed">
        Usage data is collected automatically and may include your device's IP address, browser type,
        time spent on pages, and other diagnostic data.
      </p>

      <h4 className="text-lg font-semibold mt-6">Tracking Technologies and Cookies</h4>
      <p className="leading-relaxed">
        We use cookies and tracking technologies to improve user experience. You can choose to disable
        cookies in your browser settings.
      </p>

      <footer className="border-t mt-12 pt-6 text-center text-gray-500">
        <p>© 2025 Olympic Fit. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

