import { ButtonBlue, ButtonWhite, Header } from "@/components";
import Image from "next/image";
import TeacherLogin from "./teacher-signin/page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="h-screen flex flex-col p-5 ">
          <Header />
          <section className="flex ">
            {/* left */}
            <div className=" flex flex-1  flex-col  p-6  items-center gap-11  ">
              <div className="text-[36px] font-bold text-center">
                Getting <span className="text-[#0093EF]">Quality</span>{" "}
                <br></br>
                Education Is Now More
                <span className="text-[#0093EF]"> Easy</span>
              </div>
              <div>
                <Image src="/banner.png" width={500} height={400} />
              </div>
            </div>
            {/* Right  */}
            <div className="flex flex-1 justify-center items-center ">
              <div className=" w-[560px] h-[590px]  bg-black rounded-[20px] relative">
                <div className="absolute translate-x-20 translate-y-2 ">
                  {children}
                </div>
                <div className="w-0 h-0  border-t-[570px] border-solid border-t-[#ABA9C2] border-r-[545px] border-r-transparent rounded-tl-[20px] " />
              </div>
            </div>
          </section>
        </div>
      </body>
    </html>
  );
}
