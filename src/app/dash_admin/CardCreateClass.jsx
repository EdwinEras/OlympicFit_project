import { ArrowUp, ArrowDown, X } from "lucide-react";
import { useState } from "react";

const CardCreateClass = ({ setShow }) => {
  const [dropdown, setDropdown] = useState(false);
  const [difficulty, setDifficulty] = useState("Difficulty");

  return (
    <div className="fixed z-50 inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm">
      <div className="p-2 bg-white w-10/12 md:w-2/3 lg:2/3 shadow-inner border-e-emerald-600 rounded-lg p-8">
        <div className="flex justify-between items-center">
          <h2 className="text-lg sm:text-2xl font-semibold">New class</h2>
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
          <input
            className="bg-gray-300 rounded p-2 my-2 text-midnights outline-none"
            type="text"
            name="name_class"
            id="name_class"
            placeholder="name"
            required
          />
          <div>
            <input
              className="bg-gray-300 rounded p-2 my-2 text-midnights outline-none"
              type="text"
              name="category_class"
              id="category_class"
              placeholder="category"
              required
            />
            <label className="ml-0 sm:ml-8">Capacity: </label>
            <input
              className="bg-gray-300 rounded p-2 my-2 text-midnights outline-none"
              type="number"
              min={0}
              max={15}
              name="capacity_class"
              id="capacity_class"
              placeholder="#"
              required
            />
          </div>
          <div className="flex text-gray-400 items-center">
            <label htmlFor="difficulty" className="mr-2">
              Select Difficulty:
            </label>
            <select
              id="difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="rounded bg-gray-300 p-2 outline-none text-midnights"
            >
              <option value="regular">Regular</option>
              <option value="intermedia">Intermedia</option>
              <option value="advance">Advance</option>
            </select>
          </div>

          <textarea
            className="bg-gray-300 rounded p-2 my-2 text-midnights outline-none"
            type="text"
            name="description_class"
            id="description_class"
            placeholder="description"
            required
          />
          <div>
            <label>Set active: </label>
            <input
              className="bg-[#9fadb3] rounded p-1 m-2"
              type="radio"
              name="active"
              id="active_yes"
              value="yes"
            />
            <label>Yes</label>
            <input
              className="bg-[#9fadb3] rounded p-1 m-2"
              type="radio"
              name="active"
              id="active_no"
              value="no"
            />
            <label>No</label>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <label>Start date: </label>
            <input
              className="bg-gray-300 text-midnights rounded p-2 my-2 mr-8 outline-none"
              type="datetime-local"
              min="2025-01-01T00:00"
              max="2029-12-31T00:00"
              name="start_time"
              id="start_time"
              placeholder="start time"
              required
            />
            <label>End date: </label>
            <input
              className="bg-gray-300 text-midnights rounded p-2 my-2 mr-8 outline-none"
              type="datetime-local"
              min="2025-01-01T00:00"
              max="2029-12-31T00:00"
              name="end_time_class"
              id="end_time"
              placeholder="end_time"
              required
            />
          </div>
          <input
            className="bg-gray-300 rounded p-2 my-2 text-midnights outline-none"
            type="text"
            name="location_class"
            id="location_class"
            placeholder="location"
            required
          />
          <input
            className="bg-gray-300 rounded p-2 my-2 text-midnights outline-none"
            type="url"
            name="media_class"
            id="media_class"
            placeholder="URL Image"
            required
          />
          <button
            onClick={() => {}}
            className="bg-ocean-blue/70 px-4 py-2 mt-2 rounded text-white bg-ocean-blue/70"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default CardCreateClass;
