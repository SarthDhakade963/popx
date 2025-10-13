"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-end h-full gap-3 p-6">
      <div className=" bg-neutral-50 w-full py-2 ">
        <h1 className="text-black text-2xl font-bold">Welcome to PopX</h1>
        <h2 className="p-1 font-medium leading-snug text-gray-400">
          Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit.
        </h2>
      </div>

      <div className="flex flex-col">
        <button
          className="mb-2 w-[98%] h-[50px] rounded-[10px] bg-purple-700 text-md font-bold "
          onClick={() => router.push("/signup")}
        >
          Create Account
        </button>
        <button
          className="w-[98%] h-[50px] text-black rounded-[10px] bg-purple-400 text-md font-bold cursor-pointer"
          onClick={() => router.push("/login")}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Home;
