import { X } from "lucide-react";
import { useState } from "react";
import { createMedia } from "../../routes/media";

const CardCreateMedia = ({ setShow }) => {
  const [code, setCode] = useState();
  const [path, setPath] = useState();
  const [desc, setDesc] = useState();
  const [date, setDate] = useState();

  async function handleSubmit(){
    getFormattedDate();
    const formData = {
        media_code:code,
        media_path:path,
        description:desc,
        uploaded_at:date
    };
    const medias = await createMedia(formData);
    setShow("");
  }

  function getFormattedDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    setDate(`${year}-${month}-${day}`);
  }

  return (
    <div className="fixed z-50 inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm">
      <div className="p-2 max-h-[600px] sm:max-h-full overflow-y-auto bg-white w-10/12 md:w-2/3 lg:2/3 shadow-inner border-e-emerald-600 rounded-lg p-8">
        <div className="flex justify-between items-center">
          <h2 className="text-lg sm:text-2xl font-semibold">New Media File</h2>
          <button
            onClick={() => {
              setShow("");
            }}
            className="bg-red/90 text-white px-2 py-1 rounded hover:bg-red"
          >
            <X />
          </button>
        </div>
        <form className="flex flex-col">
        <div className="flex flex-col sm:flex-row items-start sm:items-center">
          <label className="mr-4">Media code: </label>
          <input
            className="bg-gray-300 w-full rounded p-2 my-2 text-midnights outline-none"
            type="text"
            name="media_code"
            placeholder="code"
            value={code} onChange={(e)=>{setCode(e.target.value)}}
            required
          />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
          <label className="mr-4">Media path: </label>
            <input
              className="bg-gray-300 rounded p-2 my-2 text-midnights outline-none"
              type="text"
              name="media_path"
              placeholder="URL of the image"
              value={path} onChange={(e)=>{setPath(e.target.value)}}
              required
            />
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <label className="mr-4">Description:</label>
            <textarea
              className="bg-gray-300 w-full rounded p-2 my-2 text-midnights outline-none"
              type="text"
              name="description"
              placeholder="description"
              value={desc} onChange={(e)=>{setDesc(e.target.value)}}
              required
            />
          </div>
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

export default CardCreateMedia;
