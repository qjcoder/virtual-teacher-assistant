import { ButtonBlue, ButtonWhite, QuizCompletionCart } from "@/components";

const QuizStart = () => {
  return (
    <div>
      <main className="min-h-screen bg-[#F9F9F9] w-[1300px] ">
        <QuizCompletionCart />
        <div className="rounded-2xl pl-5">
          <h1 className="text-[#202020] font-bold text-[34px]">Quiz</h1>
          <p className="text-[18px] font-normal text-[#A5A5A5]">
            Lorem ipsum dolor sit amet
          </p>

          <div className=" pt-6 flex">
            <div className="flex flex-col pl-16 pt-10 bg-white rounded-xl gap-20 shadow-xl p-4 w-[1102px] h-[794px]">
              <div className="flex justify-center">
                <div className="flex gap-3 ">
                  <div className=" flex flex-col  px-5   w-[293px] h-[93px] bg-white rounded-2xl shadow-md  ">
                    <h1 className="text-sm font-medium mb-3">Quiz Time</h1>
                    <div className="flex gap-4 items-center">
                      <div className="flex items-center justify-between p-3 w-[114px] h-[40px]  bg-white rounded-lg drop-shadow-2xl shadow-md font-medium text-base text-[#363942]">
                        <h1>02 : 00</h1>
                        <h2>min</h2>
                      </div>
                      <h1 className="text-base font-medium">Left</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-12">
                <div className="flex justify-between pr-52 text-[25px] font-extrabold  ">
                  <h1>(1) Artificial Intelligence is about_____.</h1>
                  <h1>Count: 1/10</h1>
                </div>
                <div className="text-2xl font-extrabold text-[#2E3338]">
                  Options:
                  <div className="flex mt-6 items-center gap-6">
                    <input type="checkbox" className="h-[25px] w-[25px]" />
                    <p className="text-xl font-medium">
                      (A) Playing a game on Computer
                    </p>
                  </div>
                  <div className="flex mt-6 items-center gap-6">
                    <input type="checkbox" className="h-[25px] w-[25px]" />
                    <p className="text-xl font-medium">
                      (B) Making a machine Intelligent
                    </p>
                  </div>
                  <div className="flex mt-6 items-center gap-6">
                    <input type="checkbox" className="h-[25px] w-[25px]" />
                    <p className="text-xl font-medium">
                      (C) Programming on Machine with your Own Intelligence
                    </p>
                  </div>
                  <div className="flex mt-6 items-center gap-6">
                    <input type="checkbox" className="h-[25px] w-[25px]" />
                    <p className="text-xl font-medium">
                      (D) Putting your intelligence in Machine
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex pl-10 pb-10 gap-6 justify-end pr-52">
                <ButtonBlue
                  text="Next"
                  className="text-base font-bold  text-center items-center justify-center"
                  borderRadius="6px"
                  height="42px"
                  width="128px"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuizStart;
