import { ButtonBlue, ButtonWhite } from "@/components";
import Link from "next/link";

const MCQ = () => {
  return (
    <main className="min-h-screen bg-[#F9F9F9]  ">
      {/* Top Title Container Start*/}
      <div className="rounded-2xl pl-5">
        <h1 className="text-[#202020] font-bold text-[34px]">Generate Quiz</h1>
        <p className="text-[18px] font-normal text-[#A5A5A5]">
          Lorem ipsum dolor sit amet
        </p>

        <div className=" pt-10 flex">
          {/* White Background Container  Start*/}
          <div className=" flex flex-col  pl-10 pr-28 pb-4  bg-white  rounded-3xl   ">
            <div className="  flex justify-center pt-5 pb-10">
              <h1 className="text-2xl font-bold text-[#CACED8]">Create Quiz</h1>
            </div>
            <div className="flex gap-4 items-center mb-10  ">
              <ButtonWhite
                text="Details"
                className="text-[16px] font-bold  text-center items-center justify-center border-green-500 "
                borderRadius="6px"
                height="42px"
                width="128px"
                borderColor="#26B893"
              />

              <ButtonBlue
                text="Questions"
                className="text-[16px] font-bold  text-center items-center justify-center  "
                borderRadius="6px"
                height="42px"
                width="128px"
              />
            </div>
            <div className="flex items-center ">
              <div className="flex justify-start gap-8 ">
                <ButtonWhite
                  text="+Add "
                  className="text-[16px] font-bold  items-center justify-center text-center border-[2px] solid border-[#CACED8] outline-none "
                  borderRadius="1px"
                  height="40px"
                  width="152px"
                />
                <div className="flex ">
                  <input
                    type="text"
                    className="mb-10 w-[295px] h-[40px] rounded-xl border-[2px] solid border-[#CACED8] outline-none pl-4 "
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex justify-start gap-8 ">
                <ButtonWhite
                  text="Question 1 "
                  className="text-[16px] font-bold shadow-lg  items-center justify-center text-center border-[2px] solid border-[#CACED8] outline-none "
                  borderRadius="8px"
                  height="40px"
                  width="147px"
                />
                <div className="flex  text-base font-medium">
                  <input
                    type="text "
                    className="mb-10 w-[295px] h-[40px] rounded-xl border-[2px] solid border-[#CACED8] outline-none pl-4  placeholder-black "
                    placeholder="Multiple Choice   "
                  />
                </div>
              </div>
            </div>
            <div className="text-base font-medium">
              Enter your question and multiple answer, then select the one
              correct answer.
            </div>
            {/* Question with Question #  Start*/}
            <h1 className=" text-[22px] font-medium text-[#000] py-4 ">
              Question
            </h1>
            <from className="ml-20 flex justify-between h-[74px] border-[2px] solid border-[#CACED8] outline-none p-4 items-center shadow-lg ">
              <div className="text-[25px] font-medium ">
                Based on which of the following parameter Artificial
                Intelligence is categorized?
              </div>
            </from>
            {/* Question with Question #  End*/}
            {/* Answer #  Start*/}
            <div>
              <h1 className=" text-[22px] font-medium text-[#000] py-4 ">
                Answer
              </h1>
              <div className="flex flex-col  gap-4 ">
                <div className="flex items-center justify-start gap-8">
                  <div className="text-[22px] font-medium text-[#00B131] p-4">
                    Correct Answer
                  </div>
                  <div className=" flex justify-between  w-[472px] h-[54px] border-[2px] solid border-[#CACED8] outline-none p-4 items-center shadow-lg rounded-2xl ">
                    <p className="text-[22px] font-normal ">
                      (a) Based on functionally only
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-8">
                  <div className="text-[22px] font-medium text-[#3442D9] p-3">
                    Possible Answer
                  </div>
                  <div className=" flex justify-between  w-[472px] h-[54px] border-[2px] solid border-[#CACED8] outline-none p-4 items-center shadow-lg rounded-2xl ">
                    <p className="text-[22px] font-normal ">
                      (a) Based on capabiltities only
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-8">
                  <div className="text-[22px] font-medium text-[#3442D9] p-3">
                    Possible Answer
                  </div>
                  <div className=" flex justify-between  w-[472px] h-[54px] border-[2px] solid border-[#CACED8] outline-none p-4 items-center shadow-lg rounded-2xl ">
                    <p className="text-[22px] font-normal">
                      (c) Based on capabilities and functionally
                    </p>
                  </div>
                </div>
                {/* Bottom Button  Start*/}
                <div className="flex p-6 justify-center">
                  <div className="flex gap-4 items-center">
                    <ButtonWhite
                      text="Cancel"
                      className="text-[16px] font-bold  text-center items-center justify-center "
                      height="42px"
                      width="128px"
                    />
                    <ButtonBlue
                      text="Update Question"
                      className="text-[16px] font-bold  text-center items-center justify-center  "
                      borderRadius="6px"
                      height="42px"
                      width="164px"
                    />
                  </div>
                </div>
                {/* Bottom Button  End*/}
              </div>
              {/* Answer End*/}
              {/* Bottom Button  Start*/}
              <div className="flex p-6 justify-end mt-15">
                <div className="flex gap-4 items-center">
                  <ButtonWhite
                    text="Cancel"
                    className="text-[16px] font-bold  text-center items-center justify-center "
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
              </div>
              {/* Bottom Button  End*/}

              {/* White Background Container  Start*/}
            </div>
          </div>
        </div>
      </div>
      {/* Top Title Container End*/}
    </main>
  );
};

export default MCQ;
