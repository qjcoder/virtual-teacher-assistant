"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ButtonBlue, ButtonWhite, Header } from "@/components";

const StudentLogin = () => {
  //Axios Form Handling POSt START
  const [post, setPost] = useState({
    username: "",
    password: "",
    role: "student",
  });

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      post
    );
    console.log(response);
  };

  //Axios Form Handling POSt END

  return (
    <div className="flex gap-1 items-center justify-between flex-col">
      <Image
        className=" rounded-full border-4 border-white "
        src="/profile-avatar.jpg"
        alt="Profile Picture"
        width={90}
        height={90}
      />

      <p className="text-base font-roboto font-normal mt-2">
        Login account with
      </p>

      {/* Social Icon Start */}
      <div className="flex gap-6 mt-3">
        {/* <!-- Github --> */}
        <Link href={"#"}>
          <Image
            className="w-9 h-9 p-1 rounded-full  bg-white "
            src="/github.png"
            alt="github-logo"
            width={50}
            height={50}
          />
        </Link>
        {/* <!-- Google --> */}
        <Image
          className="w-9 h-9 p-1 rounded-full  bg-white "
          src="/google.png"
          alt="Google-Logo"
          width={50}
          height={50}
        />

        {/* <!-- Linkedin --> */}
        <Image
          className="w-9 h-9 p-1 rounded-full  bg-white "
          src="/linkedIn.png"
          alt="LinkedIn-Logo"
          width={50}
          height={50}
        />
      </div>
      {/* Social Icon End */}
      <div className="flex items-center justify-between gap-6 my-6  ">
        <Link href="/auth/teacher-signin">
          <ButtonWhite
            text="As a Teacher"
            borderRadius="1000px"
            color="white"
            textColor="#AB9393"
            height="48px"
            width="145px"
          />
        </Link>
        <p className="text-white">or</p>

        <ButtonBlue
          text="As a Student"
          borderRadius="1000px"
          height="48px"
          width="145px"
        />
      </div>
      {/* Form */}
      <form
        className=" flex flex-col items-center gap-8"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-4">
          <div className="flex gap-5  ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-9 h-9 p-1 rounded-full bg-white  text-center"
            >
              <path
                d="M17.9815 18.7248C16.6121 16.9175 14.4424 15.75 12 15.75C9.55761 15.75 7.38789 16.9175 6.01846 18.7248M17.9815 18.7248C19.8335 17.0763 21 14.6744 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 14.6744 4.1665 17.0763 6.01846 18.7248M17.9815 18.7248C16.3915 20.1401 14.2962 21 12 21C9.70383 21 7.60851 20.1401 6.01846 18.7248M15 9.75C15 11.4069 13.6569 12.75 12 12.75C10.3431 12.75 9 11.4069 9 9.75C9 8.09315 10.3431 6.75 12 6.75C13.6569 6.75 15 8.09315 15 9.75Z"
                stroke="#797979"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <input
              label="User Name"
              onChange={handleInput}
              name="username"
              type="text"
              required
              placeholder="Name"
              className="w-[340px] h-[38px] px-4 py-2 text-[#797979] bg-[#F9F7F7] border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex items-center gap-5  ">
            <Image
              src="/password.png"
              alt="Password Icon"
              width={52}
              height={52}
              className="w-9 h-9 p-1 rounded-full bg-white border text-center"
            />
            <div>
              <input
                label="Password"
                onChange={handleInput}
                name="password"
                type="password"
                placeholder="Password"
                required
                className="w-[340px] h-[38px] px-4 py-2 text-[#797979] bg-[#F9F7F7] border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        <div className="mb-6">
          <ButtonBlue
            text="Sign in"
            type="submit"
            borderRadius="20px"
            height="40px"
            width="120px"
          />
        </div>
      </form>
      {/* End of Form */}
      <Link href="/auth/student-signup" className="text-[#0093EF] ml-52">
        Forget Password?
      </Link>
      <div className="flex mt-7 gap-1">
        <p className="text-white">Don't have account?</p>

        <Link href="/auth/student-signup" className="text-[#0093EF] mt-15">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default StudentLogin;
