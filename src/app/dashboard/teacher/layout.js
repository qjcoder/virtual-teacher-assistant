import Image from "next/image";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="h-[120px] w-full flex justify-between items-center px-14 mb-1">
          <div className="text-center text-xl font-bold">
            <span className=" text-[#171063]">Virtual</span>
            <br></br>
            <span className="text-[#1FA3F1]">Teacher Assitant</span>
          </div>
          <div className="flex gap-6 items-center  ">
            <Image
              src="/admin.png" //Size of the discuss later
              width={57}
              height={57}
              className="rounded-md"
            />
            <div className="flex flex-col items-center">
              <span className="text-base font-bold">Haseeb Ahmed</span>
              <span className="text-[#8F8F8F] text-sm font-normal">
                Super Admin
              </span>
            </div>
            <Image src="/arrow.png " width={15} height={8} />
          </div>
        </header>
        <div className="flex">
          <div className=" w-[450px] flex-col flex items-center gap-3 pl-5 ">
            <div className="text-[#C7C7C7] uppercase font-bold text-base">
              Main Menu
            </div>
            <div className="flex justify-between flex-col gap-3 ">
              <div className="flex gap-3 items-center">
                <div>
                  <Link href="/dashboard/teacher">
                    <Image src="/dashboard.png" width={20} height={20} />
                  </Link>
                </div>
                <div className="text-base font-medium">Dashboard</div>
              </div>
              <div className="flex gap-3 items-center">
                <div>
                  <Link href="/dashboard/teacher/people">
                    <Image src="/people.png" width={20} height={20} />
                  </Link>
                </div>
                <div className="text-base font-medium">People</div>
              </div>
              <div className="flex gap-3 items-center">
                <div>
                  <Link href="/dashboard/teacher/grades">
                    <Image src="/grades.png" width={20} height={20} />
                  </Link>
                </div>
                <div className="text-base font-medium">Grades</div>
              </div>
              <div className="flex gap-3 items-center">
                <div>
                  <Link href="/dashboard/teacher/assignment">
                    <Image src="/assignment.png" width={20} height={20} />
                  </Link>
                </div>
                <div className="text-base font-medium">Assignment</div>
              </div>
              <div className="flex gap-3 items-center">
                <div>
                  <Link href="/dashboard/teacher/quiz">
                    <Image src="/quiz.png" width={20} height={20} />
                  </Link>
                </div>
                <div className="text-base font-medium">Quiz</div>
              </div>
              <div className="flex gap-3 items-center">
                <div>
                  <Link href="/dashboard/teacher/grades">
                    <Image src="/task.png" width={20} height={20} />
                  </Link>
                </div>
                <div className="text-base font-medium">Task Planner</div>
              </div>
              <div className="flex gap-3 items-center">
                <div>
                  <Link href="/dashboard/teacher/grades">
                    <Image src="/logout.png" width={20} height={20} />
                  </Link>
                </div>
                <div className="text-base font-medium">Logout</div>
              </div>
            </div>
          </div>
          <div className="flex ">{children}</div>
        </div>
      </body>
    </html>
  );
}
