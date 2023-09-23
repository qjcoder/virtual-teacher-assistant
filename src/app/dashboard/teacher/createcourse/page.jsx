import { ButtonBlue, CourseCard, Successcart } from "@/components";

const CreateCourse = () => {
  return (
    <main className="min-h-screen bg-[#F9F9F9] w-[1300px] ">
      <div className="rounded-2xl pl-5">
        <h1 className="text-[#202020] font-bold text-[34px]">Create Course</h1>
        <p className="text-[18px] font-normal text-[#A5A5A5]">
          Lorem ipsum dolor sit amet
        </p>

        {/* <Successcart /> */}

        {/* Form Container Start  */}
        <div className="flex pt-6   ">
          <div className=" flex flex-col  pl-10 pr-28 pb-4  bg-white  rounded-3xl   ">
            <div className="  flex justify-center pt-5 ">
              <h1 className="text-2xl font-bold text-[#CACED8]">
                Create Course
              </h1>
            </div>
            <div className="flex flex-col gap-4 mt-5  ">
              <div className="flex  ">
                <h1 className="flex-1 text-base font-bold text-[#CACED8]">
                  Personal
                </h1>
                <h1 className="flex-1 text-base font-bold text-[#CACED8] pl-8">
                  Contact
                </h1>
              </div>

              {/* COURSE CREATION FORM START  */}
              <form className="flex flex-col gap-8">
                <div className="flex gap-8">
                  <div className="flex flex-col">
                    <label className="mb-2 text-base font-medium text-[#083A50]">
                      Course Name
                    </label>
                    <input
                      label="Cousre Name"
                      type="text"
                      required
                      className="w-[451px] h-[44px] rounded-xl border-[2px] solid border-[#CACED8] outline-none mb-5 pl-4 "
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2 text-base font-medium text-[#083A50]">
                      Teacher Name
                    </label>
                    <input
                      type="text"
                      required
                      label="Teacher Name"
                      className="mb-5 w-[451px] h-[44px] rounded-xl border-[2px] solid border-[#CACED8] outline-none pl-4 "
                    />
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="flex flex-col">
                    <label className="mb-2 text-base font-medium text-[#083A50] ">
                      Institute Name
                    </label>
                    <input
                      type="text"
                      required
                      label="Institute Name"
                      className="mb-5 w-[451px] h-[44px] rounded-xl border-[2px] solid border-[#CACED8] outline-none pl-4 "
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2 text-base font-medium text-[#083A50]">
                      Description
                    </label>
                    <textarea
                      type="text"
                      required
                      label="Description"
                      className="mb-5 w-[451px] h-[145px] rounded-xl border-[2px] solid border-[#CACED8] outline-none px-4 py-2 "
                    />
                  </div>
                </div>
                <ButtonBlue
                  text="Save"
                  className="text-[10px] text-center items-center justify-center  "
                  borderRadius="6px"
                  height="42px"
                  width="128px"
                />
              </form>
              {/* COURSE CREATION FORM START  */}
            </div>
          </div>
        </div>
        {/* Form Container Start  */}
      </div>
    </main>
  );
};

export default CreateCourse;
