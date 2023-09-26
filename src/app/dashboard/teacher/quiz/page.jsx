import { ButtonBlue, ButtonWhite } from "@/components";
import Successcart from "@/components/success-cart";
import Link from "next/link";

const Quiz = () => {
  return (
    <main className="h-screen bg-[#F9F9F9] ">
      <div className="rounded-2xl pl-5">
        <h1 className="text-[#202020] font-bold text-[34px]">Generate Quiz</h1>

        <div className="flex">
          {/* White Background Container  Start*/}
          <div className=" flex flex-col  pl-10 pr-28 pb-4  bg-white  rounded-3xl   ">
            <div className="flex justify-center pt-5 pb-10 ">
              <h1 className="text-2xl font-bold text-[#CACED8]">Quiz</h1>
            </div>
            <div className="flex gap-4 items-center mb-10 ">
              <ButtonBlue
                text="Details"
                className="text-[16px] font-bold  text-center items-center justify-center  "
                borderRadius="6px"
                height="42px"
                width="128px"
              />
              <Link href="/dashboard/teacher/quiz/question">
                <ButtonWhite
                  text="Question"
                  className="text-[16px] font-bold  text-center items-center justify-center  "
                  borderRadius="6px"
                  height="42px"
                  width="128px"
                />
              </Link>
            </div>
            <form>
              <div className="   flex mt-5 item flex-col mb-6  ">
                <div className="flex gap-8">
                  <div className="flex flex-col">
                    <label className="mb-2 text-base font-medium text-[#083A50]">
                      Quiz Name
                    </label>
                    <input
                      type="text"
                      required
                      label="Quiz Name"
                      className="mb-5 w-[451px] h-[44px] rounded-xl border-[2px] solid border-[#CACED8] outline-none pl-4 "
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2 text-base font-medium text-[#083A50]">
                      Quiz Type
                    </label>

                    <select
                      required
                      class="w-[344px] h-[44px] rounded-lg border-[2px] solid border-[#CACED8] outline-none pl-4"
                    >
                      <option selected></option>
                      <option>Graded</option>
                      <option>Ungraded</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-base font-medium text-[#083A50]">
                    Option
                  </label>
                  <div className="flex gap-8 ">
                    <div className="flex gap-3 ">
                      <input
                        type="checkbox"
                        className=" w-[21px] h-[19px] justify-center    "
                      />
                      <label className=" text-base font-medium text-[#083A50]">
                        Shuffle Answer
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col pl-16 pt-10 bg-[#FFFFFF] rounded-xl gap-10 shadow-xl p-4">
                <div className="flex gap-3">
                  <div className="flex flex-col">
                    <label className="mb-2 text-base font-medium text-[#083A50]">
                      Available from
                    </label>
                    <input
                      type="time"
                      required
                      className=" w-[295px] h-[40px] rounded-lg border-[2px] solid border-[#CACED8] outline-none pl-4"
                    />
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col  ">
                      <label className="mb-2 text-base font-medium text-[#083A50]">
                        Until
                      </label>
                      <input
                        type="time"
                        required
                        className=" w-[295px] h-[40px] rounded-xl border-[2px] solid border-[#CACED8] outline-none pl-4"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex">
                  {/* White Background Container  Start*/}
                  <div className=" flex flex-col  bg-white  rounded-3xl   ">
                    <form className="flex items-center justify-c">
                      <div className="flex justify-start  ">
                        <Link href="/dashboard/teacher/quiz/mcq">
                          <ButtonWhite
                            text="+Add "
                            type="submit"
                            className="text-[16px] font-bold  items-center justify-center text-center border-[2px] solid border-[#CACED8] outline-none "
                            borderRadius="1px"
                            height="40px"
                            width="152px"
                            color="white"
                          />
                        </Link>
                      </div>
                    </form>
                    {/* Question with Question #  Start*/}
                    <h1 className=" text-base font-medium text-[#083A50] py-4 ">
                      Question 1
                    </h1>
                    <div className="flex justify-between w-[60vw] h-[74px] border-[2px] solid border-[#CACED8] outline-none p-4 items-center shadow-lg ">
                      <div>
                        Based on which of the following parameter Artificial
                        Intelligence is categorized?
                        <div className="flex justify-between">
                          <span id="false">Option1</span>
                          <span>option 2</span>
                          <span>Option 3</span>
                          <span>Option 4</span>
                        </div>
                      </div>
                      <div className="flex gap-[14px]">
                        <div>
                          <svg
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19 11C18.7348 11 18.4804 11.1054 18.2929 11.2929C18.1054 11.4804 18 11.7348 18 12V18C18 18.2652 17.8946 18.5196 17.7071 18.7071C17.5196 18.8946 17.2652 19 17 19H3C2.73478 19 2.48043 18.8946 2.29289 18.7071C2.10536 18.5196 2 18.2652 2 18V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H9C9.26522 3 9.51957 2.89464 9.70711 2.70711C9.89464 2.51957 10 2.26522 10 2C10 1.73478 9.89464 1.48043 9.70711 1.29289C9.51957 1.10536 9.26522 1 9 1H3C2.20435 1 1.44129 1.31607 0.87868 1.87868C0.316071 2.44129 0 3.20435 0 4V18C0 18.7956 0.316071 19.5587 0.87868 20.1213C1.44129 20.6839 2.20435 21 3 21H17C17.7956 21 18.5587 20.6839 19.1213 20.1213C19.6839 19.5587 20 18.7956 20 18V12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11ZM4 11.76V16C4 16.2652 4.10536 16.5196 4.29289 16.7071C4.48043 16.8946 4.73478 17 5 17H9.24C9.37161 17.0008 9.50207 16.9755 9.62391 16.9258C9.74574 16.876 9.85656 16.8027 9.95 16.71L16.87 9.78L19.71 7C19.8037 6.90704 19.8781 6.79644 19.9289 6.67458C19.9797 6.55272 20.0058 6.42201 20.0058 6.29C20.0058 6.15799 19.9797 6.02728 19.9289 5.90542C19.8781 5.78356 19.8037 5.67296 19.71 5.58L15.47 1.29C15.377 1.19627 15.2664 1.12188 15.1446 1.07111C15.0227 1.02034 14.892 0.994202 14.76 0.994202C14.628 0.994202 14.4973 1.02034 14.3754 1.07111C14.2536 1.12188 14.143 1.19627 14.05 1.29L11.23 4.12L4.29 11.05C4.19732 11.1434 4.12399 11.2543 4.07423 11.3761C4.02446 11.4979 3.99924 11.6284 4 11.76ZM14.76 3.41L17.59 6.24L16.17 7.66L13.34 4.83L14.76 3.41ZM6 12.17L11.93 6.24L14.76 9.07L8.83 15H6V12.17Z"
                              fill="#0053B4"
                            />
                          </svg>
                        </div>
                        <div>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
                              fill="#ED0000"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/* Question with Question #  End*/}

                    {/* Bottom Button  Start*/}
                    <div className="flex pt-6 justify-end">
                      <div className="flex gap-4 items-center mb-10  ">
                        <ButtonWhite
                          text="Cancel"
                          className="text-[16px] font-bold  text-center items-center justify-center border-green-500 "
                          borderRadius="6px"
                          height="42px"
                          width="128px"
                        />
                        <ButtonWhite
                          text="Save"
                          className="text-[16px] font-bold  text-center items-center justify-center border-green-500 "
                          borderRadius="6px"
                          height="42px"
                          width="128px"
                        />
                        <ButtonBlue
                          text="Save & Publish"
                          className="text-[16px] font-bold  text-center items-center justify-center  "
                          borderRadius="6px"
                          height="42px"
                          width="164px"
                        />
                      </div>
                    </div>
                    {/* Bottom Button  End*/}
                    {/* White Background Container  Start*/}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Quiz;
