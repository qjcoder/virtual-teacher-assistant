import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ButtonBlue } from "../components/index";

const CourseCard = () => {
  return (
    <div>
      <div class=" w-[296px] min-h-max rounded overflow-hidden shadow-lg m-4 ">
        <Image
          class="w-full"
          src="/image.png"
          objectFit="cover"
          alt="Sunset in the mountains"
          height={200}
          width={200}
        />
        <div className=" flex rounded-full  bg-white translate-x-9 -translate-y-4  h-10 w-[225px] items-center  ">
          <div className="flex ">
            <div class="z-40">
              <Image src="/Ander.png" width={30} height={30} />
            </div>
            <div class="z-30  -translate-x-3">
              <Image src="/Bartender.png" width={30} height={30} />
            </div>
            <div class="z-20 -translate-x-6">
              <Image src="/Bartender.png" width={30} height={30} />
            </div>
            <div class="z-10 -translate-x-9">
              <Image src="/Bartender.png" width={30} height={30} />
            </div>
            <div class="z-0 -translate-x-12">
              <Image src="/Bartender.png" width={30} height={30} />
            </div>
          </div>
          <div className="text-[#263238] text-sm font-normal items-center">
            +
          </div>
          <div className="text-[#263238] text-sm font-medium">
            40
            <span className="text-[#263238] text-base font-medium">
              students
            </span>
          </div>
        </div>
        <div class=" flex  flex-col p-6  justify-between">
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
        </div>
        <ButtonBlue text="Details" className="items-center rounded-3xl" />
      </div>
    </div>
  );
};

export default CourseCard;
