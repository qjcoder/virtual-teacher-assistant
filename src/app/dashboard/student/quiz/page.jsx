import { ButtonBlue, ButtonWhite } from "@/components";
import Link from "next/link";

const StudentQuiz = () => {
  return (
    <main className="min-h-screen bg-[#F9F9F9] w-screen ">
      {/* Top Title Container Start*/}
      <div className="rounded-2xl pl-5">
        <h1 className="text-[#202020] font-bold text-[34px]">Courses</h1>
        <p className="text-[18px] font-normal text-[#A5A5A5]">
          Lorem ipsum dolor sit amet
        </p>

        <div className=" pt-10 ">
          {/* White Background Container  Start*/}
          <div className=" flex flex-col pb-4 bg-white  rounded-3xl w-[1110px] ">
            <div className="flex flex-col ">
              {/* Quiz List Heading Start  */}
              <div class="h-[40px] w-[1110px] flex justify-between bg-[#E9EAEF] items-center px-6  ">
                <h1 class=" text-[#0D1F36] text-[13px] font-bold h-4 ml-28 ">
                  Test Title
                </h1>
                <h1 class=" text-[#0D1F36] text-[13px] font-bold h-4">
                  Course Title
                </h1>
                <h1 class=" text-[#0D1F36] text-[13px] font-bold h-4">
                  Start Date time
                </h1>
                <h1 class=" text-[#0D1F36] text-[13px] font-bold h-4">
                  End Date time
                </h1>
                <h1 class=" text-[#0D1F36] text-[13px] font-bold h-4">
                  Action
                </h1>
              </div>
              {/* Quiz List Heading End  */}

              {/* Quiz List Start  */}
              <div class="h-[64px] w-[1110px] bg-white flex justify-between  items-center px-6  ">
                <h1 class="text-[#707683] text-[10px] font-normal  ">1</h1>
                <h1 class="text-[#323C47] text-[13px] font-medium ">Quiz 1</h1>
                <h1 class="text-[#707683] text-[10px] font-normal ml-16">
                  Software Engineering
                </h1>
                <h1 class="text-[#707683] text-[13px] font-normal ">
                  Apr 28, 2023 2:30 PM
                </h1>
                <h1 class="text-[#707683] text-[13px] font-normal ">
                  Apr 28, 2023 2:30 PM
                </h1>
                <h1>
                  <Link
                    href="/dashboard/student/quiz/start"
                    class="font-normal text-[13px] text-[#14CD32] hover:underline "
                  >
                    Start Test
                  </Link>
                </h1>
              </div>
              {/* Quiz List End  */}

              {/* Quiz List Completed Start  */}
              <div class="h-[64px] w-[1110px] bg-white flex justify-between  items-center px-6  ">
                <h1 class="text-[#707683] text-[10px] font-normal  ">2</h1>
                <h1 class="text-[#323C47] text-[13px] font-medium ">Quiz 1</h1>
                <h1 class="text-[#707683] text-[10px] font-normal ml-16">
                  Software Engineering
                </h1>
                <h1 class="text-[#707683] text-[13px] font-normal ">
                  Apr 28, 2023 2:30 PM
                </h1>
                <h1 class="text-[#707683] text-[13px] font-normal ">
                  Apr 28, 2023 2:30 PM
                </h1>
                <h1>
                  <Link
                    href="/dashboard/student/quiz/result"
                    class="font-normal text-[13px] text-[#004FF9] hover:underline "
                  >
                    View Result
                  </Link>
                </h1>
              </div>
              {/* Quiz List Completed end */}
            </div>
          </div>
        </div>
      </div>
      {/* Top Title Container End*/}
    </main>
  );
};

export default StudentQuiz;


