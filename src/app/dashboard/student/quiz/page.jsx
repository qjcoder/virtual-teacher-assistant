import { ButtonBlue, ButtonWhite } from "@/components";

const StudentQuiz = () => {
  return (
    <main className="min-h-screen bg-[#F9F9F9] w-[1300px] ">
      {/* Top Title Container Start*/}
      <div className="rounded-2xl pl-5">
        <h1 className="text-[#202020] font-bold text-[34px]">Courses</h1>
        <p className="text-[18px] font-normal text-[#A5A5A5]">
          Lorem ipsum dolor sit amet
        </p>

        <div className=" pt-10 flex">
          {/* White Background Container  Start*/}
          <div className=" flex flex-col pb-4 bg-white  rounded-3xl w-[1110px] ">
            <div className="items-center flex flex-col justify-between">
              <div class="h-[40px] w-[1110px] bg-[#E9EAEF] flex justify-between px-3 items-center   ">
                <h1 class="text-[#0D1F36] text-[13px] font-bold h-4 ">S.No</h1>
                <h1 class=" text-[#0D1F36] text-[13px] font-bold h-4">
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
              <div class="h-[64px] w-[1110px] bg-white flex justify-start px-3 items-center  ">
                <h1 class="text-[#707683] text-[10px] font-normal  ">1</h1>
                <h1 class="text-[#323C47] text-[13px] font-medium ">Quiz 1</h1>
                <h1 class="text-[#707683] text-[10px] font-normal ">
                  Software Engineering
                </h1>
                <h1 class="text-[#707683] text-[13px] font-normal ">
                  Apr 28, 2023 2:30 PM
                </h1>
                <h1 class="text-[#707683] text-[13px] font-normal ">
                  Apr 28, 2023 2:30 PM
                </h1>
                <h1>
                  <a
                    href="#"
                    class="font-normal text-[13px] text-[#14CD32] hover:underline "
                  >
                    Start Test
                  </a>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Top Title Container End*/}
    </main>
  );
};

export default StudentQuiz;
