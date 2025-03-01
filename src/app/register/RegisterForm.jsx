"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterForm() {
  const router = useRouter();

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-5xl flex min-h-[700px]">
      <div className="w-1/2 pr-4 border-r flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-2">Create an Account</h2>
        <p className="text-gray-600 mb-4">Log in or create an account to access</p>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="w-full border p-2 rounded mt-1" required />
            <input type="text" placeholder="Last Name" className="w-full border p-2 rounded mt-1" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Phone Number" className="w-full border p-2 rounded mt-1" required />
            <input type="email" placeholder="Email" className="w-full border p-2 rounded mt-1" required />
          </div>
          <input type="date" placeholder="Date of Birth" className="w-full border p-2 rounded mt-1" required />
          <input type="password" placeholder="Password" className="w-full border p-2 rounded mt-1" required />
          <input type="password" placeholder="Confirm Password" className="w-full border p-2 rounded mt-1" required />
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="accent-blue-500" required />
            <label className="text-sm">
              I have read and agree to <a href="#" className="text-blue-500 hover:underline">Terms of Use</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Statement</a>
            </label>
          </div>
          <button className="w-full bg-[#232a2c] text-white px-4 py-2 rounded hover:bg-[#1d2325]">
            Register
          </button>
        </form>
      </div>
      <div className="w-1/2 pl-4 flex flex-col justify-center items-center">
        <div className="p-4 border border-blue-300 rounded-md text-center bg-blue-50 w-full">
          <h2 className="text-lg font-semibold">Existing Customer</h2>
          <p className="text-sm text-gray-600 mb-3">
            You can log in to your existing account if you already have one.
          </p>
          <button className="bg-[#232a2c] text-white px-4 py-2 rounded hover:bg-[#1d2325]" onClick={() => router.push("/login")}>Login</button>
        </div>
      </div>
    </div>
  );
}