import StudentCourseCard from "@/components/student-course-card";

const StudentPortal = () => {
  return (
    <main className="flex flex-col h-screen  pl-10  bg-[#F9F9F9]   ">
      <div>
        <h1 className="text-[#202020] font-bold text-[34px]">Dashboard</h1>
      </div>
      <div className="flex w-screen bg-white shadow-2xl rounded-2xl">
        <StudentCourseCard />
        <StudentCourseCard />
        <StudentCourseCard />
      </div>
    </main>
  );
};

export default StudentPortal;
