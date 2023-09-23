import Image from "next/image";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen">
        <header className="flex justify-between items-center p-3 px-10">
          <div className="text-center text-xl font-bold">
            <span className=" text-[#171063]">Virtual</span>
            <br></br>
            <span className="text-[#1FA3F1]">student Assitant</span>
          </div>
          <div className="flex gap-6 items-center  ">
            <Image
              src="/profile-avatar.jpg" //Size of the discuss later
              width={57}
              height={57}
              className="w-[57px] h-[57px] border-solid border-1 border-indigo-600 rounded-xl object-cover drop-shadow-md outline-none "
            />
            <div className="flex flex-col items-center ">
              <span className="text-base font-bold">Haseeb Ahmed</span>
              <span className="text-[#8F8F8F] text-sm font-normal">
                Super Admin
              </span>
            </div>
            <Image src="/arrow.png " width={15} height={8} />
          </div>
        </header>
        <aside className=" h-screen flex ">
          <div className="w-[250px]  flex-col flex gap-6 mr-6">
            <div className="text-[#C7C7C7] uppercase font-bold text-base pl-12">
              Main Menu
            </div>
            <div className="flex  flex-col ">
              <Link
                href="/dashboard/student/people"
                className="w-[250px] h-[50px] flex items-center gap-5  group pl-6 bg-white ring-slate-900/5   hover:bg-sky-500 hover:ring-sky-500"
              >
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.1875 14.5273C17.6172 14.7422 18.0046 15.0059 18.3496 15.3184C18.6947 15.6309 18.9876 15.9792 19.2285 16.3633C19.4694 16.7474 19.6582 17.1641 19.7949 17.6133C19.9316 18.0625 20 18.5247 20 19H18.75C18.75 18.4857 18.6523 18.0007 18.457 17.5449C18.2617 17.0892 17.9948 16.6921 17.6562 16.3535C17.3177 16.015 16.9173 15.7448 16.4551 15.543C15.9928 15.3411 15.5078 15.2435 15 15.25C14.4792 15.25 13.9941 15.3477 13.5449 15.543C13.0957 15.7383 12.6986 16.0052 12.3535 16.3438C12.0085 16.6823 11.7383 17.0827 11.543 17.5449C11.3477 18.0072 11.25 18.4922 11.25 19H10C10 18.5247 10.0651 18.0625 10.1953 17.6133C10.3255 17.1641 10.5143 16.7474 10.7617 16.3633C11.0091 15.9792 11.3053 15.6309 11.6504 15.3184C11.9954 15.0059 12.3828 14.7422 12.8125 14.5273C12.3242 14.1758 11.9434 13.7363 11.6699 13.209C11.3965 12.6816 11.2565 12.112 11.25 11.5C11.25 10.9857 11.3477 10.5007 11.543 10.0449C11.7383 9.58919 12.0052 9.19206 12.3438 8.85352C12.6823 8.51497 13.0794 8.24479 13.5352 8.04297C13.9909 7.84115 14.4792 7.74349 15 7.75C15.5143 7.75 15.9993 7.84766 16.4551 8.04297C16.9108 8.23828 17.3079 8.50521 17.6465 8.84375C17.985 9.18229 18.2552 9.58268 18.457 10.0449C18.6589 10.5072 18.7565 10.9922 18.75 11.5C18.75 12.112 18.6133 12.6816 18.3398 13.209C18.0664 13.7363 17.6823 14.1758 17.1875 14.5273ZM15 14C15.3451 14 15.6673 13.9349 15.9668 13.8047C16.2663 13.6745 16.5332 13.4954 16.7676 13.2676C17.002 13.0397 17.181 12.776 17.3047 12.4766C17.4284 12.1771 17.4935 11.8516 17.5 11.5C17.5 11.1549 17.4349 10.8327 17.3047 10.5332C17.1745 10.2337 16.9954 9.9668 16.7676 9.73242C16.5397 9.49805 16.276 9.31901 15.9766 9.19531C15.6771 9.07161 15.3516 9.00651 15 9C14.6549 9 14.3327 9.0651 14.0332 9.19531C13.7337 9.32552 13.4668 9.50456 13.2324 9.73242C12.998 9.96029 12.819 10.224 12.6953 10.5234C12.5716 10.8229 12.5065 11.1484 12.5 11.5C12.5 11.8451 12.5651 12.1673 12.6953 12.4668C12.8255 12.7663 13.0046 13.0332 13.2324 13.2676C13.4603 13.502 13.724 13.681 14.0234 13.8047C14.3229 13.9284 14.6484 13.9935 15 14ZM10 14.7812C9.79167 15.0221 9.60286 15.2728 9.43359 15.5332C9.26432 15.7936 9.11458 16.0736 8.98438 16.373C8.63932 16.015 8.22266 15.7383 7.73438 15.543C7.24609 15.3477 6.7513 15.25 6.25 15.25H2.5V2.75H1.25V16.5H8.93555C8.8444 16.7018 8.76953 16.9069 8.71094 17.1152C8.65234 17.3236 8.60352 17.5352 8.56445 17.75H0V1.5H2.5V0.25H6.25C6.82292 0.25 7.37305 0.337891 7.90039 0.513672C8.42773 0.689453 8.91927 0.953125 9.375 1.30469C9.82422 0.953125 10.3125 0.689453 10.8398 0.513672C11.3672 0.337891 11.9206 0.25 12.5 0.25H16.25V1.5H18.75V7.75C18.3724 7.37891 17.9557 7.06966 17.5 6.82227V2.75H16.25V6.35352C16.0417 6.29492 15.8333 6.2526 15.625 6.22656C15.4167 6.20052 15.2083 6.1875 15 6.1875V1.5H12.5C12.0443 1.5 11.6016 1.57812 11.1719 1.73438C10.7422 1.89062 10.3516 2.12174 10 2.42773V14.7812ZM8.75 14.6543V2.42773C8.39844 2.12826 8.00781 1.90039 7.57812 1.74414C7.14844 1.58789 6.70573 1.50651 6.25 1.5H3.75V14H6.25C6.6862 14 7.11589 14.0553 7.53906 14.166C7.96224 14.2767 8.36589 14.4395 8.75 14.6543Z"
                    fill="black"
                  />
                </svg>

                <h1 className="text-slate-900 group-hover:text-white text-base font-medium">
                  Course
                </h1>
              </Link>
              <Link
                href="/dashboard/student/grades"
                className="w-[250px] h-[50px] flex items-center gap-5  group pl-6 bg-white ring-slate-900/5   hover:bg-sky-500 hover:ring-sky-500"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.51885 17.5002C2.00959 17.5002 1.57347 17.3368 1.21051 17.0102C0.847549 16.6835 0.666376 16.2913 0.666994 15.8335V4.16683C0.666994 3.7085 0.848475 3.316 1.21144 2.98933C1.5744 2.66266 2.0102 2.49961 2.51885 2.50016H6.40773C6.60835 2.00016 6.94415 1.59738 7.41514 1.29183C7.88613 0.986274 8.41452 0.833496 9.00033 0.833496C9.58674 0.833496 10.1154 0.986274 10.5864 1.29183C11.0574 1.59738 11.3929 2.00016 11.5929 2.50016H15.4818C15.9911 2.50016 16.4272 2.6635 16.7901 2.99016C17.1531 3.31683 17.3343 3.70905 17.3337 4.16683V15.8335C17.3337 16.2918 17.1522 16.6843 16.7892 17.011C16.4262 17.3377 15.9904 17.5007 15.4818 17.5002H2.51885ZM2.51885 15.8335H15.4818V4.16683H2.51885V15.8335ZM4.3707 14.1668H10.8522V12.5002H4.3707V14.1668ZM4.3707 10.8335H13.63V9.16683H4.3707V10.8335ZM4.3707 7.50016H13.63V5.8335H4.3707V7.50016ZM9.00033 3.54183C9.20094 3.54183 9.36668 3.48266 9.49755 3.36433C9.62841 3.246 9.69415 3.09683 9.69477 2.91683C9.69477 2.73627 9.62903 2.58711 9.49755 2.46933C9.36607 2.35155 9.20033 2.29238 9.00033 2.29183C8.79971 2.29183 8.63397 2.351 8.5031 2.46933C8.37224 2.58766 8.3065 2.73683 8.30588 2.91683C8.30588 3.09738 8.37162 3.24655 8.5031 3.36433C8.63458 3.48211 8.80033 3.54127 9.00033 3.54183Z"
                    fill="black"
                  />
                </svg>

                <h1 className="text-slate-900 group-hover:text-white text-base font-medium">
                  Grades
                </h1>
              </Link>
              <Link
                href="/dashboard/student/assignment"
                className="w-[250px] h-[50px] flex items-center gap-5  group pl-6 bg-white ring-slate-900/5   hover:bg-sky-500 hover:ring-sky-500"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.25 18.75C17.6307 18.75 18.75 17.6307 18.75 16.25C18.75 14.8693 17.6307 13.75 16.25 13.75C14.8693 13.75 13.75 14.8693 13.75 16.25C13.75 17.6307 14.8693 18.75 16.25 18.75Z"
                    fill="black"
                  />
                  <path
                    d="M6.25 8.125H7.5V9.375H6.25V8.125ZM6.25 11.25H7.5V12.5H6.25V11.25ZM6.25 14.375H7.5V15.625H6.25V14.375ZM8.75 8.125H13.75V9.375H8.75V8.125ZM8.75 11.25H13.75V12.5H8.75V11.25ZM8.75 14.375H11.25V15.625H8.75V14.375Z"
                    fill="black"
                  />
                  <path
                    d="M4.375 17.5V4.375H6.25V6.25H13.75V4.375H15.625V11.25H16.875V4.375C16.875 4.04348 16.7433 3.72554 16.5089 3.49112C16.2745 3.2567 15.9565 3.125 15.625 3.125H13.75V2.5C13.75 2.16848 13.6183 1.85054 13.3839 1.61612C13.1495 1.3817 12.8315 1.25 12.5 1.25H7.5C7.16848 1.25 6.85054 1.3817 6.61612 1.61612C6.3817 1.85054 6.25 2.16848 6.25 2.5V3.125H4.375C4.04348 3.125 3.72554 3.2567 3.49112 3.49112C3.2567 3.72554 3.125 4.04348 3.125 4.375V17.5C3.125 17.8315 3.2567 18.1495 3.49112 18.3839C3.72554 18.6183 4.04348 18.75 4.375 18.75H11.25V17.5H4.375ZM7.5 2.5H12.5V5H7.5V2.5Z"
                    fill="black"
                  />
                </svg>

                <h1 className="text-slate-900 group-hover:text-white text-base font-medium">
                  Assignment
                </h1>
              </Link>
              <Link
                href="/dashboard/student/quiz"
                className="w-[250px] h-[50px] flex items-center gap-5  group pl-6 bg-white ring-slate-900/5   hover:bg-sky-500 hover:ring-sky-500"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.77734 6C7.77734 5.85266 7.83587 5.71135 7.94006 5.60716C8.04425 5.50297 8.18556 5.44444 8.3329 5.44444H12.7773C12.9247 5.44444 13.066 5.50297 13.1702 5.60716C13.2744 5.71135 13.3329 5.85266 13.3329 6C13.3329 6.14734 13.2744 6.28865 13.1702 6.39284C13.066 6.49702 12.9247 6.55555 12.7773 6.55555H8.3329C8.18556 6.55555 8.04425 6.49702 7.94006 6.39284C7.83587 6.28865 7.77734 6.14734 7.77734 6ZM8.3329 7.66666C8.18556 7.66666 8.04425 7.7252 7.94006 7.82938C7.83587 7.93357 7.77734 8.07488 7.77734 8.22222C7.77734 8.36956 7.83587 8.51087 7.94006 8.61506C8.04425 8.71924 8.18556 8.77778 8.3329 8.77778H12.7773C12.9247 8.77778 13.066 8.71924 13.1702 8.61506C13.2744 8.51087 13.3329 8.36956 13.3329 8.22222C13.3329 8.07488 13.2744 7.93357 13.1702 7.82938C13.066 7.7252 12.9247 7.66666 12.7773 7.66666H8.3329ZM7.77734 13.2222C7.77734 13.0749 7.83587 12.9336 7.94006 12.8294C8.04425 12.7252 8.18556 12.6667 8.3329 12.6667H12.7773C12.9247 12.6667 13.066 12.7252 13.1702 12.8294C13.2744 12.9336 13.3329 13.0749 13.3329 13.2222C13.3329 13.3696 13.2744 13.5109 13.1702 13.6151C13.066 13.7192 12.9247 13.7778 12.7773 13.7778H8.3329C8.18556 13.7778 8.04425 13.7192 7.94006 13.6151C7.83587 13.5109 7.77734 13.3696 7.77734 13.2222ZM8.3329 14.8889C8.18556 14.8889 8.04425 14.9474 7.94006 15.0516C7.83587 15.1558 7.77734 15.2971 7.77734 15.4444C7.77734 15.5918 7.83587 15.7331 7.94006 15.8373C8.04425 15.9415 8.18556 16 8.3329 16H12.7773C12.9247 16 13.066 15.9415 13.1702 15.8373C13.2744 15.7331 13.3329 15.5918 13.3329 15.4444C13.3329 15.2971 13.2744 15.1558 13.1702 15.0516C13.066 14.9474 12.9247 14.8889 12.7773 14.8889H8.3329Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.22266 12.6667C2.22266 12.5193 2.28119 12.378 2.38537 12.2738C2.48956 12.1696 2.63087 12.1111 2.77821 12.1111H5.55599C5.70333 12.1111 5.84464 12.1696 5.94883 12.2738C6.05301 12.378 6.11155 12.5193 6.11155 12.6667V15.4444C6.11155 15.5918 6.05301 15.7331 5.94883 15.8373C5.84464 15.9415 5.70333 16 5.55599 16H2.77821C2.63087 16 2.48956 15.9415 2.38537 15.8373C2.28119 15.7331 2.22266 15.5918 2.22266 15.4444V12.6667ZM3.33377 13.2222V14.8889H5.00043V13.2222H3.33377Z"
                    fill="black"
                  />
                  <path
                    d="M6.50433 6.39279C6.60553 6.28801 6.66153 6.14767 6.66026 6.00201C6.659 5.85634 6.60057 5.717 6.49756 5.614C6.39456 5.51099 6.25522 5.45257 6.10955 5.4513C5.96389 5.45003 5.82355 5.50603 5.71878 5.60723L3.88933 7.43667L3.171 6.71834C3.06622 6.61714 2.92589 6.56114 2.78022 6.56241C2.63456 6.56368 2.49522 6.6221 2.39221 6.72511C2.28921 6.82811 2.23078 6.96745 2.22951 7.11312C2.22825 7.25878 2.28424 7.39912 2.38544 7.5039L3.88933 9.00778L6.50433 6.39279Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.22222 0C1.63285 0 1.06762 0.234126 0.650874 0.650874C0.234126 1.06762 0 1.63285 0 2.22222V17.7778C0 18.3671 0.234126 18.9324 0.650874 19.3491C1.06762 19.7659 1.63285 20 2.22222 20H13.3333C13.9227 20 14.4879 19.7659 14.9047 19.3491C15.3214 18.9324 15.5556 18.3671 15.5556 17.7778V2.22222C15.5556 1.63285 15.3214 1.06762 14.9047 0.650874C14.4879 0.234126 13.9227 0 13.3333 0H2.22222ZM1.11111 2.22222C1.11111 1.92754 1.22817 1.64492 1.43655 1.43655C1.64492 1.22817 1.92754 1.11111 2.22222 1.11111H13.3333C13.628 1.11111 13.9106 1.22817 14.119 1.43655C14.3274 1.64492 14.4444 1.92754 14.4444 2.22222V17.7778C14.4444 18.0725 14.3274 18.3551 14.119 18.5635C13.9106 18.7718 13.628 18.8889 13.3333 18.8889H2.22222C1.92754 18.8889 1.64492 18.7718 1.43655 18.5635C1.22817 18.3551 1.11111 18.0725 1.11111 17.7778V2.22222ZM16.6667 5.55556C16.6667 5.11353 16.8423 4.6896 17.1548 4.37704C17.4674 4.06448 17.8913 3.88889 18.3333 3.88889C18.7754 3.88889 19.1993 4.06448 19.5118 4.37704C19.8244 4.6896 20 5.11353 20 5.55556V16.835L18.3333 19.335L16.6667 16.835V5.55556ZM18.3333 5C18.186 5 18.0447 5.05853 17.9405 5.16272C17.8363 5.26691 17.7778 5.40821 17.7778 5.55556V6.66667H18.8889V5.55556C18.8889 5.40821 18.8304 5.26691 18.7262 5.16272C18.622 5.05853 18.4807 5 18.3333 5ZM18.3333 17.3317L17.7778 16.4983V7.77778H18.8889V16.4983L18.3333 17.3317Z"
                    fill="black"
                  />
                </svg>

                <h1 className="text-slate-900 group-hover:text-white text-base font-medium">
                  Quiz
                </h1>
              </Link>

              <Link
                href="/"
                className="w-[250px] h-[50px] flex items-center gap-5  group pl-6 bg-white ring-slate-900/5   hover:bg-sky-500 hover:ring-sky-500"
              >
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.16667 15C1.70833 15 1.31583 14.8367 0.989168 14.51C0.662501 14.1833 0.499446 13.7911 0.500001 13.3333V1.66667C0.500001 1.20833 0.663335 0.815835 0.990001 0.489168C1.31667 0.162501 1.70889 -0.000554141 2.16667 1.41483e-06H8V1.66667H2.16667V13.3333H8V15H2.16667ZM11.3333 11.6667L10.1875 10.4583L12.3125 8.33333H5.5V6.66667H12.3125L10.1875 4.54167L11.3333 3.33334L15.5 7.5L11.3333 11.6667Z"
                    fill="#474450"
                  />
                </svg>

                <h1 className="text-slate-900 group-hover:text-white text-base font-medium">
                  Logout
                </h1>
              </Link>
            </div>
          </div>
          <div className="flex ">{children}</div>
        </aside>
      </body>
    </html>
  );
}
