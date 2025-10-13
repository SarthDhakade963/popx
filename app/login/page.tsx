import React from "react";

const LoginPage = () => {
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
          className="w-full h-[50px] border border-gray-300 rounded-md px-3 pt-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
          className="w-full h-[50px] border border-gray-300 rounded-md px-3 pt-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
    </div>
  );
};

export default LoginPage;
