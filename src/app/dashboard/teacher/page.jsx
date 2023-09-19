import { ButtonBlue } from "@/components";
import CourseCard from "@/components/course-card";
import Image from "next/image";

const Facultyportal = () => {
  return (
    <main className="min-h-screen ">
      <div className="mb-6 -mt-8">
        <h1 className="text-[#202020] font-bold text-[34px]">Dashboard</h1>
        <p className="text-[18px] font-normal text-[#A5A5A5]">
          Lorem ipsum dolor sit amet
        </p>
      </div>
      <div class=" rounded overflow-hidden shadow-lg flex items-center">
        <div class="  rounded overflow-hidden shadow-lg justify-center flex">
          <CourseCard />
        </div>
      </div>
    </main>
  );
};

export default Facultyportal;
