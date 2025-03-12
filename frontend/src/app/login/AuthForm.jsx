"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LoginForm from "./LoginForm";
import ResetPasswordForm from "./ResetPasswordForm";
import Link from "next/link";

export default function AuthForm() {
  const [showReset, setShowReset] = useState(false);
  const router = useRouter();

  useEffect(() => {
    console.log("Router initialized on client side", router);
  }, [router]);

  return (
    <div className="bg-white shadow-lg container rounded-lg p-8 mx-8 w-full md:max-w-5xl flex flex-col md:flex-row mb-24 mt-[10rem]">
      <div className="w-full md:w-1/2 md:pr-4 flex flex-col justify-center">
        {showReset ? (
          <ResetPasswordForm onBack={() => setShowReset(false)} />
        ) : (
          <LoginForm onReset={() => setShowReset(true)} />
        )}
      </div>

      <div className="hidden md:flex flex-col items-center justify-center mx-4 relative">
        <div className="w-[1px] bg-[#9fadb3] h-full"></div>
        <span className="absolute bg-white px-2 text-gray-600 text-sm">OR</span>
      </div>

      <div className="w-full md:w-1/2 md:pl-4 flex flex-col justify-center items-center mt-6 md:mt-0">
        <div className="p-4 border border-silver-slate rounded-md text-center bg-gradient-to-b from-silver-slate to-midnights w-full">
          <h2 className="text-lg font-semibold text-off-white mb-2">
            Create an Account
          </h2>
          <p className="text-sm text-off-white mb-4">
            If you don’t have an account, you can register for one.
          </p>
          <Link
            href="/register"
            className="bg-[#232a2c] text-white border border-[#1d2325] px-4 py-2 rounded hover:bg-[#1d2325] inline-block text-center w-full md:w-auto"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
