import Image from "next/image";

export function ProblemVector() {
  return (
    <div className="h-[10rem] w-[38rem] max-w-full xl:h-[11.90594rem] xl:w-[44.42938rem]">
      <Image
        src="/assets/problem/problem-vector.svg"
        alt="Problem Illustration"
        width={711}
        height={191}
        className="h-full w-full object-contain"
        priority
      />
    </div>
  );
}
