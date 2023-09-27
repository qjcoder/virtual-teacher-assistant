"use client";
import { ButtonBlue, ButtonWhite } from "@/components";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

const MCQ = () => {
  //Axios Form Handling POSt START
  const [question, setQuestion] = useState({
    question_number: "",
    question_type: "",
    question: "",
    wrong_option_1: "",
    wrong_option_2: "",
    wrong_option_3: "",
    correct_option: "",
  });

  const handleInput = (event) => {
    setQuestion({ ...question, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      question
    );
    console.log(response);
  };
  return (
    <main className="h-screen  bg-[#F9F9F9]  ">
      <div className="flex rounded-2xl pl-5">
        <div className=" flex flex-col  pl-10 pr-28 pb-4  bg-white  rounded-3xl   ">
          <form
            onSubmit={handleSubmit}
            className="flex  flex-col justify-start gap-8 mb-6 "
          >
            <div className="flex gap-8">
              <div className="flex  text-base font-medium">
                <input
                  type="text"
                  name="question_number"
                  onChange={handleInput}
                  placeholder="Question Number"
                  required
                  className="min-w-max h-[44px] rounded-lg border-[2px] solid border-[#CACED8] outline-none pl-4"
                />
              </div>
              <select
                name="question_type"
                placeholder="Question Type"
                onChange={handleInput}
                required
                className="flex  text-base font-medium w-[344px] h-[44px] rounded-lg border-[2px] solid border-[#CACED8] outline-none pl-4"
              >
                <option>MCQ</option>
                <option>True Flase</option>
              </select>
            </div>
            {/* TOP FORM END */}
            <div className="text-base font-medium mb-4">
              Enter your question and multiple answer, then select the one
              correct answer.
            </div>

            {/* QUESTION WITH ANSWER FORM START */}

            <div>
              <label className="text-[22px] font-medium text-[#000] py-4 ">
                Question
              </label>
              <input
                type="text"
                name="question"
                onChange={handleInput}
                required
                label="Question"
                className="flex flex-col justify-between h-[60px] w-[60vw] text-[25px] font-medium ml-24  text-[#000] border-[2px] solid border-[#CACED8] outline-none p-4 items-center shadow-lg "
              />
            </div>

            <div>
              <label className=" text-[22px] font-medium text-[#000] py-4 ">
                Answer
              </label>
              <div className="flex flex-col  gap-4 ">
                <div className="flex items-center justify-start gap-3">
                  <label className="text-[22px] font-medium text-[#00B131] p-4">
                    Correct Option
                  </label>
                  <input
                    type="text"
                    name="correct_option"
                    onChange={handleInput}
                    required
                    label="Correct Answer"
                    className="w-[350px] h-[50px] flex justify-between   text-[22px] font-medium  border-[2px] solid border-[#CACED8] outline-none p-4 items-center shadow-lg rounded-2xl "
                  />
                </div>
                <div className="flex items-center justify-start gap-8">
                  <label className="text-[22px] font-medium text-[#3442D9] p-3">
                    Wrong Option
                  </label>
                  <input
                    type="text"
                    name="wrong_option_1"
                    onChange={handleInput}
                    required
                    label="wrong_option"
                    className="w-[350px] h-[50px] flex justify-between   text-[22px] font-medium  border-[2px] solid border-[#CACED8] outline-none p-4 items-center shadow-lg rounded-2xl "
                  />
                </div>
                <div className="flex items-center justify-start gap-8">
                  <label className="text-[22px] font-medium text-[#3442D9] p-3">
                    Wrong Option
                  </label>
                  <input
                    type="text"
                    name="wrong_option_2"
                    onChange={handleInput}
                    required
                    label="wrong_option_1"
                    className="w-[350px] h-[50px] flex justify-between   text-[22px] font-medium  border-[2px] solid border-[#CACED8] outline-none p-4 items-center shadow-lg rounded-2xl "
                  />
                </div>
                <div className="flex items-center justify-start gap-8">
                  <label className="text-[22px] font-medium text-[#3442D9] p-3">
                    Wrong Option
                  </label>
                  <input
                    type="text"
                    name="wrong_option_3"
                    onChange={handleInput}
                    required
                    label="wrong_option_2"
                    className="w-[350px] h-[50px] flex justify-between   text-[22px] font-medium  border-[2px] solid border-[#CACED8] outline-none p-4 items-center shadow-lg rounded-2xl "
                  />
                  <ButtonBlue
                    text="Save Question"
                    className=" text-[16px] font-bold  text-center items-center justify-center  "
                    borderRadius="6px"
                    height="42px"
                    width="164px"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default MCQ;
