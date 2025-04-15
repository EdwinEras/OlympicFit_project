"use client";
import { useState, useEffect } from "react";
import { ArrowRight, User } from "lucide-react";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBMI] = useState(null);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setBMI(null);
    setStatus("");
    setError("");
  }, [height, weight, age, gender]);

  const calculateBMI = () => {
    setError("");

    if (!height || !weight || !age || !gender) {
      setError("All fields are required.");
      return;
    }

    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);
    const ageNum = parseInt(age);

    if (heightNum <= 0 || weightNum <= 0 || ageNum <= 0) {
      setError("Enter valid values greater than 0.");
      return;
    }

    const heightInMeters = heightNum / 100;
    const calculatedBMI = weightNum / (heightInMeters * heightInMeters);
    setBMI(calculatedBMI.toFixed(1));

    if (calculatedBMI < 18.5) {
      setStatus("underweight");
    } else if (calculatedBMI < 25) {
      setStatus("healthy");
    } else if (calculatedBMI < 30) {
      setStatus("overweight");
    } else {
      setStatus("obese");
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "healthy":
        return "bg-green-600";
      case "underweight":
        return "bg-yellow-500";
      case "overweight":
        return "bg-orange-500";
      case "obese":
        return "bg-red-700";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="container mx-auto mb-28 px-8 md:px-24 text-center flex flex-col items-center">
      <h2 className="text-2xl sm:text-4xl font-semibold mb-6">What Is BMI</h2>
      <p className="text-base mb-6 max-w-xl">
        Body mass index (BMI) estimates body fat percentage based on height and
        weight. It's a useful tool for assessing weight and health risk.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 items-start w-full">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              min="1"
              placeholder="Height / cm"
              className="p-2 border rounded-md w-full outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <input
              type="number"
              min="1"
              placeholder="Weight / kg"
              className="p-2 border rounded-md w-full outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              min="1"
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
        </div>
      </div>

      {error && (
        <div className="mt-6 p-3 text-red-500">
          <p>{error}</p>
        </div>
      )}

      {bmi && !error && (
        <div
          className={`mt-6 flex w-full p-3 rounded-md ${getStatusColor(
            status
          )}`}
        >
          <User className="mr-2" />
          <p className="font-semibold">
            YOU ARE <span className="uppercase">{status.toUpperCase()}</span>{" "}
            Your BMI is {bmi}.
          </p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
