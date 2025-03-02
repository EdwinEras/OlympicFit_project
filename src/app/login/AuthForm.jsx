"use client";

import { useState } from "react";
import LoginForm from "./LoginForm";
import ResetPasswordForm from "./ResetPasswordForm";
import Link from "next/link";

export default function AuthForm() {
  const [showReset, setShowReset] = useState(false);

  return (
    <div className="bg-white shadow-lg container mx-auto rounded-lg p-8 mx-6 w-full md:max-w-5xl flex flex-col md:flex-row  mb-8 mt-28">
      {/* Login */}
      <div className="w-full md:w-1/2 md:pr-4 flex flex-col justify-center">
        {showReset ? (
          <ResetPasswordForm onBack={() => setShowReset(false)} />
        ) : (
          <LoginForm onReset={() => setShowReset(true)} />
        )}
      </div>

      <div className="hidden md:flex flex-col items-center justify-center mx-4 relative">
        <div className="w-[1px] bg-gray-300 h-full"></div>
        <span className="absolute bg-white px-2 text-gray-600 text-sm">OR</span>
      </div>

      {/* Register */}
      <div className="w-full md:w-1/2 md:pl-4 flex flex-col justify-center items-center mt-6 md:mt-0">
        <div className="p-4 border border-blue-300 rounded-md text-center bg-blue-50 w-full">
          <h2 className="text-lg font-semibold">Create an Account</h2>
          <p className="text-sm text-gray-600 mb-3">
            If you don’t have an account, you can register for one.
          </p>
          <Link
            href="/register"
            className="bg-midnights text-white border border-[#1d2325] px-4 py-2 rounded hover:bg-[#1d2325] inline-block text-center w-full md:w-auto"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
