
"use client";
import Banner from "../../components/ui/Banner";

export default function AboutUsbanner() {
  return (
    <>
      <Banner bgImage="/images/pricing-image.webp" title="About Us" />
      <section className="container py-16 mx-auto w-[85%] text-center">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-6">Why We Do What We Do</h2>
        <p className="text-base max-w-2xl mx-auto">
          At Olympic Fit, we are dedicated to helping individuals achieve their fitness goals through
          personalized training programs, expert guidance, and a supportive community. Our approach
          integrates strength training, mindfulness, and nutrition to create a holistic fitness experience.
        </p>
      </section>
    </>
  );
}