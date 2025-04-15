import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { createReview } from "../../routes/reviews";

const ReviewClass = ({ setShow, revClass }) => {
  const [formData, setFormData] = useState({
    user_id: "",
    schedule_id: [revClass._id],
    rating: 5, // Kept for compatibility, but not shown in UI
    feedback: "",
  });

  const [error, setError] = useState("");

  const getFromLocalStorage = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };

  useEffect(() => {
    const user = getFromLocalStorage("user");
    if (user?._id) {
      setFormData((prev) => ({
        ...prev,
        user_id: user._id,
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.feedback) {
      setError("All fields are required.");
      return;
    }

    try {
      const res = await createReview(formData);
      alert("Review submitted successfully!");
      setShow("");
    } catch (err) {
      console.error(err);
      setError("Failed to submit review.");
    }
  };

  return (
    <div className="fixed z-50 inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm">
      <div className="p-2 bg-white w-10/12 md:w-2/3 lg:2/3 shadow-inner border-e-emerald-600 rounded-lg p-8">
        <div className="flex justify-between items-center">
          <h2 className="text-lg sm:text-2xl font-semibold">
            {revClass.class_name}
          </h2>
          <button
            onClick={() => setShow("")}
            className="bg-red/90 px-2 py-1 rounded hover:bg-red text-white"
          >
            <X />
          </button>
        </div>

        <form className="flex flex-col mt-4" onSubmit={handleSubmit}>
          <label className="text-sm font-medium mb-1">Feedback:</label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            className="bg-gray-300 rounded p-2 mb-2 text-midnights outline-none"
            placeholder="Write your feedback..."
            required
          />

          <button
            type="submit"
            className="bg-ocean-blue/70 px-4 py-2 mt-2 rounded text-white"
          >
            Submit Review
          </button>

          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default ReviewClass;
