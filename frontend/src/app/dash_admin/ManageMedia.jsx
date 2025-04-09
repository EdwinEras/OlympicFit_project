"use client";
import { ArrowDown, ArrowUp, Pencil, Trash } from "lucide-react";
import ConfirmDelete from "../../components/ui/ConfirmDelete";
import { useState } from "react";
import CardEditTrainer from "./CardEditTrainer";
import CardCreateMedia from "./CardCreateMedia";
import CardEditMedia from "./CardEditMedia";

const ManageMedia = ({arrMedias}) => {
  const [mediaUp, setMediaUp] = useState(false);
  const [show, setShow] = useState();
  const [ans, setAns] = useState();

  return (
    <div className="relative my-12 mx-auto w-[85%] bg-[#9fadb3] p-6 rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-md sm:text-xl font-semibold uppercase">
          Manage Media Files
        </h2>
        <button
          className="bg-midnights/90 text-white px-2 py-1 rounded hover:bg-midnights"
          onClick={() => setMediaUp(!mediaUp)}
        >
          {mediaUp ? <ArrowUp /> : <ArrowDown />}
        </button>
      </div>
      {mediaUp && (
        <div className="flex flex-col gap-6">
          <button
            onClick={() => {
              setShow("create_md");
            }}
            className="bg-midnights/90 px-4 py-2 mt-8 rounded text-white hover:bg-midnights"
          >
            Add Media File
          </button>
          {show === "create_md" && <CardCreateMedia setShow={setShow} />}
          {arrMedias.map((md, index) => (
            <div
              key={md._id}
              className="flex justify-between items-center bg-white p-2 rounded-lg shadow-md"
            >
              <p className="text-sm">
              {index+1} - {md.media_code} - {md.description}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setShow(`edit_md${md._id}`);
                  }}
                  className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500"
                >
                  <Pencil />
                </button>
                {show === `edit_md${md._id}` && (
                  <CardEditMedia setShow={setShow} editMedia={md} />
                )}
                <button
                  onClick={() => {
                    setShow(`del_md${md._id}`);
                  }}
                  className="bg-red/90 px-2 py-1 rounded hover:bg-red text-white"
                >
                  <Trash />
                </button>
                {show === `del_md${md._id}` && (
                  <ConfirmDelete
                    setShow={setShow}
                    dbObject={md}
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

export default ManageMedia;
