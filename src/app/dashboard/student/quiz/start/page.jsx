import { ButtonBlue, ButtonWhite, QuizCompletionCart } from "@/components";

const QuizStart = () => {
  return (
    <div>
      <main className="min-h-screen bg-[#F9F9F9] w-screen ">
        <div className="rounded-2xl pl-5">
          <h1 className="text-[#202020] font-bold text-[34px]">Quiz</h1>
          <p className="text-[18px] font-normal text-[#A5A5A5]">
            Lorem ipsum dolor sit amet
          </p>

          <div className=" flex">
            <div className="min-h-screen flex flex-col pl-20 pr-40 pt-10 gap-5 bg-white rounded-xl  shadow-xl p-4 ">
              <div className="flex justify-center">
                <div className="flex gap-3 ">
                  <div className=" flex flex-col  px-5  w-[293px] h-[93px] bg-white rounded-2xl shadow-md  ">
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
              <div className="flex flex-col gap-10  ">
                <div className="flex justify-between text-[25px] font-extrabold gap-32 ">
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
              <div className="flex pl-10  justify-end mb-3">
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
