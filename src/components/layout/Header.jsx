"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { User, ChevronDown, ChevronUp, Menu, X } from "lucide-react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setDropdownOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="bg-[#232a2c] shadow-md sticky w-full z-50 flex items-center justify-center">
      <nav className="container flex justify-between items-center py-6 px-4 2xl:px-8">
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link href="/" className="relative h-[42px] w-[140px] xl:w-[200px]">
            <Image
              src="/images/olympicfit-logo.png"
              alt="Olympic Logo"
              fill
              priority
              className="object-cover sm:object-contain"
            />
          </Link>
        </div>

        {/* Nav Links */}
        <ul
          className={`lg:flex lg:space-x-4 xl:space-x-8 text-white ${
            menuOpen
              ? "flex flex-col space-y-4 absolute top-20 left-0 w-full bg-[#232a2c] px-6 py-4 z-50 min-h-screen"
              : "hidden"
          }`}
        >
          <li>
            <Link href="/classes" className="uppercase text-sm">
              Classes
            </Link>
          </li>
          <li>
            <Link href="/classes-plan" className="uppercase text-sm">
              Classes Plan
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="uppercase text-sm">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/about" className="uppercase text-sm">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="uppercase text-sm">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/faqs" className="uppercase text-sm">
              FAQs
            </Link>
          </li>
          <li>
            <Link href="/contact" className="uppercase text-sm">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* User Dropdown & Language Switch */}
        <div className="flex items-center space-x-6">
          {/* Login Dropdown */}
          <div className="relative">
            <button
              className="flex items-center space-x-2 text-white"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <User size={20} />
              <div className="text-left">
                <span className="text-sm block opacity-50">Welcome</span>
                <span className="text-sm font-semibold">Sign In / Sign Up</span>
              </div>
              {dropdownOpen ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md">
                <Link
                  href="/login"
                  className="block px-4 py-2 hover:bg-gray-200 transition-all"
                >
                  Sign In
                </Link>
                <Link
                  href="/logout"
                  className="block px-4 py-2 hover:bg-gray-200 transition-all"
                >
                  Sign Out
                </Link>
                <Link
                  href="/myaccount"
                  className="block px-4 py-2 hover:bg-gray-200 transition-all"
                >
                  My Profile
                </Link>
              </div>
            )}
          </div>

          {/* Language Switch */}
          <div className="text-white">
            <span className="cursor-pointer text-sm font-semibold">EN</span> /
            <span className="cursor-pointer text-sm"> FR</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
