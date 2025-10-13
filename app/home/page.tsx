import React from "react";

const Home = () => {
  return (
    <div className="flex p-9 justify-center">
      <div className="max-w-sm w-full  mx-auto h-[90vh] max-h-[800px] bg-neutral-50 shadow-2xl rounded-xl flex flex-col justify-end gap-3 p-6">
        <div className=" bg-neutral-50 w-full py-2 ">
          <h1 className="text-black text-2xl font-bold">Welcome to PopX</h1>
          <h2 className="p-1 font-medium leading-snug text-gray-400">
            Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit.
          </h2>
        </div>

        <div className="flex flex-col">
          <button className="mb-2 w-[98%] h-[50px] rounded-[10px] bg-purple-700 text-md font-bold">
            Create Account
          </button>
          <button className="w-[98%] h-[50px] text-black rounded-[10px] bg-purple-400 text-md font-bold">
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
