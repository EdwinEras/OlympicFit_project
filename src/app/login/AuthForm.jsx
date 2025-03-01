"use client";

import { useState } from "react";
import LoginForm from "./LoginForm";
import ResetPasswordForm from "./ResetPasswordForm";
import { useRouter } from "next/navigation";

export default function AuthForm() {
  const [showReset, setShowReset] = useState(false);
  const router = useRouter(); // For navigation

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-5xl flex min-h-[600px]">
      {/* Left Section - Login or Reset Password */}
      <div className="w-1/2 pr-4 border-r flex flex-col justify-center">
        {showReset ? (
          <ResetPasswordForm onBack={() => setShowReset(false)} />
        ) : (
          <LoginForm onReset={() => setShowReset(true)} />
        )}
      </div>

      {/* OR Separator */}
      <div className="flex flex-col items-center justify-center mx-4 relative">
        <div className="w-[1px] bg-gray-300 h-full"></div>
        <span className="absolute bg-white px-2 text-gray-600 text-sm">OR</span>
      </div>

      {/* Right Section - Register */}
      <div className="w-1/2 pl-4 flex flex-col justify-center items-center">
        <div className="p-4 border border-blue-300 rounded-md text-center bg-blue-50 w-full">
          <h2 className="text-lg font-semibold">Create an Account</h2>
          <p className="text-sm text-gray-600 mb-3">
            If you don’t have an account, you can register for one.
          </p>
          <button
            className="bg-[#232a2c] text-white border border-[#1d2325] px-4 py-2 rounded hover:bg-[#1d2325]"
            onClick={() => router.push("/register")} // Redirects to register page
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
