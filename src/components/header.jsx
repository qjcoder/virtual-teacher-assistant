import React from "react";
import { ButtonBlue, ButtonWhite } from "./index";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center">
      <span className="font-bold text-[39px] text-[#171063] ">Virtual</span>
      <span className="font-bold text-[32px]  text-[#1FA3F1]  ">
        Teacher Assistant
      </span>
    </div>
  );
};

export default Header;
