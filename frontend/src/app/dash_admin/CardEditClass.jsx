import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { updateClassById } from "../../routes/classes";

const CardEditClass = ({ setShow, editClass }) => {
  const [minDate, setMinDate] = useState(""); 
  const [formData, setFormData] = useState({
    class_name: editClass.class_name,
    category: editClass.category,
    capacity: editClass.capacity,
    difficulty_level: editClass.description,
    description: editClass.description,
    end_time: editClass.end_time,
    start_time: editClass.start_time,
    is_active: editClass.is_active
  });

  useEffect(() => {
    const currentDate = new Date().toISOString().slice(0, 16);
    setMinDate(currentDate);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  async function handleSubmit(){
    console.log("formData: "+formData);
    const classes = await updateClassById(editClass._id, formData);
    console.log(classes);
    setShow("");
  }

  return (
    <div className="fixed z-50 inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm">
      <div className="p-2 max-h-[600px] sm:max-h-full overflow-y-auto bg-white w-10/12 md:w-2/3 lg:2/3 shadow-inner border-e-emerald-600 rounded-lg p-8">
        <div className="flex justify-between items-center">
          <h2 className="text-lg sm:text-2xl font-semibold">Edit class</h2>
          <button
            onClick={() => {
              setShow("");
            }}
            className="bg-red/90 text-white px-2 py-1 rounded hover:bg-red"
          >
            <X />
          </button>
        </div>
        <form className="flex flex-col" action="#">
        <div className="flex items-center">
          <label className="mr-4">Name:</label>
          <input
            className="bg-gray-300 w-full rounded p-2 my-2 text-midnights outline-none"
            type="name"
            name="class_name"
            placeholder="name"
            value={formData.class_name} onChange={handleChange}
            required
          />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <label className="mr-4">Category:</label>
            <input
              className="bg-gray-300 rounded p-2 my-2 text-midnights outline-none"
              type="text"
              name="category"
              placeholder="category"
              value={formData.category} onChange={handleChange}
              required
            />
            <label className="ml-0 mr-4 sm:ml-8">Capacity: </label>
            <input
              className="bg-gray-300 rounded p-2 my-2 text-midnights outline-none"
              type="number"
              min={0}
              max={15}
              name="capacity"
              placeholder="#"
              value={formData.capacity} onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="difficulty" className="mr-2">
              Select Difficulty:
            </label>
            <select
              name="difficulty_level"
              value={formData.difficulty_level} onChange={handleChange}
              className="rounded bg-gray-300 p-2 text-midnights outline-none"
            >
              <option value="regular">Regular</option>
              <option value="intermedia">Intermedia</option>
              <option value="advance">Advance</option>
            </select>
          </div>
          <div className="flex items-center">
            <label className="mr-4">Description:</label>
            <textarea
              className="bg-gray-300 w-full rounded p-2 my-2 text-midnights outline-none"
              type="text"
              name="description"
              placeholder="description"
              value={formData.description} onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Set active: </label>
            <input
              className="bg-[#9fadb3] rounded p-1 m-2"
              type="radio"
              name="is_active"
              defaultValue="yes"
            />
            <label>Yes</label>
            <input
              className="bg-[#9fadb3] rounded p-1 m-2"
              type="radio"
              name="is_active"
              id="active_no"
              defaultValue="no"
            />
            <label>No</label>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <label className="mr-4">Start date: </label>
            <input
              className="bg-gray-300 text-midnights rounded p-2 my-2 mr-8 outline-none"
              type="datetime-local"
              min={minDate}
              max="2029-12-31T00:00"
              name="start_time"
              placeholder="start time"
              value={formData.start_time} onChange={handleChange}
              required
            />
            <label className="mr-4">End date: </label>
            <input
              className="bg-gray-300 text-midnights rounded p-2 my-2 mr-8 outline-none"
              type="datetime-local"
              min={minDate}
              max="2029-12-31T00:00"
              name="end_time_class"
              placeholder="end_time"
              value={formData.end_time} onChange={handleChange}
              required
            />
          </div>
          {/* <div className="flex items-center">
            <label className="mr-4">Location:</label>
            <input
              className="bg-gray-300 w-full rounded p-2 my-2 text-midnights outline-none"
              type="location"
              name="location_class"
              id="location_class"
              placeholder="location"
              defaultValue={editClass.location}
              required
            />
          </div> */}
          {/* <div className="flex items-center">
            <label className="mr-4">Image URL:</label>
            <input
              className="bg-gray-300 w-[85%] rounded p-2 my-2 text-midnights outline-none"
              type="text"
              name="media_class"
              id="media_class"
              placeholder="URL Image"
              defaultValue={editClass.media}
              required
            />
          </div> */}
          <button
            type="submit"
            formAction={handleSubmit}
            className="bg-ocean-blue/70 px-4 py-2 mt-2 rounded text-white bg-ocean-blue/70"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default CardEditClass;
