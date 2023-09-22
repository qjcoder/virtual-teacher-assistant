import { ButtonBlue, ButtonWhite, Header } from "@/components";
import Image from "next/image";
import Link from "next/link";

const TeacherLogin = () => {
  return (
    <div className="h-screen flex flex-col p-5 bg-white ">
      <Header />
      <section className="flex ">
        {/* left */}
        <div className=" flex flex-1  flex-col  p-6  items-center gap-11  ">
          <div className="text-[36px] font-bold text-center">
            Getting <span className="text-[#0093EF]">Quality</span> <br></br>
            Education Is Now More <span className="text-[#0093EF]">Easy</span>
          </div>
          <div>
            <Image src="/banner.png" width={500} height={400} />
          </div>
        </div>
        {/* Right  */}

        <div className="flex flex-1 items-center justify-center mb-12 mr-6   bg-[#ABA9C2]  rounded-3xl ">
          <div className="flex items-center flex-col">
            <Image
              className=" rounded-full border-4 border-white "
              src="/profile-avatar.jpg"
              alt="Profile Picture"
              width={117}
              height={116}
            />

            <p className="text-base font-roboto font-normal mt-3">
              Login account with
            </p>

            {/* Social Icon Start */}
            <div className="flex gap-6 mt-6">
              {/* <!-- Github --> */}
              <Link href={"#"}>
                <Image
                  className="w-10 h-10 p-1 rounded-full  bg-white "
                  src="/github.png"
                  alt="github-logo"
                  width={50}
                  height={50}
                />
              </Link>
              {/* <!-- Google --> */}
              <Image
                className="w-10 h-10 p-1 rounded-full  bg-white "
                src="/google.png"
                alt="Google-Logo"
                width={50}
                height={50}
              />

              {/* <!-- Linkedin --> */}
              <Image
                className="w-10 h-10 p-1 rounded-full  bg-white "
                src="/linkedIn.png"
                alt="LinkedIn-Logo"
                width={50}
                height={50}
              />
            </div>
            {/* Social Icon End */}
            <div className="flex items-center justify-between gap-2 my-8  ">
              <Link href="/signin/teacher">
                <ButtonWhite
                  text="As a Teacher"
                  color="white"
                  borderRadius="1000px"
                  height="48px"
                  width="145px"
                />
              </Link>
              <p>or</p>
              <Link href="/signin/student">
                <ButtonBlue
                  text="As a Student"
                  borderRadius="1000px"
                  color="white"
                  height="48px"
                  width="145px"
                />
              </Link>
            </div>
            {/* Form */}
            <div className=" flex flex-col items-center gap-8">
              <form className="flex flex-col gap-4">
                <div className="flex gap-5  ">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 p-1 rounded-full bg-white  text-center"
                  >
                    <path
                      d="M17.9815 18.7248C16.6121 16.9175 14.4424 15.75 12 15.75C9.55761 15.75 7.38789 16.9175 6.01846 18.7248M17.9815 18.7248C19.8335 17.0763 21 14.6744 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 14.6744 4.1665 17.0763 6.01846 18.7248M17.9815 18.7248C16.3915 20.1401 14.2962 21 12 21C9.70383 21 7.60851 20.1401 6.01846 18.7248M15 9.75C15 11.4069 13.6569 12.75 12 12.75C10.3431 12.75 9 11.4069 9 9.75C9 8.09315 10.3431 6.75 12 6.75C13.6569 6.75 15 8.09315 15 9.75Z"
                      stroke="#797979"
                      stroke-width="1.3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <input
                    label="User Name"
                    type="text"
                    required
                    placeholder="Name"
                    className="w-[340px] h-[38px] px-4 py-2 text-[#797979] bg-[#F9F7F7] border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex items-center gap-5  ">
                  <Image
                    src="/password.png"
                    alt="Password Icon"
                    width={52}
                    height={52}
                    className="w-10 h-10 p-1 rounded-full bg-white border text-center"
                  />
                  <input
                    label="Password"
                    type="password"
                    placeholder="Password"
                    required
                    className="w-[340px] h-[38px] px-4 py-2 text-[#797979] bg-[#F9F7F7] border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </form>
              <div className="mb-6">
                <Link href="/dashboard/teacher">
                  <ButtonBlue
                    text="Sign in"
                    borderRadius="20px"
                    height="40px"
                    width="120px"
                  />
                </Link>
              </div>
            </div>
            {/* End of Form */}
            <Link href="/signup/student" className="text-[#0093EF] ml-52">
              Forget Password?
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeacherLogin;
