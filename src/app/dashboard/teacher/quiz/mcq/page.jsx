import { ButtonBlue, ButtonWhite } from "@/components";
import Link from "next/link";

const MCQ = () => {
  return (
    <main className="h-screen  bg-[#F9F9F9]  ">
      {/* Top Title Container Start*/}
      <div className="rounded-2xl pl-5">
        <h1 className="text-[#202020] font-bold text-[34px]">Generate Quiz</h1>
        <p className="text-[18px] font-normal text-[#A5A5A5]">
          Lorem ipsum dolor sit amet
        </p>

        <div className="flex">
          {/* White Background Container  Start*/}
          <div className=" flex flex-col  pl-10 pr-28 pb-4  bg-white  rounded-3xl   ">
            <div className=" flex justify-center pt-5 pb-10">
              <h1 className="text-2xl font-bold text-[#CACED8]">Create Quiz</h1>
            </div>
            <div className="flex gap-4 items-center mb-10  ">
              <Link href="/dashboard/teacher/quiz">
                <ButtonWhite
                  text="Details"
                  className="text-[16px] font-bold  text-center items-center justify-center border-green-500 "
                  borderRadius="6px"
                  height="42px"
                  width="128px"
                  borderColor="#26B893"
                />
              </Link>
              <Link href="">
                <ButtonBlue
                  text="Questions"
                  className="text-[16px] font-bold  text-center items-center justify-center  "
                  borderRadius="6px"
                  height="42px"
                  width="128px"
                />
              </Link>
            </div>

            {/* TOP FORM START */}
            <form>
              <div className="flex items-center ">
                <div className="flex justify-start gap-8 ">
                  <ButtonWhite
                    text="+Add "
                    type="submit"
                    className="text-[16px] font-bold  items-center justify-center text-center border-[2px] solid border-[#CACED8] outline-none "
                    borderRadius="1px"
                    height="40px"
                    width="152px"
                  />
                  <div className="flex ">
                    <input
                      type="text"
                      required
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
                      required
                      className="mb-10 w-[295px] h-[40px] rounded-xl border-[2px] solid border-[#CACED8] outline-none pl-4  placeholder-black "
                      placeholder="Multiple Choice"
                    />
                  </div>
                </div>
              </div>
            </form>
            {/* TOP FORM END */}

            <div className="text-base font-medium mb-4">
              Enter your question and multiple answer, then select the one
              correct answer.
            </div>

            {/* QUESTION WITH ANSWER FORM START */}
            <form>
              <div>
                <label className="text-[22px] font-medium text-[#000] py-4 ">
                  Question
                </label>
                <input
                  type="text"
                  required
                  label="Question"
                  className="flex flex-col justify-between h-[70px] w-[60vw] text-[25px] font-medium ml-24  text-[#000] border-[2px] solid border-[#CACED8] outline-none p-4 items-center shadow-lg "
                />
              </div>

              <div>
                <label className=" text-[22px] font-medium text-[#000] py-4 ">
                  Answer
                </label>
                <div className="flex flex-col  gap-4 ">
                  <div className="flex items-center justify-start gap-8">
                    <label className="text-[22px] font-medium text-[#00B131] p-4">
                      Correct Answer
                    </label>
                    <input
                      type="text"
                      required
                      label="Correct Answer"
                      className="w-[472px] h-[54px] flex justify-between   text-[22px] font-medium  border-[2px] solid border-[#CACED8] outline-none p-4 items-center shadow-lg rounded-2xl "
                    />
                  </div>
                  <div className="flex items-center justify-start gap-8">
                    <label className="text-[22px] font-medium text-[#3442D9] p-3">
                      Possible Answer
                    </label>
                    <input
                      type="text"
                      required
                      label="Possible Answer"
                      className="w-[472px] h-[54px] flex justify-between   text-[22px] font-medium  border-[2px] solid border-[#CACED8] outline-none p-4 items-center shadow-lg rounded-2xl "
                    />
                  </div>
                  <div className="flex items-center justify-start gap-8">
                    <label className="text-[22px] font-medium text-[#3442D9] p-3">
                      Possible Answer
                    </label>
                    <input
                      type="text"
                      required
                      label="Possible Answer"
                      className="w-[472px] h-[54px] flex justify-between   text-[22px] font-medium  border-[2px] solid border-[#CACED8] outline-none p-4 items-center shadow-lg rounded-2xl "
                    />
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
            </form>
            {/* QUESTION WITH ANSWER FORM END */}
          </div>
        </div>
      </div>
      {/* Top Title Container End*/}
    </main>
  );
};

export default MCQ;
