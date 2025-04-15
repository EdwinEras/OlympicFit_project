import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { updateClassById } from "../../routes/classes";

const CardEditClass = ({ setShow, editClass }) => {
  const minDate = new Date().toISOString().slice(0, 16); 
  const [className, setClassName] = useState(editClass.class_name);
  const [code, setCode] = useState(editClass.class_code);
  const [category, setCategory] = useState(editClass.category);
  const [capacity, setCapacity] = useState(editClass.capacity);
  const [difficultyLevel, setDifficultyLevel] = useState(editClass.difficulty_level);
  const [description, setDescription] = useState(editClass.description);
  const [isActive, setIsActive] = useState(editClass.is_active); 
  const [startTime, setStartTime] = useState(editClass.schedule.start_time);
  const [endTime, setEndTime] = useState(editClass.schedule.end_time);
  const [classDay, setClassDay] = useState(editClass.schedule.day);
  const [mediaClass, setMediaClass] = useState(editClass);
  const [location, setLocation] = useState(editClass);
  const [user, setUser] = useState();

  useEffect(()=>{
    const user = getFromLocalStorage("user");
    setUser(user)
  },[])

  const getFromLocalStorage = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };

  const handleSubmit = async () => {
    const formData = {
      class_name: className,
      class_code: code,
      category: category,
      capacity: capacity,
      difficulty_level: difficultyLevel,
      description: description,
      is_active: isActive,
      schedule:[
        {
          day: classDay,
          start_time: startTime,
          end_time: endTime,
          location: location,
          status:"scheduled"
        }
      ],
      media_code: [
        mediaClass
      ],
      trainer_id: user._id
    };
    console.log("Submitted data:", formData);
    const classes = await updateClassById(editClass._id, formData);
    console.log(classes);
    setShow("");
  };

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
        <form className="flex flex-col">
        <div className="flex flex-col sm:flex-row items-start sm:items-center">
          <label className="mr-4">Class Name:</label>
          <input
            className="bg-gray-300 w-[85%] rounded p-2 my-2 text-midnights outline-none"
            type="text"
            name="class_name"
            placeholder="name"
            value={className} onChange={(e) => setClassName(e.target.value)}            
            required
          />
          </div>
          <div className="flex items-center">
          <label className="mr-4">Class code:</label>
          <input
            className="bg-gray-300 w-[85%] rounded p-2 my-2 text-midnights outline-none"
            type="text"
            name="class_code"
            placeholder="code"
            value={code} onChange={(e) => setCode(e.target.value)}            
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
              value={category} onChange={(e) => setCategory(e.target.value)}
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
              value={capacity} onChange={(e) => setCapacity(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="difficulty" className="mr-2">
              Select Difficulty:
            </label>
            <select
              name="difficulty_level"
              value={difficultyLevel} onChange={(e) => setDifficultyLevel(e.target.value)}
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
              value={description} onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Set active: </label>
            <input
              className="bg-[#9fadb3] rounded p-1 m-2"
              type="radio"
              name="is_active"
              defaultValue="true"
              checked={isActive === true} onChange={(e) => setIsActive(true)}
            />
            <label>Yes</label>
            <input
              className="bg-[#9fadb3] rounded p-1 m-2"
              type="radio"
              name="is_active"
              id="active_no"
              defaultValue="false"
              checked={isActive === false} onChange={(e) => setIsActive(false)}
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
              value={startTime} onChange={(e) => setStartTime(e.target.value)}
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
              value={endTime} onChange={(e) => setEndTime(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <label className="mr-4">Class day:</label>
            <input
              className="bg-gray-300 w-[85%] rounded p-2 my-2 text-midnights outline-none"
              type="text"
              name="class_day"
              placeholder="Monday"
              value={classDay} onChange={(e) => setClassDay(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <label className="mr-2">URL image:</label>
            <input
              className="bg-gray-300 w-[85%] rounded p-2 my-2 text-midnights outline-none"
              type="text"
              name="media"
              placeholder="URL image"
              value={mediaClass} onChange={(e) => setMediaClass(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center">
          <label className="mr-4">Class location:</label>
          <input
            className="bg-gray-300 w-[85%] rounded p-2 my-2 text-midnights outline-none"
            type="text"
            name="location"
            placeholder="location"
            value={location} onChange={(e) => setLocation(e.target.value)}            
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

export default CardEditClass;
