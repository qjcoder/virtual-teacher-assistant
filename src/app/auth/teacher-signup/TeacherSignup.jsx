"use client";
import { ButtonBlue, ButtonWhite } from "@/components";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const TeacherSignup = () => {
  //Axios Form Handling POSt START
  const [post, setPost] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "teacher",
  });

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(post);

    if (password !== confirmPassword) {
      return "Please enter your password";
    }
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      post
    );
  };

  //Axios Form Handling POSt END
  return (
    <div className="flex items-center flex-col">
      <Image
        className=" rounded-full border-4 border-white "
        src="/profile-avatar.jpg"
        alt="Profile Picture"
        width={90}
        height={90}
      />

      <p className="text-base font-roboto font-normal mt-3">
        Create account with
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
      <div className="flex items-center justify-between gap-6 my-4  ">
        <Link href="/auth/teacher-signin">
          <ButtonBlue
            text="As a Teacher"
            color="white"
            borderRadius="1000px"
            height="48px"
            width="145px"
          />
        </Link>
        <p className="text-white">or</p>
        <Link href="/auth/student-signup">
          <ButtonWhite
            text="As a Student"
            borderRadius="1000px"
            color="white"
            height="48px"
            width="145px"
            textColor="#AB9393"
          />
        </Link>
      </div>
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col items-center gap-8"
      >
        <div className="flex flex-col gap-4 items-center">
          <div className="flex justify-center-center gap-5  ">
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
              name="username"
              type="text"
              onChange={handleInput}
              required
              placeholder="Name"
              className="w-[340px] h-[38px] px-4 py-2 text-[#797979] bg-[#F9F7F7] border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex justify-center-center gap-5  ">
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-9 h-9 p-1 rounded-full bg-white  text-center"
            >
              <path
                d="M21.75 6.75V17.25C21.75 18.4926 20.7426 19.5 19.5 19.5H4.5C3.25736 19.5 2.25 18.4926 2.25 17.25V6.75M21.75 6.75C21.75 5.50736 20.7426 4.5 19.5 4.5H4.5C3.25736 4.5 2.25 5.50736 2.25 6.75M21.75 6.75V6.99271C21.75 7.77405 21.3447 8.49945 20.6792 8.90894L13.1792 13.5243C12.4561 13.9694 11.5439 13.9694 10.8208 13.5243L3.32078 8.90894C2.65535 8.49945 2.25 7.77405 2.25 6.99271V6.75"
                stroke="#797979"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <input
              name="email"
              onChange={handleInput}
              type="email"
              placeholder="Email"
              required
              label="Email"
              className="w-[340px] h-[38px] px-4 py-2 text-[#797979] bg-[#F9F7F7] border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex justify-center-center gap-5  ">
            <Image
              src="/password.png"
              alt="Password Icon"
              width={52}
              height={52}
              className="w-9 h-9 p-1 rounded-full bg-white border text-center"
            />
            <input
              name="password"
              onChange={handleInput}
              type="password"
              placeholder="Password"
              required
              label="Password"
              className="w-[340px] h-[38px] px-4 py-2 text-[#797979] bg-[#F9F7F7] border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex justify-center-center gap-5  ">
            <Image
              src="/password.png"
              alt="User Icon"
              width={52}
              height={52}
              className=" -rotate-180 w-9 h-9 p-1 rounded-full bg-white border text-center"
            />
            <input
              name="confirmPassword"
              onChange={handleInput}
              type="password"
              placeholder="Confirm Password"
              required
              label=" Confirm Password"
              className="w-[340px] h-[38px] px-4 py-2 text-[#797979] bg-[#F9F7F7] border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <div className="mb-6">
              <ButtonBlue
                type="submit"
                text="Signup"
                borderRadius="20px"
                height="40px"
                width="120px"
              />
            </div>
          </div>
        </div>
      </form>
      {/* End of Form */}
      <p className="text-white">
        Already have an account? {""}
        <Link href="/auth/teacher-signin" className="text-[#0093EF]">
          Login
        </Link>
      </p>
    </div>
  );
};
