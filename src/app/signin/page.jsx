import { ButtonBlue, ButtonWhite, Header } from "@/components";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <div className=" min-h-screen bg-white  relative overflow-hidden  flex flex-col">
      <header className="p-10">
        <Header />
      </header>
      <section className="flex">
        <div className="flex flex-1  flex-col  justify-between  items-center ">
          <div className="text-[36px] font-bold mb-5 text-center">
            Getting <span className="text-[#0093EF]">Quality</span> <br></br>{" "}
            Education Is Now More <span className="text-[#0093EF]">Easy</span>
          </div>
          <div>
            <Image src="/signin.png" width={500} height={500} />
          </div>
        </div>
        {/* Right  */}
        <div className="flex flex-1  flex-col  justify-between  items-center p-10 ">
          <div className="flex items-center flex-col">
            <Image
              className="w-[88px] h-[88px] p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mb-2"
              src="/signin.png"
              alt="Profile Picture"
              width={88}
              height={88}
            />
            <p className="text-base font-roboto font-normal">
              Create account with
            </p>
          </div>

          <div className="flex gap-6">
            {/* <!-- Github --> */}
            <Link href={"#"}>
              <Image
                className="w-10 h-10 p-1 rounded-full ring-2 bg-white "
                src="/github.png"
                alt="github-logo"
                width={50}
                height={50}
              />
            </Link>
            {/* <!-- Google --> */}
            <Image
              className="w-10 h-10 p-1 rounded-full ring-2 bg-white "
              src="/google.png"
              alt="Google-Logo"
              width={100}
              height={100}
            />

            {/* <!-- Linkedin --> */}
            <Image
              className="w-10 h-10 p-1 rounded-full ring-2 bg-white "
              src="/linkedIn.png"
              alt="LinkedIn-Logo"
              width={100}
              height={100}
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <ButtonBlue text="As a Teacher" />
            <p>or</p>
            <ButtonWhite text="As a Student" />
          </div>
          <div>form</div>
          <div>
            <ButtonBlue text="Signup" />
          </div>
          <p>
            Already have and account?{" "}
            <span className="text-[#0093EF]">Login</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
