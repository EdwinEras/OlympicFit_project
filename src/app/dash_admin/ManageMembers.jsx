"use client";
import { ArrowDown, ArrowUp, Pencil, X } from "lucide-react";
import CardEditClass from "./CardEditClass";
import ConfirmDelete from "../../components/ui/ConfirmDelete";
import CardCreateClass from "./CardCreateClass";
import { useState } from "react";
import CardCreateMember from "./CardCreateMember";
import CardEditMember from "./CardEditMember";

const ManageMembers = ({ arrMembers }) => {
  const [memberUp, setMemberUp] = useState(false);
  const [show, setShow] = useState();
  const [ans, setAns] = useState();

  return (
    <div className="relative my-12 mx-auto w-[85%] bg-[#9fadb3] p-6 rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-md sm:text-xl font-semibold uppercase">
          Manage Members
        </h2>
        <button
          className="bg-midnights/90 text-white px-2 py-1 rounded hover:bg-midnights"
          onClick={() => setMemberUp(!memberUp)}
        >
          {memberUp ? <ArrowUp /> : <ArrowDown />}
        </button>
      </div>
      {memberUp && (
        <div className="flex flex-col gap-6">
          <button
            onClick={() => {
              setShow("create_m");
            }}
            className="bg-midnights/90 px-4 py-2 mt-8 rounded text-white hover:bg-midnights"
          >
            Add Member
          </button>
          {show === "create_m" && <CardCreateMember setShow={setShow} />}
          {arrMembers.map((m) => (
            <div
              key={m.id}
              className="flex justify-between items-center bg-white p-2 rounded-lg shadow-md"
            >
              <p className="text-sm">
                {m.id} - {m.first_name} {m.last_name} - {m.dob} - {m.membership}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setShow(`edit_m${m.id}`);
                  }}
                  className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500"
                >
                  <Pencil />
                </button>
                {show === `edit_m${m.id}` && (
                  <CardEditMember setShow={setShow} editMember={m} />
                )}
                <button
                  onClick={() => {
                    setShow(`del_m${m.id}`);
                  }}
                  className="bg-red/90 text-white px-2 py-1 rounded hover:bg-red"
                >
                  <X />
                </button>
                {show === `del_m${m.id}` && (
                  <ConfirmDelete
                    setShow={setShow}
                    text={`${m.first_name} ${m.last_name}`}
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

export default ManageMembers;
