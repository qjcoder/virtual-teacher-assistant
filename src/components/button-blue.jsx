import React from "react";

import Link from "next/link";
const ButtonBlue = (props) => {
  return (
    <button className="h-10 w-[120px] p-3 rounded-2xl  border-none text-white text-[14px] font-bold bg-gradient-to-r from-[#4540E1] to-[#00F2FE] cursor-pointer flex items-center justify-center ">
      {props.text}
    </button>
  );
};

export default ButtonBlue;
