import React from "react";

const Footer = () => {
  return (
    // Footer
    <div className="flex flex-1 justify-between h-[247px] w-screen font-roboto bg-[#0A0A0A]  px-12 py-2">
      {/* NewsLetter */}
      <div className="flex flex-col items-start gap-3 ">
        <h1 className=" text-white text-2xl font-bold  ">Newsletter</h1>
        <p className="text-[#FCFCFC]  text-sm font-normal ">
          Stay updated with our latest trends Seed heaven<br></br> so said place
          winged over given forth fruit.
        </p>
        <form className="flex items-center gap-2  ">
          <input
            type="email"
            label="Email"
            required
            placeholder="Enter your email"
            className=" w-[370px] h-[40px] items-center p-2 text-sm font-normal text-white outline-none  border border-[#4FACFE]  bg-transparent"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            type="submit"
            className="items-center text-center w-[36px] h-[36px] text-white bg-gradient-to-r from-[#4FACFE] to-[#00F2FE] rounded-[4px] cursor-pointer  "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </form>
      </div>
      {/* About us */}
      <div className="flex flex-col items-start gap-3 ">
        <h1 className=" text-white font-bold  text-2xl">About us</h1>
        <p className="text-[#FCFCFC]  text-sm font-normal ">
          The are likely to focus on the text,<br></br>disregarding the layout
          and its e,<br></br>an unacceptable risk in corporate an <br></br>
          environments.
        </p>
      </div>
      {/* Contact us */}
      <div className="flex flex-col items-start gap-3">
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
