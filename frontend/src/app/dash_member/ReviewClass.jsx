import { X } from "lucide-react";
import { useEffect, useState } from "react";
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
      setError("Please fill in all fields");
      return;
    }

    try {
      const res = await createReview(formData);
      alert("Review submitted successfully!");
      setShow("");
    } catch (err) {
      console.log(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-20 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center px-4">
      <div className="w-full max-w-md bg-white rounded-md shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Review this Class</h3>
          <button onClick={() => setShow("")}>
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-medium">Rating</label>
            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              {[1, 2, 3, 4, 5].map((val) => (
                <option key={val} value={val}>
                  {val}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Feedback</label>
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              rows={4}
              placeholder="Write your feedback here..."
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewClass;
