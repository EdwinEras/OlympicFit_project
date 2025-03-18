"use client";
import { useState } from "react";

export default function ResetPasswordForm({ onBack }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Validation check
    if (!email) {
      setError("Email is required.");
      return;
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Clear error and simulate sending reset link
    setError("");
    alert("✅ Reset link sent to " + email);
  };

  return (
    <div>
      <h2 className="text-xl text-midnights font-semibold mb-2">Reset Password</h2>
      <p className="text-midnights mb-4 text-sm">Enter your email to receive a reset link.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            className="w-full border p-2 rounded mt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
        </div>

        <button type="submit" className="w-full bg-[#232a2c] text-white px-4 py-2 rounded hover:bg-[#1d2325]">
          Send Reset Link
        </button>
      </form>

      <button onClick={onBack} className="mt-4 text-silver-slate text-sm underline">
        Back to Log In
      </button>
    </div>
  );
}
