import NewClassCard from "@/components/new-class-card";
import CourseCard from "@/components/course-card";

const Facultyportal = () => {
  return (
    <main className="flex flex-col h-screen  pl-10  bg-[#F9F9F9]   ">
      <div>
        <h1 className="text-[#202020] font-bold text-[34px]">Dashboard</h1>
      </div>
      <div className="flex w-screen bg-white shadow-2xl rounded-2xl">
        {/* //Map for  multiple course */}
        <CourseCard />
        <NewClassCard />
      </div>
    </main>
  );
};

export default Facultyportal;
