"use client";
import { useState } from "react";
import { loginUser } from "../../routes/login"
import { redirect } from "next/navigation";

export default function LoginForm({ onReset }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const saveToLocalStorage = (key, value) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };

  const redirectLoggedUser = (user) =>{
    if(user?.employee?.role === "trainer") {
      redirect("/dash_trainer");
    }else if(user?.employee?.role === "admin") {
      redirect("/dash_admin");
    }else{
      redirect("/dash_member");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => (
      { ...prev, [name]: value }
    ));
  };

  async function handleSubmit(){
    const user = await loginUser(formData);
    if(user){
      saveToLocalStorage("user", user);
      redirectLoggedUser(user);
    }
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
