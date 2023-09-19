import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ButtonBlue } from "../components/index";

const CourseCard = () => {
  return (
    <div class=" w-[296px] min-h-max rounded-md overflow-hidden shadow-lg  items-center justify-between flex flex-col py-4">
      <Image
        class="w-full h-40"
        src="/image.png"
        alt="Course 1"
        height={200}
        width={200}
      />
      <div className="px-4 items-center">
        <div className=" flex rounded-full  bg-white  -translate-y-4 translate-x-5  h-10 w-[225px] items-center  ">
          <div className="flex  justify-between">
            <div class="z-40">
              <Image src="/Ander.png" width={30} height={30} />
            </div>
            <div class="z-30 -ml-3 ">
              <Image src="/Bartender.png" width={30} height={30} />
            </div>
            <div class="z-20 -ml-3">
              <Image src="/Bartender.png" width={30} height={30} />
            </div>
            <div class="z-10 -ml-3">
              <Image src="/Bartender.png" width={30} height={30} />
            </div>
            <div class="z-0 -ml-3  ">
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
        <div class=" flex  flex-col justify-between gap-2">
          <p className="text-[10px] font-normal text-[#777795] ">
            1 - 28 July 2022
          </p>
          <div class="font-bold text-xl mb-2">
            Product Management Basic - Course
          </div>
          <p class="text-gray-700 text-base">
            Product Management Masterclass, you will learn with Sarah Johnson -
            Head of Product Customer Platform Gojek Indonesia.
          </p>
          <ButtonBlue
            text="Details"
            className="text-[10px] "
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
