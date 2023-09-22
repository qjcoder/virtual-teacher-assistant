import { ButtonBlue } from ".";

const QuizCompletionCart = () => {
  return (
    <div className="w-[349px] h-[286px] justify-center flex items-center border rounded-3xl border-[#FFFFFF]  bg-white shadow-2xl object-center z-50">
      <div className="w-[326px] h-[237px] items-center flex justify-center flex-col gap-4 mb-3 ">
        <div className=" ml-64">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-"
          >
            <path
              d="M16 2C8.2 2 2 8.2 2 16C2 23.8 8.2 30 16 30C23.8 30 30 23.8 30 16C30 8.2 23.8 2 16 2ZM21.4 23L16 17.6L10.6 23L9 21.4L14.4 16L9 10.6L10.6 9L16 14.4L21.4 9L23 10.6L17.6 16L23 21.4L21.4 23Z"
              fill="#FF0000"
            />
          </svg>
        </div>
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
        <div className="text-xl font-bold text-[#010101]">Result</div>
        <div className="flex items-center gap-4">
          <span>Total Marks:</span>
          <span>10</span>
        </div>
        <div className="flex gap-4 items-center">
          <span>Obtained Marks:</span>
          <span>8</span>
        </div>
      </div>
    </div>
  );
};

export default QuizCompletionCart;
