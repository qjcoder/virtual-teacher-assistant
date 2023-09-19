import React from "react";

import Link from "next/link";
const ButtonWhite = (props) => {
  return (
    <button className="h-10 w-[120px] p-3 rounded-2xl md:rounded-full border border-[#C1C1C1] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]  fill-white stroke-[#AB9393] text-[14px] font-bold bg-white cursor-pointer flex items-center justify-center">
      {props.text}
    </button>
  );
};

export default ButtonWhite;
