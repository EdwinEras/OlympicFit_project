"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();

  // State to track form inputs and errors
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: "",
    agreedToTerms: false,
  });

  const [errors, setErrors] = useState({});

  // Function to validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    // Validate required fields
    Object.keys(formData).forEach((field) => {
      if (!formData[field] && field !== "agreedToTerms") {
        validationErrors[field] = "This field is required.";
      }
    });

    // Email validation
    if (formData.email && !validateEmail(formData.email)) {
      validationErrors.email = "Please enter a valid email address.";
    }

    // Password match validation
    if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match.";
    }

    // Terms and conditions validation
    if (!formData.agreedToTerms) {
      validationErrors.agreedToTerms = "You must agree to the Terms of Use.";
    }

    // If there are validation errors, set them and stop submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Clear errors and proceed with form submission
    setErrors({});
    alert("Form submitted successfully!");
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-5xl flex flex-col md:flex-row mt-28 mb-8 container mx-auto">
      {/* Register Form */}
      <div className="w-full md:w-1/2 pr-0 md:pr-4 border-b md:border-r md:border-b-0 flex flex-col justify-center pb-6 md:pb-0">
        <h2 className="text-2xl mb-4 text-center md:text-left text-midnight">Create an Account</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="firstName" placeholder="First Name" className="w-full border p-2 rounded outline-none"
              value={formData.firstName} onChange={handleChange} />
            <input type="text" name="lastName" placeholder="Last Name" className="w-full border p-2 rounded outline-none"
              value={formData.lastName} onChange={handleChange} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="phoneNumber" placeholder="Phone Number" className="w-full border p-2 rounded outline-none"
              value={formData.phoneNumber} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" className="w-full border p-2 rounded outline-none"
              value={formData.email} onChange={handleChange} />
          </div>
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          
          <input type="date" name="dateOfBirth" className="w-full border p-2 rounded outline-none"
            value={formData.dateOfBirth} onChange={handleChange} />

          <input type="password" name="password" placeholder="Password" className="w-full border p-2 rounded outline-none"
            value={formData.password} onChange={handleChange} />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" className="w-full border p-2 rounded outline-none"
            value={formData.confirmPassword} onChange={handleChange} />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}

          <div className="flex items-center space-x-2">
            <input type="checkbox" name="agreedToTerms" className="accent-blue-500 outline-none"
              checked={formData.agreedToTerms} onChange={handleChange} />
            <label className="text-sm">
              I have read and agree to{" "}
              <a href="#" className="text-silver-slate underline">Terms of Use</a> and{" "}
              <a href="#" className="text-silver-slate underline">Privacy Statement</a>
            </label>
          </div>
          {errors.agreedToTerms && <p className="text-red-500 text-sm">{errors.agreedToTerms}</p>}

          <button type="submit" className="w-full bg-midnights text-white px-4 py-2 rounded hover:bg-[#1d2325]">
            Register
          </button>
        </form>
      </div>

      {/* Existing Customer */}
      <div className="w-full md:w-1/2 pl-0 md:pl-4 flex flex-col justify-center items-center pt-6 md:pt-0">
        <div className="p-4 border bg-gradient-to-b from-silver-slate to-midnights rounded-md text-center w-full">
          <h2 className="text-lg font-semibold text-off-white mb-2">Existing Customer</h2>
          <p className="text-sm text-off-white mb-4">
            You can log in to your existing account if you already have one.
          </p>
          <button
            className="bg-[#232a2c] text-white px-4 py-2 rounded hover:bg-[#1d2325]"
            onClick={() => router.push("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
