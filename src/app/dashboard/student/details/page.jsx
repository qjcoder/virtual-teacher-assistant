import Link from "next/link";
import React from "react";

const Detail = () => {
  return (
    <main>
      <div className=" w-[500px] h-[79px] flex items-center justify-center pt-4 rounded-xl shadow-xl ">
        <div className=" w-[300px] h-[47px] justify-between flex gap-10 items-center p-2 text-sm font-normal">
          <Link
            href="/dashboard/student/quiz"
            className="flex gap-3 hover:text-blue-500"
          >
            <svg
              width="26"
              height="27"
              viewBox="0 0 26 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.58543 23.75C1.92085 23.75 1.35172 23.505 0.878056 23.015C0.404389 22.525 0.167959 21.9367 0.168764 21.25V7.5C0.168764 6.8125 0.405598 6.22375 0.879264 5.73375C1.35293 5.24375 1.92165 4.99917 2.58543 5H7.41876V2.5C7.41876 1.8125 7.6556 1.22375 8.12927 0.733752C8.60293 0.243752 9.17165 -0.000831211 9.83543 2.12224e-06H14.6688C15.3333 2.12224e-06 15.9025 0.245002 16.3761 0.735002C16.8498 1.225 17.0862 1.81334 17.0854 2.5V5H21.9188C22.5833 5 23.1525 5.245 23.6261 5.735C24.0998 6.225 24.3362 6.81334 24.3354 7.5V12.8438C23.9729 12.5729 23.5903 12.3383 23.1875 12.14C22.7847 11.9417 22.3618 11.77 21.9188 11.625V7.5H2.58543V21.25H11.1344C11.1948 21.6875 11.2854 22.1146 11.4063 22.5313C11.5271 22.9479 11.6781 23.3542 11.8594 23.75H2.58543ZM9.83543 5H14.6688V2.5H9.83543V5ZM19.5021 26.25C17.8306 26.25 16.4055 25.6404 15.227 24.4213C14.0485 23.2021 13.4596 21.7283 13.4604 20C13.4604 18.2708 14.0497 16.7967 15.2282 15.5775C16.4068 14.3583 17.8314 13.7492 19.5021 13.75C21.1736 13.75 22.5987 14.3596 23.7772 15.5788C24.9557 16.7979 25.5446 18.2717 25.5438 20C25.5438 21.7292 24.9545 23.2033 23.776 24.4225C22.5974 25.6417 21.1728 26.2508 19.5021 26.25ZM19.5021 23.75L23.1271 20L22.2813 19.125L20.1063 21.375V16.25H18.8979V21.375L16.7229 19.125L15.8771 20L19.5021 23.75Z"
                fill="#50525B"
              />
            </svg>

            <p>Quiz</p>
          </Link>
          <Link
            href="/dashboard/student/assignment"
            className="flex gap-3 hover:text-blue-500"
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.54376 21.783C4.99376 21.783 4.52276 21.587 4.13076 21.195C3.73876 20.803 3.5431 20.3323 3.54376 19.783V5.78296C3.54376 5.23296 3.73976 4.76196 4.13176 4.36996C4.52376 3.97796 4.99443 3.78229 5.54376 3.78296H9.74376C9.96043 3.18296 10.3231 2.69963 10.8318 2.33296C11.3404 1.96629 11.9111 1.78296 12.5438 1.78296C13.1771 1.78296 13.7481 1.96629 14.2568 2.33296C14.7654 2.69963 15.1278 3.18296 15.3438 3.78296H19.5438C20.0938 3.78296 20.5648 3.97896 20.9568 4.37096C21.3488 4.76296 21.5444 5.23363 21.5438 5.78296V19.783C21.5438 20.333 21.3478 20.804 20.9558 21.196C20.5638 21.588 20.0931 21.7836 19.5438 21.783H5.54376ZM7.54376 17.783H14.5438V15.783H7.54376V17.783ZM7.54376 13.783H17.5438V11.783H7.54376V13.783ZM7.54376 9.78296H17.5438V7.78296H7.54376V9.78296ZM12.5438 5.03296C12.7604 5.03296 12.9394 4.96196 13.0808 4.81996C13.2221 4.67796 13.2931 4.49896 13.2938 4.28296C13.2938 4.06629 13.2228 3.88729 13.0808 3.74596C12.9388 3.60463 12.7598 3.53363 12.5438 3.53296C12.3271 3.53296 12.1481 3.60396 12.0068 3.74596C11.8654 3.88796 11.7944 4.06696 11.7938 4.28296C11.7938 4.49963 11.8648 4.67863 12.0068 4.81996C12.1488 4.96129 12.3278 5.03229 12.5438 5.03296Z"
                fill="#50525B"
              />
            </svg>

            <p>Assignment</p>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Detail;
