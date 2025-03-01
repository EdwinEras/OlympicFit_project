"use client";

import { useState } from "react";

export default function LoginForm({ onReset }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Login</h2>
      <p className="text-gray-600 mb-4">Log in to access your account.</p>

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

        <div>
          <label className="block font-medium">Password</label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 rounded mt-1"
            required
          />
        </div>

        <div className="flex justify-between items-center text-sm">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-blue-500" />
            <span>Remember Me</span>
          </label>
          <button type="button" onClick={onReset} className="text-blue-500 hover:underline">
            Reset Password
          </button>
        </div>

        <button className="bg-[#232a2c] text-white border border-[#1d2325] px-4 py-2 rounded hover:bg-[#1d2325]">
          Login
        </button>
      </form>
    </div>
  );
}
