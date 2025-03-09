import { ArrowUp, ArrowDown, X } from "lucide-react";
import { useState } from "react";

const CardCreateTrainner = ({ setShow }) => {
  const [dropdown, setDropdown] = useState(false);
  const [gender, setGender] = useState("Gender");

  return (
    <div className="fixed z-50 inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm">
      <div className="p-2 bg-white w-10/12 md:w-2/3 lg:2/3 shadow-inner border-e-emerald-600 rounded-lg p-8">
        <div className="flex justify-between items-center">
          <h2 className="text-lg sm:text-2xl font-semibold">New Trainer</h2>
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
            name="first_name"
            placeholder="First name"
            required
          />
          <input
            className="bg-gray-300 rounded p-2 my-2 text-midnights outline-none"
            type="text"
            name="first_name"
            placeholder="Last name"
            required
          />
          <input
            className="bg-gray-300 rounded p-2 my-2 text-midnights outline-none"
            type="email"
            name="email"
            placeholder="email@hotmail.com"
            required
          />
          <input
            className="bg-gray-300 rounded p-2 my-2 text-midnights outline-none"
            type="tel"
            name="phone"
            placeholder="123 456 7890"
            required
          />
          <div>
            <label>Salary: </label>
            <input
              className="bg-gray-300 rounded p-2 my-2 mr-4 text-midnights outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              type="number"
              name="salary"
              placeholder="1000.00"
              required
            />
            <label>Hourly rate: </label>
            <input
              className="bg-gray-300 rounded p-2 my-2 text-midnights outline-none"
              type="number"
              name="hourly_rate"
              placeholder="8.5"
              required
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              className="bg-gray-300 rounded p-2 my-2 mr-4 text-midnights outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              type="password"
              name="passowrd_1"
              placeholder="**********"
              required
            />
            <label>Confirm password: </label>
            <input
              className="bg-gray-300 rounded p-2 my-2 text-midnights outline-none"
              type="password"
              name="passowrd_2"
              placeholder="**********"
              required
            />
          </div>
          <div className="flex items-center text-midnights">
            <label htmlFor="gender" className="mr-2">
              Select Gender:
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="rounded bg-gray-300 p-2 text-midnights"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label>Set active: </label>
            <input
              className="bg-[#9fadb3] rounded p-1 m-2"
              type="radio"
              name="employment_status"
              value="yes"
            />
            <label>Yes</label>
            <input
              className="bg-[#9fadb3] rounded p-1 m-2"
              type="radio"
              name="employment_status"
              value="no"
            />
            <label>No</label>
          </div>
          <div>
            <label>Date of Birth: </label>
            <input
              className="bg-gray-300 text-midnights rounded p-2 my-2 mr-8 outline-none"
              type="datetime-local"
              min="1920-01-01T00:00"
              max="2015-01-01T00:00"
              name="dob"
              required
            />
          </div>
          <input
            className="bg-gray-300 rounded p-2 my-2 text-midnights outline-none"
            type="text"
            name="address"
            placeholder="123 address Ave"
            required
          />
          <input
            className="bg-gray-300 rounded p-2 my-2 text-midnights outline-none"
            type="url"
            name="media"
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

export default CardCreateTrainner;
