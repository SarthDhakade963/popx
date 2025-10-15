"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface FormData {
  [key: string]: string;
}

const fields = [
  {
    id: "fullName",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your full name",
    regex: /^[a-zA-Z\s]{3,}$/,
    error: "Enter valid full name",
    required: true,
  },
  {
    id: "phoneNumber",
    label: "Phone Number",
    type: "text",
    placeholder: "Enter your phone number",
    regex: /^\d{10}$/,
    error: "Enter valid phone number",
    required: true,
  },
  {
    id: "email",
    label: "Email Address",
    type: "text",
    placeholder: "Enter your email",
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    error: "Enter valid email",
    required: true,
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    error:
      "Use at least 8 characters, including 1 letter and 1 number. Only letters and numbers allowed.",
    required: true,
  },
  {
    id: "companyName",
    label: "Company Name",
    type: "text",
    placeholder: "Enter your company name",
    regex: /^.{2,}$/,
    error: "Enter valid company name",
    required: false,
  },
  {
    id: "isAgency",
    label: "Are you an Agency?",
    type: "radio",
    placeholder: "",
    regex: /^(yes|no)$/,
    error: "Please select Yes or No",
    required: true,
  },
];

const SignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>(
    fields.reduce((acc, field) => ({ ...acc, [field.id]: "" }), {})
  );
  const [errors, setErrors] = useState<FormData>(
    fields.reduce((acc, field) => ({ ...acc, [field.id]: "" }), {})
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleBlur = (id: string, regex: RegExp, errorMsg: string) => {
    const value = formData[id];
    if (!regex.test(value)) {
      setErrors((prev) => ({ ...prev, [id]: errorMsg }));
    } else {
      setErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  const handleSubmit = () => {
    let valid = true;
    const newErrors: Record<string, string> = {};

    fields.forEach((field) => {
      const value = formData[field.id];

      localStorage.setItem("fullName", formData.fullName);

      if (field.required && !value) {
        valid = false;
        newErrors[field.id] = `${field.label} is required`;
      } else if (value && !field.regex.test(value)) {
        valid = false;
        newErrors[field.id] = field.error;
      } else {
        newErrors[field.id] = "";
      }
    });

    setErrors(newErrors);

    if (valid) {
      const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

      const userExists = existingUsers.some(
        (user: FormData) => user.email === formData.email
      );

      if (userExists) {
        alert("Account already exists with this email. Please log in.");
        router.push("/login");
        return;
      }

      const newUser = {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      };

      existingUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(existingUsers));

      console.log("Form Submitted!", formData);
      router.push("/profile");
    }
  };

  return (
    <div className="h-full flex flex-col justify-between p-6">
      <div className="flex flex-col gap-4 overflow-y-auto">
        <h1 className="text-black text-2xl font-bold">
          Create your
          <br />
          PopX Account
        </h1>

        {fields
          .filter((f) => f.type !== "radio")
          .map((field) => (
            <div className="relative mt-2" key={field.id}>
              <label
                htmlFor={field.id}
                className="absolute -top-2 left-3 bg-neutral-50 px-1 text-[13px] font-medium text-purple-600"
              >
                {field.label}
                {field.required && <span className="text-red-500">*</span>}
              </label>
              <input
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.id]}
                onChange={(e) => handleChange(e, field.id)}
                onBlur={() => handleBlur(field.id, field.regex, field.error)}
                className={`w-full h-[40px] border rounded-md px-2 pt-1 text-gray-700 focus:outline-none focus:ring-2 placeholder:text-sm placeholder:text-gray-400 flex items-center ${
                  errors[field.id]
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-purple-500"
                }`}
              />
              {errors[field.id] && (
                <p className="text-red-500 text-sm mt-1">{errors[field.id]}</p>
              )}
            </div>
          ))}

        <div className="relative mt-2">
          <label className="absolute -top-2 bg-neutral-50 px-1 text-[13px] font-medium text-purple-600 flex items-center">
            Are you an Agency?<span className="text-red-500">*</span>
          </label>
          <div className="flex gap-4 mt-4">
            {["yes", "no"].map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 text-black text-sm"
              >
                <input
                  type="radio"
                  name="isAgency"
                  value={option}
                  checked={formData.isAgency === option}
                  onChange={(e) => handleChange(e, "isAgency")}
                  className="w-4 h-4 border-gray-300 mr-2"
                />
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </label>
            ))}
          </div>
          {errors.isAgency && (
            <p className="text-red-500 text-sm mt-1">{errors.isAgency}</p>
          )}
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full h-[50px] rounded-[10px] bg-violet-800 text-md font-bold text-white mt-4"
      >
        Create Account
      </button>
    </div>
  );
};

export default SignUp;
