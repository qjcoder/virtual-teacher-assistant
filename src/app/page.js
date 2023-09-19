import { ButtonBlue, ButtonWhite, Footer, Header } from "@/components/index";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" min-h-screen bg-white  relative overflow-hidden  flex flex-col">
      <header className=" flex justify-between flex-1 p-5  min-h-[10vh] items-center">
        <Header />
        <div className="flex gap-4">
          <Link href="/signin">
            <ButtonWhite text="Sign in" color="white" borderRadius="20px" />
          </Link>
          <Link href="/dashboard">
            <ButtonBlue text="Get Started" borderRadius="20px" />
          </Link>
        </div>
      </header>
      <section className="min-h-[90vh] min-w-full flex  justify-between items-center gap-12">
        <div className="flex items-center flex-col flex-1">
          <h1 className="text-[80px] font-bold text-center">
            Getting <span className="text-[#0093EF]">Quality</span>
            <br></br> Education Is Now<br></br> More
            <span className="text-[#0093EF]"> Easy</span>
          </h1>
          <div className="flex gap-2 mt-12 items-center justify-center  ">
            <Link href="/dashboard">
              <ButtonBlue text="Get Started" borderRadius="20px" />
            </Link>
            <Link href="/signin">
              <ButtonWhite text="Sign in" color="white" borderRadius="20px" />
            </Link>
          </div>
        </div>
        <div className="flex-1">
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
