"use client";

import { useState } from "react";
const route = "https://olympic-fit-project-g7l5.vercel.app"

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(route+"/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("✅ Message sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert(`❌ ${result.error || result.errors?.[0]?.msg || "Something went wrong."}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("❌ There was a problem sending your message. Try again later.");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        className="bg-[#232a2c] text-white px-6 py-2 rounded hover:bg-[#1d2325] transition"
      >
        SEND US A MESSAGE
      </button>
    </form>
  );
}
