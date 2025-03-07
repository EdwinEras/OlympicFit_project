import { ArrowUp, ArrowDown, X } from "lucide-react";
import { useState } from "react";

const CardEditMember = ({ setShow, editMember }) => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [gender, setGender] = useState(editMember.gender);
  const [mem, setMem] = useState(editMember.membership);

  return (
    <div className="fixed z-50 inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm">
      <div className="p-2 bg-white w-10/12 md:w-2/3 lg:2/3 shadow-inner border-e-emerald-600 rounded-lg p-8">
        <div className="flex justify-between items-center">
          <h2 className="text-lg sm:text-2xl font-semibold">New member</h2>
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
            className="bg-gray-300 rounded p-1 my-2 hover:bg-gray-400"
            type="text"
            name="first_name"
            placeholder="First name"
            defaultValue={editMember.first_name}
            required
          />
          <input
            className="bg-gray-300 rounded p-1 my-2 hover:bg-gray-400"
            type="text"
            name="first_name"
            placeholder="Last name"
            defaultValue={editMember.last_name}
            required
          />
          <input
            className="bg-gray-300 rounded p-1 my-2 hover:bg-gray-400"
            type="email"
            name="email"
            placeholder="email@hotmail.com"
            defaultValue={editMember.email}
            required
          />
          <input
            className="bg-gray-300 rounded p-1 my-2 hover:bg-gray-400"
            type="tel"
            name="phone"
            placeholder="123 456 7890"
            defaultValue={editMember.phone}
            required
          />
          <div className="flex">
            <label>Select Gender: </label>
            <div className="text-gray-400">
              <button
                onClick={() => {
                  setDropdown(!dropdown);
                }}
                className="flex rounded bg-gray-300 rounded p-1 mx-2 hover:bg-gray-400 hover:text-white"
              >
                {gender} {dropdown ? <ArrowUp /> : <ArrowDown />}
              </button>
              {dropdown && (
                <div className="flex flex-col">
                  <button
                    onClick={() => {
                      setGender("Male");
                    }}
                    className="border border-gray-400 rounded bg-gray-300 rounded mx-2 hover:bg-gray-400 hover:text-white"
                  >
                    Male
                  </button>
                  <button
                    onClick={() => {
                      setGender("Female");
                    }}
                    className="border border-gray-400 rounded bg-gray-300 rounded mx-2 hover:bg-gray-400 hover:text-white"
                  >
                    Female
                  </button>
                  <button
                    onClick={() => {
                      setGender("Other");
                    }}
                    className="border border-gray-400 rounded bg-gray-300 rounded mx-2 hover:bg-gray-400 hover:text-white"
                  >
                    Other
                  </button>
                </div>
              )}
            </div>
            <label>Select Membership: </label>
            <div className="text-gray-400">
              <button
                onClick={() => {
                  setDropdown2(!dropdown2);
                }}
                className="flex rounded bg-gray-300 rounded p-1 mx-2 hover:bg-gray-400 hover:text-white"
              >
                {mem} {dropdown2 ? <ArrowUp /> : <ArrowDown />}
              </button>
              {dropdown2 && (
                <div className="flex flex-col">
                  <button
                    onClick={() => {
                      setMem("Basic");
                    }}
                    className="border border-gray-400 rounded bg-gray-300 rounded mx-2 hover:bg-gray-400 hover:text-white"
                  >
                    Basic
                  </button>
                  <button
                    onClick={() => {
                      setMem("Gold");
                    }}
                    className="border border-gray-400 rounded bg-gray-300 rounded mx-2 hover:bg-gray-400 hover:text-white"
                  >
                    Gold
                  </button>
                  <button
                    onClick={() => {
                      setMem("Premium");
                    }}
                    className="border border-gray-400 rounded bg-gray-300 rounded mx-2 hover:bg-gray-400 hover:text-white"
                  >
                    Premium
                  </button>
                </div>
              )}
            </div>
          </div>
          <div>
            <label>Set active: </label>
            <input
              className="bg-gray-300 rounded p-1 m-2"
              type="radio"
              name="employment_status"
              value="yes"
            />
            <label>Yes</label>
            <input
              className="bg-gray-300 rounded p-1 m-2"
              type="radio"
              name="employment_status"
              value="no"
            />
            <label>No</label>
          </div>
          <div>
            <label>Date of Birth: </label>
            <input
              className="bg-gray-300 text-gray-400 rounded p-1 my-2 hover:bg-gray-400"
              type="date"
              min="1920-01-01"
              max="2015-01-01"
              name="dob"
              defaultValue={editMember.dob}
              required
            />
          </div>
          <input
            className="bg-gray-300 rounded p-1 my-2 hover:bg-gray-400"
            type="text"
            name="address"
            placeholder="123 address Ave"
            defaultValue={editMember.address}
            required
          />
          <input
            className="bg-gray-300 rounded p-1 my-2 hover:bg-gray-400"
            type="url"
            name="media"
            placeholder="URL Image"
            defaultValue={editMember.media}
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

export default CardEditMember;
