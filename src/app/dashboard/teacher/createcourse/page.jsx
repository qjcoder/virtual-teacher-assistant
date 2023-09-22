import { ButtonBlue, CourseCard, Successcart } from "@/components";

const CreateCourse = () => {
  return (
    <main className="min-h-screen bg-[#F9F9F9] w-[1300px] ">
      <div className="rounded-2xl pl-5">
        <h1 className="text-[#202020] font-bold text-[34px]">Create Course</h1>
        <p className="text-[18px] font-normal text-[#A5A5A5]">
          Lorem ipsum dolor sit amet
        </p>
        <Successcart />

        <div className=" pt-6 flex   ">
          <div className=" flex flex-col  pl-10 pr-28 pb-4  bg-white  rounded-3xl   ">
            <div className="  flex justify-center pt-5 ">
              <h1 className="text-2xl font-bold text-[#CACED8]">
                Create Course
              </h1>
            </div>
            <div className="   flex mt-5 item flex-col gap-4 ">
              <div className="flex    ">
                <h1 className="flex-1 text-base font-bold text-[#CACED8]">
                  Personal
                </h1>
                <h1 className="flex-1 text-base font-bold text-[#CACED8] pl-4">
                  Contact
                </h1>
              </div>
              <div className="flex gap-8">
                <form className="flex flex-col">
                  <label className="mb-2 text-base font-medium text-[#083A50]">
                    Course Name
                  </label>
                  <input
                    type="text"
                    className="mb-5 w-[451px] h-[44px] rounded-xl border-[2px] solid border-[#CACED8] outline-none pl-4 "
                  />
                  <label className="mb-2 text-base font-medium text-[#083A50]">
                    Institute Name
                  </label>
                  <input
                    type="text"
                    className="mb-5 w-[451px] h-[44px] rounded-xl border-[2px] solid border-[#CACED8] outline-none pl-4 "
                  />
                </form>
                <form className="flex flex-col">
                  <label className="mb-2 text-base font-medium text-[#083A50] ">
                    Teacher Name
                  </label>
                  <input
                    type="text"
                    className="mb-5 w-[451px] h-[44px] rounded-xl border-[2px] solid border-[#CACED8] outline-none pl-4 "
                  />
                  <label className="mb-2 text-base font-medium text-[#083A50]">
                    Description
                  </label>
                  <textarea
                    type="text"
                    className="mb-5 w-[451px] h-[145px] rounded-xl border-[2px] solid border-[#CACED8] outline-none px-4 py-2 "
                  />
                </form>
              </div>
              <ButtonBlue
                text="Save"
                className="text-[10px] text-center items-center justify-center  "
                borderRadius="6px"
                height="42px"
                width="128px"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateCourse;
