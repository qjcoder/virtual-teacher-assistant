import Image from "next/image";
import Link from "next/link";

import { ButtonBlue } from "./index";

const NewClassCard = () => {
  return (
    <div className=" w-[296px] min-h-max rounded-md overflow-hidden shadow-lg  items-center flex flex-col py-4 ">
      <Image
        className="w-full h-40 rounded-t-2xl"
        src="/image1.png"
        alt="Course 1"
        height={200}
        width={200}
      />
      <div className="px-4 items-center">
        <div className=" flex rounded-full h-7 w-[98px] z-auto -translate-x-14 -translate-y-3 items-center bg-white gap-2 p-3  ">
          <span className="text-[#263238] text-sm font-medium">0</span>
          <span className="text-[#263238] text-sm font-medium">students</span>
        </div>
        <Link href="/dashboard/teacher/createcourse">
          <ButtonBlue
            text="Create New Class"
            className="text-[16px] font-bold "
            borderRadius="6px"
            height="42px"
            width="158px"
          />
        </Link>
      </div>
    </div>
  );
};

export default NewClassCard;
