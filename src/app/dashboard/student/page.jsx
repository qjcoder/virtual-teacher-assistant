import StudentCourseCard from "@/components/student-course-card";

const StudentPortal = () => {
  return (
    <div>
      <main className="min-h-screen ">
        <div className="mb-6 -mt-8">
          <h1 className="text-[#202020] font-bold text-[34px]">Dashboard</h1>
          <p className="text-[18px] font-normal text-[#A5A5A5]">
            Lorem ipsum dolor sit amet
          </p>
        </div>
        <div className=" rounded overflow-hidden shadow-lg flex pb-6 px-6 gap-6">
          <StudentCourseCard />
          <StudentCourseCard />
          <StudentCourseCard />
        </div>
      </main>
    </div>
  );
};

export default StudentPortal;
