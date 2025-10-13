"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ProfilePage = () => {
  const [email, setEmail] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) setEmail(savedEmail);

    const savedName = localStorage.getItem("fullName");
    if (savedName) setFullName(savedName);
  }, []);
  return (
    <div className="h-full p-6">
      <div className="p-3">
        <h1 className="text-2xl text-black ">Account Settings</h1>
      </div>

      <hr className="border-1 underline mb-8" />

      <div className="flex gap-10 mb-6">
        <div className="relative w-15 h-15">
          <Image
            src="/user.png"
            alt="User"
            height={100}
            width={100}
            className="w-full h-full rounded-full object-cover border-2 border-gray-300"
          />

          <div className="absolute bottom-0 right-0 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center border-2 border-white cursor-pointer hover:bg-purple-700 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-2.5 h-2.5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7h2l2-3h10l2 3h2v13H3V7z"
              />
              <circle cx="12" cy="13" r="4" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="text-black font-medium">{fullName}</div>
          <div className="text-gray-600 text-sm">{email}</div>
        </div>
      </div>

      <p className="text-md text-gray-800">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
        nesciunt tempore amet, dolores dicta perferendis deleniti.
      </p>

      <hr className="border-1 underline mt-4" />
    </div>
  );
};

export default ProfilePage;
