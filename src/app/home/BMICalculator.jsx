"use client";
import { useState } from "react";
import { ArrowRight, User } from "lucide-react";
 
const BMICalculator = () => {
  const [height, setHeight] = useState(() =>
    typeof window !== "undefined" ? "" : null
  );
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBMI] = useState(null);
  const [status, setStatus] = useState("");
 
  const calculateBMI = () => {
    if (!height || !weight) {
      setStatus("Please enter valid values for height and weight.");
      return;
    }
 
    const heightInMeters = height / 100;
    const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(
      1
    );
 
    setBMI(calculatedBMI);
 
    if (calculatedBMI < 18.5) {
      setStatus("Underweight");
    } else if (calculatedBMI >= 18.5 && calculatedBMI <= 24.9) {
      setStatus("Healthy");
    } else if (calculatedBMI >= 25 && calculatedBMI <= 29.9) {
      setStatus("Overweight");
    } else {
      setStatus("Obese");
    }
  };
 
  return (
    <div className="container mx-auto mb-28 px-16 md:px-24 text-center flex flex-col items-center">
      <h2 className="text-2xl sm:text-4xl font-semibold mb-6">What Is BMI</h2>
      <p className="text-base mb-6 max-w-xl">
        Body mass index (BMI) is a calculation that estimates body fat
        percentage based on height and weight. It's a useful tool for assessing
        weight and health risk.
      </p>
 
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 items-start w-full">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              placeholder="Height / cm"
              className="p-2 border rounded-md w-full outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <input
              type="number"
              placeholder="Weight / kg"
              className="p-2 border rounded-md w-full outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              placeholder="Age"
              className="p-2 border rounded-md w-full outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <select
              className="p-2 border rounded-md w-full outline-none"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
 
          <button
            className="flex items-center uppercase justify-center bg-midnights text-white/80 py-3 w-full"
            onClick={calculateBMI}
          >
            Calculate <ArrowRight className="ml-2" size={18} />
          </button>
        </div>
 
        <div>
          <table className="w-full border text-sm">
            <thead>
              <tr className="bg-midnights">
                <th className="p-2.5 text-white opacity-80">BMI</th>
                <th className="p-2.5 text-white opacity-80">Weight Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border">
                <td className="p-2 border">Below 18.5</td>
                <td className="p-2 border">Underweight</td>
              </tr>
              <tr className="border">
                <td className="p-2 border">18.5 - 24.9</td>
                <td className="p-2 border">Healthy</td>
              </tr>
              <tr className="border">
                <td className="p-2 border">25.0 - 29.9</td>
                <td className="p-2 border">Overweight</td>
              </tr>
              <tr className="border">
                <td className="p-2 border">30.0 and Above</td>
                <td className="p-2 border">Obese</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-midnights mt-4">
            <strong>BMR:</strong> Metabolic Rate / BMI Body Mass Index
          </p>
        </div>
      </div>
 
      {bmi && (
        <div
          className={`mt-6 flex w-full p-3 text-white/80 ${
            status === "Healthy" ? "bg-[#378c56]" : "bg-red"
          }`}
        >
          <User className="mr-2 text-lg" />
          <p className="font-semibold text-white/80">
            YOU ARE! <span className="uppercase mr-4">{status}</span>Your BMI is{" "}
            {bmi}.
          </p>
        </div>
      )}
    </div>
  );
};
 
export default BMICalculator;