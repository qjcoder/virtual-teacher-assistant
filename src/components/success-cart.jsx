import { ButtonBlue } from ".";

const Successcart = () => {
  return (
    <div className="">
      <div className="w-[312px] h-[261px]  justify-center flex items-center border rounded-3xl border-[#FFFFFF]  bg-white shadow-2xl object-center z-50">
        <div className="w-[239px] h-[210px] -700 items-center flex justify-center flex-col gap-4">
          <div>
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.6667 55.8333C42.9465 55.8333 55.3333 43.4465 55.3333 28.1667C55.3333 12.8868 42.9465 0.5 27.6667 0.5C12.3868 0.5 0 12.8868 0 28.1667C0 43.4465 12.3868 55.8333 27.6667 55.8333Z"
                fill="url(#paint0_linear_195_4876)"
              />
              <path
                d="M23.8405 39.5L13 29.0717L15.7101 26.4647L23.8405 34.2859L41.2899 17.5L44 20.1071L23.8405 39.5Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_195_4876"
                  x1="0"
                  y1="28.1667"
                  x2="55.3333"
                  y2="28.1667"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.868784" stop-color="#3D56E5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="text-lg font-bold text-[#010101]">Done!</div>
          <div className="text-xs font-bold text-[#010101]">
            New Job Created Successfully
          </div>
          <div>
            <ButtonBlue
              text="Done"
              className="text-[16px] font-bold  text-center items-center justify-center  "
              borderRadius="6px"
              height="42px"
              width="128px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Successcart;
