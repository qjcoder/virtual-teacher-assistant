import React from "react";

import Link from "next/link";
const ButtonBlue = (props) => {
  return (
    <button
      className=" p-3  border-none text-white text-[14px] font-bold bg-gradient-to-r from-[#4540E1] to-[#00F2FE] cursor-pointer flex items-center justify-center "
      style={{
        borderRadius: props.borderRadius,
        width: props.width,
        height: props.height,
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
      }}
    >
      {props.text}
    </button>
  );
};

export default ButtonBlue;
