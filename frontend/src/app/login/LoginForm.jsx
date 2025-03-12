"use client";

import { useRouter } from "next/navigation";

export default function LoginForm({ onReset }) {
  const router = useRouter();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2 uppercase font-semibold">Login</h2>

      <form className="space-y-4">
        <div>
          <label className="block font-medium">Email</label>
          <input type="email" className="w-full border p-2 rounded mt-1" />
        </div>

        <div>
          <label className="block font-medium">Password</label>
          <input type="password" className="w-full border p-2 rounded mt-1" />
        </div>

        <div className="flex justify-between items-center text-sm">
          <button type="button" onClick={onReset} className="text-silver-slate  hover:underline">
            Reset Password
          </button>
        </div>

        <button className="w-full bg-midnights text-white px-4 py-2 rounded hover:bg-[#1d2325]">
          Login
        </button>
      </form>
    </div>
  );
}
