import Image from "next/image";
import { TOTAL_QUESTIONS } from "@/constants";

export function IntroTextContent() {
  return (
    <>
      <Image src="/logo.png" alt="logo" width={80} height={90} />

      <h1 className="text-[26px] sm:text-3xl font-bold text-text sm:mb-1">
        Welcome
      </h1>

      <p className="text-base sm:text-lg text-light-text text-center">
        Hi there, please fill out and submit this form.
      </p>

      <p className="text-xs sm:text-base text-light-text opacity-75">
        {TOTAL_QUESTIONS - 1} Questions
      </p>
    </>
  );
}
