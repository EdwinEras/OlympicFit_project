"use client";

import { useState } from "react";

export default function ResetPasswordForm({ onBack }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("If an account exists with this email, a reset link has been sent.");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Reset Password</h2>
      <p className="text-gray-600 mb-4">Enter your email to receive a reset link.</p>

      {message && <p className="text-green-500 mb-4">{message}</p>}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded mt-1"
            required
          />
        </div>

        <button className="bg-[#232a2c] text-white border border-[#1d2325] px-4 py-2 rounded hover:bg-[#1d2325]">
          Send Reset Link
        </button>
      </form>

      <button onClick={onBack} className="mt-4 text-blue-500 hover:underline">
        Back to Log In
      </button>
    </div>
  );
}
