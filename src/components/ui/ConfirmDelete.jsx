import React from "react";

export default function ConfirmDelete({ setShow, text, setAns }){
    return(
        <div className='fixed z-50 inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm'>
            <div 
                className='p-2 bg-white w-10/12 md:w-2/3 lg:2/3 shadow-inner border-e-emerald-600 rounded-lg p-8'>
                <div className="flex justify-between items-center">
                    <h2 className="text-lg sm:text-2xl font-semibold">Confirm Delete</h2>
                </div>
                <p>Are you sure you want to delete <strong>"{text}"</strong>?</p>
                <div className="flex justify-between items-center">
                    <button
                    onClick={()=>{
                        setShow("");
                        setAns(true)
                    }}
                    className="w-full bg-pink-500 px-2 py-1 m-3 rounded hover:bg-pink-600">
                        Yes
                    </button>
                    <button
                    onClick={()=>{
                        setShow("");
                        setAns(false)
                    }}
                    className="w-full bg-green-500 px-2 py-1 m-3 rounded hover:bg-green-600">
                        No
                    </button>
                </div>
            </div>
        </div>
    )
}