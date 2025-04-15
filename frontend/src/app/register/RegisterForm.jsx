"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUser } from "../../routes/users";

export default function RegisterForm() {
  const router = useRouter();
  const startTime = new Date().toISOString().slice(0, 16);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    const formData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      username: firstName,
      phone_number: phoneNumber,
      password_hash: password,
      gender: "",
      address: "",
      membership: {
        end_date: "2026-01-01",
        start_date: startTime,
        plan_code: [],
        status: "",
      },
      dob: dob,
      media: "",
      employee: null,
      booked_classes: [],
      last_booked_classes: []
    };
    console.log("formData: "+formData);
    const user = await createUser(formData);
    console.log(user);
    alert("Form submitted successfully!");
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-5xl flex flex-col md:flex-row mt-28 mb-8 container mx-auto">
      <div className="w-full md:w-1/2 pr-0 md:pr-4 border-b md:border-r md:border-b-0 flex flex-col justify-center pb-6 md:pb-0">
        <h2 className="text-2xl mb-4 text-center md:text-left text-midnight">Create an Account</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="firstName" placeholder="First Name" className="w-full border p-2 rounded outline-none"
              value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" name="lastName" placeholder="Last Name" className="w-full border p-2 rounded outline-none"
              value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="phoneNumber" placeholder="Phone Number" className="w-full border p-2 rounded outline-none"
              value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            <input type="email" name="email" placeholder="Email" className="w-full border p-2 rounded outline-none"
              value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          
          <div>
            <label htmlFor="dateOfBirth" className="block text-gray-700 text-sm font-medium mb-1">Date of Birth</label>
            <input type="date" id="dateOfBirth" name="dateOfBirth" className="w-full border p-2 rounded outline-none"
              value={dob} onChange={(e) => setDateOfBirth(e.target.value)} />
          </div>

          <input type="password" name="password" placeholder="Password" className="w-full border p-2 rounded outline-none"
            value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" className="w-full border p-2 rounded outline-none"
            value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="agreedToTerms"
                className="accent-blue-500 outline-none"
                checked={agreedToTerms} onChange={(e) => setAgreedToTerms(e.target.checked)}
              />
              <label className="text-sm">
                I have read and agree to{" "}
                <a href="#" className="text-silver-slate underline">Terms of Use</a> and{" "}
                <a href="#" className="text-silver-slate underline">Privacy Statement</a>
              </label>
            </div>

            {errors.agreedToTerms && (
              <p className="block text-red-700 font-bold text-sm mt-1">
                {errors.agreedToTerms}
              </p>
            )}
          </div>

          <button type="submit" className="w-full bg-midnights text-white px-4 py-2 rounded hover:bg-[#1d2325]">
            Register
          </button>
        </form>
      </div>

      <div className="w-full md:w-1/2 pl-0 md:pl-4 flex flex-col justify-center items-center pt-6 md:pt-0">
        <div className="p-4 border bg-gradient-to-b from-silver-slate to-midnights rounded-md text-center w-full">
          <h2 className="text-lg font-semibold text-off-white mb-2">Existing Customer</h2>
          <p className="text-sm text-off-white mb-4">
            You can log in to your existing account if you already have one.
          </p>
          <button
            className="bg-[#232a2c] text-white px-4 py-2 rounded hover:bg-[#1d2325]"
            onClick={() => router.push("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
