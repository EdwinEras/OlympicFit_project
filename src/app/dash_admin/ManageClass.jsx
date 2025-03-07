"use client";
import { ArrowDown, ArrowUp, Pencil, X } from "lucide-react";
import CardEditClass from "./CardEditClass";
import ConfirmDelete from "../../components/ui/ConfirmDelete";
import CardCreateClass from "./CardCreateClass";
import { useState } from "react";

const ManageClass = ({ arrClasses }) => {
  const [classUp, setClassUp] = useState(false);
  const [show, setShow] = useState();
  const [ans, setAns] = useState();

  return (
    <div className="relative my-12 mx-auto w-[85%] bg-gray-300 p-6 rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-md sm:text-xl font-semibold uppercase">
          Manage Classes
        </h2>
        <button
          className="bg-gray-400 px-2 py-1 rounded hover:bg-gray-500"
          onClick={() => setClassUp(!classUp)}
        >
          {classUp ? <ArrowUp /> : <ArrowDown />}
        </button>
      </div>
      {classUp && (
        <div className="flex flex-col gap-2">
          <button
            onClick={() => {
              setShow("create_class");
            }}
            className="bg-green-600 px-4 py-2 mt-2 rounded text-white hover:bg-green-700"
          >
            Add Class
          </button>
          {show === "create_class" && <CardCreateClass setShow={setShow} />}
          {arrClasses.map((c) => (
            <div
              key={c.id}
              className="flex justify-between items-center bg-white p-2 rounded-lg shadow-md"
            >
              <p className="text-sm">
                {c.id} - {c.name} - {c.start_time} - {c.end_time} - {c.active}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setShow(`edit_c${c.id}`);
                  }}
                  className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500"
                >
                  <Pencil />
                </button>
                {show === `edit_c${c.id}` && (
                  <CardEditClass setShow={setShow} editClass={c} />
                )}
                <button
                  onClick={() => {
                    setShow(`del_c${c.id}`);
                  }}
                  className="bg-red/90 text-white px-2 py-1 rounded hover:bg-red"
                >
                  <X />
                </button>
                {show === `del_c${c.id}` && (
                  <ConfirmDelete
                    setShow={setShow}
                    text={c.name}
                    setAns={setAns}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageClass;
