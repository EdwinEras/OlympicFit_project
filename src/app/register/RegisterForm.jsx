"use client";

import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-5xl flex flex-col md:flex-row mt-28 mb-8 container mx-auto">
      {/* Register Form */}
      <div className="w-full md:w-1/2 pr-0 md:pr-4 border-b md:border-r md:border-b-0 flex flex-col justify-center pb-6 md:pb-0">
        <h2 className="text-2xl font-bold mb-4 text-center md:text-left uppercase text-midnight">Create an Account</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="w-full border p-2 rounded" required />
            <input type="text" placeholder="Last Name" className="w-full border p-2 rounded" required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Phone Number" className="w-full border p-2 rounded" required />
            <input type="email" placeholder="Email" className="w-full border p-2 rounded" required />
          </div>
          <input type="date" className="w-full border p-2 rounded" required />
          <input type="password" placeholder="Password" className="w-full border p-2 rounded" required />
          <input type="password" placeholder="Confirm Password" className="w-full border p-2 rounded" required />
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="accent-blue-500" required />
            <label className="text-sm">
              I have read and agree to{" "}
              <a href="#" className="text-blue-400 hover:underline">Terms of Use</a> and{" "}
              <a href="#" className="text-blue-400 hover:underline">Privacy Statement</a>
            </label>
          </div>
          <button className="w-full bg-midnights text-white px-4 py-2 rounded hover:bg-[#1d2325]">
            Register
          </button>
        </form>
      </div>

      {/* Existing Customer */}
      <div className="w-full md:w-1/2 pl-0 md:pl-4 flex flex-col justify-center items-center pt-6 md:pt-0">
        <div className="p-4 border border-blue-300 rounded-md text-center bg-blue-50 w-full">
          <h2 className="text-lg font-semibold">Existing Customer</h2>
          <p className="text-sm text-gray-600 mb-3">
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
