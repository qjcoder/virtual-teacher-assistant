import Image from "next/image";

import { ButtonBlue } from "../components/index";

const StudentCourseCard = () => {
  return (
    <div className=" w-[296px] min-h-max rounded-md overflow-hidden shadow-lg justify-between flex flex-col py-4">
      {/* Card Start  */}
      <Image
        className="w-full h-40 rounded-t-2xl"
        src="/image student.png"
        alt="Course 1"
        height={200}
        width={200}
      />
      <div className="px-4  pt-6 flex flex-col items-end">
        <div className=" flex  flex-col justify-between gap-16">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl  text-[#0B7077]">
              Programing Fundamentals
            </h1>
            <p className="text-[#4D4D4D] text-[10px] font-normal leading-5">
              Product Management Masterclass, you will learn with Sarah Johnson
              - Head of Product Customer Platform Gojek Indonesia.
            </p>
          </div>
          <ButtonBlue
            text="Details"
            className="text-[12px] text-center font-medium items-center justify-center  "
            borderRadius="6px"
            fontSize="12px"
            fontWeight="500"
            height="34px"
            width="79px"
          />
        </div>
      </div>
      {/* Card End  */}
    </div>
  );
};

export default StudentCourseCard;
