import { ButtonBlue, ButtonWhite, Footer, Header } from "@/components/index";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" min-h-screen flex flex-col bg-white   ">
      <header className=" flex justify-between items-center  p-5 ">
        <Header />
        <div className="flex gap-4">
          <Link href="/signin/teacher">
            <ButtonWhite text="Sign in" color="white" borderRadius="20px" />
          </Link>
          <Link href="/dashboard">
            <ButtonBlue
              text="Get Started"
              borderRadius="20px"
              height="40px"
              width="120px"
            />
          </Link>
        </div>
      </header>
      <section className="min-h-[90vh]  flex  justify-between items-center">
        <div className="flex flex-col flex-1 h-[571px] ">
          <h1 className="text-[70px] font-bold text-center">
            Getting <span className="text-[#0093EF]">Quality</span>
            <br></br> Education Is Now<br></br> More
            <span className="text-[#0093EF]"> Easy</span>
          </h1>
          <div className="flex items-center justify-center gap-2 mt-12   ">
            <Link href="/dashboard">
              <ButtonBlue
                text="Get Started"
                borderRadius="20px"
                height="40px"
                width="120px"
              />
            </Link>
            <Link href="/signin/teacher">
              <ButtonWhite text="Sign in" color="white" borderRadius="20px" />
            </Link>
          </div>
        </div>
        <div className="flex-1 h-[571px] ">
          <Image
            src="/home.png"
            width={600}
            height={600}
            alt="Main Screen Image"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
