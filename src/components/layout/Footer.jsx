"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-midnights py-16 text-center text-white">
      <div className="container mx-auto w-[85%] flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8 md:mb-16 relative h-[60px] w-[200px] lg:w-[260px]">
          <Image
            src="/images/olympicfit-logo.png"
            alt="Olympic Logo"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center w-full mb-12">
          {/* Address */}
          <div>
            <h3 className="font-bold mb-4">ADDRESS</h3>
            <a
              href="https://www.google.ca/maps/place/1750+Finch+Ave+E,+North+York,+ON+M2J+2X5/@43.7946192,-79.3510914,17z/data=!3m1!4b1!4m6!3m5!1s0x89d4d31b1066af5d:0xb351f75f9bc1968f!8m2!3d43.7946154!4d-79.3485165!16s%2Fg%2F11w928_mxv?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-200 text-base"
            >
              1750 Finch Ave E,
              <br />
              North York, ON
              <br />
              M2J 2X5
            </a>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-bold mb-4">OPENING HOURS</h3>
            <p className="text-brand-200 text-base">
              Mo-Fr <strong>07 AM - 11 PM</strong>
            </p>
            <p className="text-brand-200 text-base">
              Weekends <strong>10 AM - 5 PM</strong>
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact US:</h3>
            <a
              className="text-brand-200 text-base"
              href="mailto:olympicfit@outlook.com"
              target="_blank"
            >
              olympicfit@outlook.com
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="mt-6 text-sm">
          <Link href="/privacy-policy" className="mx-2">
            Privacy Policy
          </Link>
          <Link href="/terms-of-use" className="mx-2">
            Terms of Use
          </Link>
        </div>

        {/* Copyright */}
        <p className="mt-4 text-sm text-brand-200">
          {`© ${year} Olympic Fit. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
}
