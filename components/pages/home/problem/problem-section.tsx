import { ProblemVector } from "./problem-vector";
import { ProblemRotator } from "./problem-rotator";

export function ProblemSection() {
  return (
    <section className="bg-[#FAFAF8] px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto w-full max-w-[1480px] overflow-hidden rounded-[2rem] bg-[#0F0F0F] px-6 py-14 sm:px-10 lg:px-16 xl:px-24 2xl:px-[12.5rem] 2xl:py-[5.0625rem]">
        <div className="mx-auto grid w-full max-w-[90rem] grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,44.4375rem)_minmax(0,40.5rem)] lg:gap-10 xl:justify-between">
          <div className="flex min-w-0 flex-col items-start gap-[1.625rem]">
            <ProblemVector />

            <div className="flex w-full max-w-[37.125rem] flex-col items-start gap-5">
              <h2 className="text-[2.5rem] leading-none font-semibold text-[#FAFAF8] capitalize sm:text-[3rem] xl:text-[3.375rem]">
                Let’s Get Rid Of
                <br />
                <span className="font-serif text-[2.5rem] leading-[1.2] font-normal text-[#00E892] lowercase italic sm:text-[3rem] xl:text-[3.375rem]">
                  things like
                </span>
              </h2>

              <p className="max-w-[21.5625rem] text-[1.125rem] leading-normal font-normal text-[#B7B7B7] sm:text-[1.35rem] xl:text-[1.5rem]">
                Because users notice more than they say
              </p>
            </div>
          </div>

          <div className="flex min-w-0 justify-center lg:justify-end">
            <ProblemRotator />
          </div>
        </div>
      </div>
    </section>
  );
}
