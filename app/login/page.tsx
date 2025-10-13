"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleLogin = () => {
    // Save data to localStorage (you could also use sessionStorage)
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    // Navigate to profile page
    router.push("/profile");
  };
  return (
    <div className="flex flex-col h-full gap-3 p-6">
      <h1 className="text-black text-2xl font-bold">
        Signin to your <br />
        PopX Account
      </h1>

      <h2 className="p-1 text-lg leading-snug text-gray-400">
        Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit.
      </h2>

      <div className="relative mt-4">
        <label
          htmlFor="email"
          className="absolute -top-2 left-3 bg-neutral-50 px-1 text-[13px] font-medium text-purple-600"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter email address"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-[40px] border border-gray-300 px-2 pt-1 placeholder:text-sm placeholder:text-gray-400 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="relative mt-4">
        <label
          htmlFor="password"
          className="absolute -top-2 left-3 bg-neutral-50 px-1 text-[13px] font-medium text-purple-600"
        >
          Password
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-[40px] border placeholder:text-sm placeholder:text-gray-400 border-gray-300 rounded-md px-2 pt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <button
        onClick={handleLogin}
        className="w-full h-[50px] rounded-[10px] bg-violet-800 text-md font-bold text-white mt-4"
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;
