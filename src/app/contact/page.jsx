export const metadata = {
  title: "Olympic Fit - Contact Us",
};

import ContactForm from "./ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";


export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100 pt-20"> 
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">FEEL FREE TO ASK US!</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Proin elementum blandit sapien in placerat.<br />
        </p>

        {/* Contact Form & Address Section */}
        <div className="flex flex-wrap md:flex-nowrap">
          {/* Address Section */}
          <div className="w-full md:w-1/3 pr-6 mb-6 md:mb-0">
            <h3 className="font-semibold text-lg">Address:</h3>
            <p className="text-gray-700">1750 Finch Ave E,<br /> North York, ON M2J 2X5</p>

            <h3 className="font-semibold text-lg mt-4">Email:</h3>
            <p className="text-gray-700">theservicehub@senecapolytechnic.ca</p>

            <h3 className="font-semibold text-lg mt-4">Phone no:</h3>
            <p className="text-gray-700">1-627-134-44527</p>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-2/3 md:ml-auto md:pl-48 md:pr-10 md:-mt-10">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="bg-blue-100 py-8">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
          <div className="flex justify-center gap-16 text-4xl">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}