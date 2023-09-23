import StudentCourseCard from "@/components/student-course-card";

const StudentPortal = () => {
  return (
    <div>
      <main className="min-h-screen ">
        <div>
          <h1 className="text-[#202020] font-bold text-[34px]">Dashboard</h1>
          <p className="text-[18px] font-normal text-[#A5A5A5]">
            Lorem ipsum dolor sit amet
          </p>
        </div>
        <div className="flex shadow-lg  pb-6 px-6 gap-6">
          <StudentCourseCard />
        </div>
      </main>
    </div>
  );
};

export default StudentPortal;
