import Image from "next/image";

import { ButtonBlue } from "../components/index";

const CourseCard = () => {
  return (
    <div className=" w-[296px]  rounded-md overflow-hidden shadow-lg  items-center justify-between flex flex-col py-4">
      <Image
        className="w-full h-40 rounded-t-2xl"
        src="/image.png"
        alt="Course 1"
        height={200}
        width={200}
      />
      <div className="px-4 items-center">
        <div className=" flex rounded-full  bg-white  -translate-y-4 translate-x-5  h-10 w-[225px] items-center  ">
          <div className="flex  justify-between">
            <div className="z-40">
              <Image src="/Ander.png" width={30} height={30} />
            </div>
            <div className="z-30 -ml-3 ">
              <Image src="/Bartender.png" width={30} height={30} />
            </div>
            <div className="z-20 -ml-3">
              <Image src="/Bartender.png" width={30} height={30} />
            </div>
            <div className="z-10 -ml-3">
              <Image src="/Bartender.png" width={30} height={30} />
            </div>
            <div className="z-0 -ml-3  ">
              <Image src="/Bartender.png" width={30} height={30} />
            </div>
          </div>
          <div className="text-[#263238] text-sm font-normal items-center ml-3 mr-3">
            +
          </div>
          <div>
            <span className="text-[#263238] text-sm font-medium mr-1">40</span>
            <sup className="text-[#263238] text-sm font-medium">students</sup>
          </div>
        </div>
        <div className=" flex  flex-col justify-between gap-2">
          <p className="text-[10px] font-normal text-[#777795] ">
            1 - 28 July 2022
          </p>
          <div className="font-bold text-xl mb-2">
            Product Management Basic - Course
          </div>
          <p className="text-gray-700 text-base">
            Product Management Masterclass, you will learn with Sarah Johnson -
            Head of Product Customer Platform Gojek Indonesia.
          </p>
          <ButtonBlue
            text="Details"
            className="text-[10px] text-center items-center justify-center "
            borderRadius="6px"
            height="34px"
            width="79px"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
