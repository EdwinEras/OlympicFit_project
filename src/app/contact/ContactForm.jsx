"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Your Full Name"
          className="w-full border p-2 rounded outline-none text-midnights"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border p-2 rounded outline-none text-midnights"
          required
        />
      </div>

      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Subject"
        className="w-full border p-2 rounded outline-none text-midnights"
        required
      />

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Drop us a few lines here"
        rows="4"
        className="w-full border p-2 rounded resize-none outline-none text-midnights"
        required
      />

      <button
        type="submit"
        className="bg-[#232a2c] text-white px-6 py-2 rounded hover:bg-[#1d2325]"
      >
        SEND US A MESSAGE
      </button>
    </form>
  );
}
