"use client";
import { ButtonBlue, ButtonWhite } from "@/components";
import CourseCard from "@/components/course-card";
import axios from "axios";
import { useState } from "react";

const Student = () => {
  //Axios Form Handling POSt START
  const [addStudent, setaddStudent] = useState({
    student_name: "",
    reg_no: "",
    student_email: "",
  });
  const handleInput = (event) => {
    setaddStudent({ ...addStudent, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      addStudent
    );
    console.log(response);
  };

  //Axios Form Handling POSt END
  return (
    <main className="min-h-screen bg-[#F9F9F9] w-[1300px] ">
      <div className="rounded-2xl pl-5">
        <h1 className="text-[#202020] font-bold text-[34px]">Student</h1>

        <div className=" pt-6 flex   ">
          <div className=" flex flex-col  pl-10 pr-28 pb-4  bg-white  rounded-3xl   ">
            <div className="flex pt-5 gap-6 ">
              <h1 className="flex text-xl font-medium text-[#083A50]">
                Teacher: Tariq Baloch
              </h1>
              <h1 className="flex text-xl font-medium text-[#083A50]">
                Class: BSE71
              </h1>
            </div>
            <div className="  flex justify-center pt-5 ">
              <h1 className="text-2xl font-bold text-[#CACED8]">
                Create Course
              </h1>
            </div>
            <div className="   flex flex-col mt-5">
              <div className="flex gap-8">
                {/* COURSE CREATION FORM START  */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                  <div className="flex gap-8">
                    <div className="flex flex-col">
                      <label className="mb-2 text-base font-medium text-[#083A50]">
                        Name
                      </label>
                      <input
                        label="Student Name"
                        name="student_name"
                        onChange={handleInput}
                        type="text"
                        required
                        className="w-[451px] h-[44px] rounded-xl border-[2px] solid border-[#CACED8] outline-none mb-5 pl-4 "
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="mb-2 text-base font-medium text-[#083A50]">
                        Reg No
                      </label>
                      <input
                        type="text"
                        name="reg_no"
                        onChange={handleInput}
                        required
                        label="Student Reg No"
                        className="mb-5 w-[451px] h-[44px] rounded-xl border-[2px] solid border-[#CACED8] outline-none pl-4 "
                      />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col">
                      <label className="mb-2 text-base font-medium text-[#083A50] ">
                        Email
                      </label>
                      <input
                        type="email"
                        name="student_email"
                        onChange={handleInput}
                        required
                        label="Student Email Address"
                        className="mb-5 w-[451px] h-[44px] rounded-xl border-[2px] solid border-[#CACED8] outline-none pl-4 "
                      />
                    </div>
                  </div>
                  <div className="flex gap-4 items-center mb-4 ">
                    <ButtonWhite
                      text="Cancel"
                      className="text-[16px] font-bold  text-center items-center justify-center  "
                      borderRadius="6px"
                      height="42px"
                      width="128px"
                    />
                    <ButtonBlue
                      text="Save"
                      className="text-[16px] font-bold  text-center items-center justify-center  "
                      borderRadius="6px"
                      height="42px"
                      width="128px"
                    />
                  </div>
                </form>
                {/* COURSE CREATION FORM START  */}
              </div>

              {/* Head */}
              <div className="flex flex-col max-w-min max-h-min  border-[1px] border-[#CACED8]   rounded-md shadow-lg mt-6">
                <div className="flex  gap-56 items-center h-[50px] solid border-[1px] border-[#CACED8]  p-5 ">
                  {/* //Get list of student from database  */}
                  <h1 className="text-sm font-medium text-[#343A40]">Name</h1>
                  <h1>Reg no</h1>
                </div>
                <div className="flex  justify-between items-center w-[590px] h-[70px] solid border-[1px] border-[#CACED8]  p-5 ">
                  {/* //Get list of student from database  */}
                  <h1 className="text-sm font-medium text-[#343A40]">Haseeb</h1>
                  <h1>FA-19-REE-007</h1>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="#DC3545"
                      class="w-4 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>

                {/* Repeat for students */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Student;
