import React from "react";

const Footer = () => {
  return (
    // Footer
    <div className="flex flex-1 font-roboto bg-[#0A0A0A] justify-between px-6 py-4">
      {/* NewsLetter */}
      <div className="flex  flex-col items-start justify-between ">
        <h1 className=" text-white font-bold  text-2xl">Newsletter</h1>
        <p className="text-[#FCFCFC]  text-sm font-normal ">
          Stay updated with our latest trends Seed heaven<br></br> so said place
          winged over given forth fruit.
        </p>
        <div className="flex gap-2 items-center ">
          <div className="border border-[#4FACFE]  bg-transparent w-[370px] h-[53px] items-center">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-transparent  text-sm font-normal outline-8 text-white  "
            />
          </div>
          <div className="text-white bg-gradient-to-r from-[#4FACFE] to-[#00F2FE] rounded-[4px] cursor-pointer w-[42px] h-[42px] items-center text-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-[40px] h-[40px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* About us */}
      <div className="flex flex-col items-start justify-start gap-3 ">
        <h1 className=" text-white font-bold  text-2xl">About us</h1>
        <p className="text-[#FCFCFC]  text-sm font-normal ">
          The are likely to focus on the text,<br></br>disregarding the layout
          and its e,<br></br>an unacceptable risk in corporate an <br></br>
          environments.
        </p>
      </div>
      {/* Contact us */}
      <div className="flex  flex-col items-start justify-between">
        <h1 className=" text-white font-bold  text-2xl">Contact us</h1>
        <p className="text-[#FCFCFC]  text-base font-normal ">
          <span className="text-[#337AB7]">Phone:</span> +569 987 142
        </p>
        <p className="text-[#FFFFFF] text-base font-normal ">
          <span className="text-[#337AB7]">Email: virtualteacherasst</span>
          @email.com
        </p>
        <p className="text-[#FCFCFC] text-base font-normal ">
          <span className="text-[#337AB7]">Address:</span> Most of its text is
          made up<br></br> from sections 1.10.32–3 of Cicero's De <br></br>
          finibus
        </p>
      </div>
    </div>
  );
};

export default Footer;
