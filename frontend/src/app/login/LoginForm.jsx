"use client";
import { useState } from "react";
import { loginUser } from "../../routes/login"

export default function LoginForm({ onReset }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => (
      { ...prev, [name]: value }
    ));
  };

  async function handleSubmit(){
    console.log("formData: "+formData);
    const user = await loginUser(formData);
    console.log(user);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2 uppercase font-semibold">Login</h2>

      <form className="space-y-4">
        <div>
          <label className="block font-medium">Email</label>
          <input name="email" type="email" 
          value={formData.email} onChange={handleChange}
          className="w-full border p-2 rounded mt-1" />
        </div>

        <div>
          <label className="block font-medium">Password</label>
          <input name="password" type="password" 
          value={formData.password} onChange={handleChange}
          className="w-full border p-2 rounded mt-1" />
        </div>

        <div className="flex justify-between items-center text-sm">
          <button type="button" onClick={onReset} className="text-silver-slate  hover:underline">
            Reset Password
          </button>
        </div>

        <button 
          formAction={handleSubmit}
          className="w-full bg-midnights text-white px-4 py-2 rounded hover:bg-[#1d2325]">
          Login
        </button>
      </form>
    </div>
  );
}
