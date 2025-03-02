"use client";

export default function ResetPasswordForm({ onBack }) {
  return (
    <div>
      <h2 className="text-xl text-midnights font-semibold mb-2">Reset Password</h2>
      <p className="text-midnights mb-4 text-sm">Enter your email to receive a reset link.</p>

      <form className="space-y-4">
        <div>
          <label className="block font-medium">Email</label>
          <input type="email" className="w-full border p-2 rounded mt-1" />
        </div>

        <button className="w-full bg-[#232a2c] text-white px-4 py-2 rounded hover:bg-[#1d2325]">
          Send Reset Link
        </button>
      </form>

      <button onClick={onBack} className="mt-4 text-silver-slate text-sm underline">
        Back to Log In
      </button>
    </div>
  );
}
