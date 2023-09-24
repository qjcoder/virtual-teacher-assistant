const ButtonWhite = (props) => {
  return (
    <button
      className="h-10 w-[120px] p-3  border border-[#C1C1C1] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]  text-[14px] font-bold cursor-pointer flex items-center justify-center"
      style={{
        backgroundColor: props.color,
        borderRadius: props.borderRadius,
        borderColor: props.borderColor,
        width: props.width,
        height: props.height,
        color: props.textColor,
      }}
    >
      {props.text}
    </button>
  );
};

export default ButtonWhite;
