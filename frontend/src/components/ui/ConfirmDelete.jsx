import React from "react";
import { deleteUserById } from "../../routes/users";

export default function ConfirmDelete({ setShow, user, setAns }) {
  const callApi = async() => {
    const res = await deleteUserById(user._id)
    console.log(res.data);
    setShow("");
    setAns(true);
  }
  return (
    <div className="fixed z-50 inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm">
      <div className="p-2 bg-white w-10/12 md:w-2/3 lg:2/3 shadow-inner border-e-emerald-600 rounded-lg p-8">
          <h2 className="text-lg sm:text-2xl font-semibold mb-4">Confirm Delete</h2>
        <p>
          Are you sure you want to delete <strong>"{user.first_name} {user.last_name}"</strong>?
        </p>
        <div className="flex justify-between items-center mt-2">
          <button
            onClick={() => {
              callApi();
            }}
            className="w-full bg-red/90 p-2 mr-3 rounded hover:bg-red uppercase font-semibold text-white"
          >
            Yes
          </button>
          <button
            onClick={() => {
              setShow("");
              setAns(false);
            }}
            className="w-full bg-midnights/90 p-2 rounded hover:bg-midnights text-white font-semibold uppercase"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
