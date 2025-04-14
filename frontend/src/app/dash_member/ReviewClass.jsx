import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { createReview } from "../../routes/reviews";

const ReviewClass = ({ setShow, revClass }) => {
  const [formData, setFormData] = useState({
    user_id: "",
    schedule_id: [revClass._id],
    rating: 5,
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
      [name]: name === "rating" ? Number(value) : value,
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
      console.log("Review submitted:", res);
      alert("✅ Review submitted successfully!");
      setShow("");
    } catch (err) {
      console.error(err);
      setError("❌ Failed to submit review.");
    }
  };

  return (
    <div className="fixed z-50 inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm">
      <div className="p-4 w-10/12 sm:w-2/3 md:w-1/2 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Leave a Review</h2>
          <button
            onClick={() => setShow("")}
            className="text-red-600 hover:text-red-800"
          >
            <X />
          </button>
        </div>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label>
            Rating:
            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="ml-2 p-2 bg-gray-200 rounded"
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </label>

          <label>
            Feedback:
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              placeholder="Your thoughts..."
              className="w-full p-2 bg-gray-200 rounded"
              required
            />
          </label>

          <button
            type="submit"
            className="self-end bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewClass;
