"use client";

import Image from "next/image";

import {
  Name,
  Intro,
  SingleChoice,
  DropdownInput,
  MultipleChoices,
} from "@/components/desktop";

import { Question, Steps } from "@/components/ui";
import { useSharedStates } from "@/contexts";
import { useHandleKeydown } from "@/hooks";

export function DesktopPage() {
  const { questionNum } = useSharedStates();
  const { now, prev } = questionNum;

  useHandleKeydown();

  return (
    <main className="flex h-screen w-screen overflow-hidden relative">
      {now === 0 ? null : (
        <Image
          alt="logo"
          width={90}
          height={90}
          src="/logo.png"
          className="hidden sm:block absolute top-14 left-26 animate-scale"
        />
      )}
      {prev === null && now === 0 ? <Intro /> : null}

      {[0, 2].includes(prev ?? -1) && [now - 1, now, now + 1].includes(1) ? (
        <>
          {now === 1 && prev !== 2 ? (
            <Question sectionClassName="!bg-transparent !h-[800px] !max-h-[800px] !w-[1200px] !max-w-[1200px] absolute left-1/2 top-1/2 -translate-1/2 pointer-events-none before:pointer-events-none before:absolute before:w-[300px] before:h-[200px] before:animate-scale-fade before:block before:bg-secondary-background">
              <span />
            </Question>
          ) : null}

          <Question.Box
            inView={now === 1}
            inViewMove={prev === 2 ? "left" : "up"}
            outView={[now - 1, now + 1].includes(1)}
            outViewMove={now - 1 === 1 ? "left" : "right"}
          >
            <Name />
          </Question.Box>
        </>
      ) : null}

      {[1, 3].includes(prev ?? 0) && [now - 1, now, now + 1].includes(2) ? (
        <Question.Box
          inView={now === 2}
          outView={[now - 1, now + 1].includes(2)}
          inViewMove={prev === 3 ? "left" : "right"}
          outViewMove={now - 1 === 2 ? "left" : "right"}
        >
          <SingleChoice />
        </Question.Box>
      ) : null}

      {[2, 4].includes(prev ?? 0) && [now - 1, now, now + 1].includes(3) && (
        <Question.Box
          inView={now === 3}
          outView={[now - 1, now + 1].includes(3)}
          inViewMove={prev === 4 ? "left" : "right"}
          outViewMove={now - 1 === 3 ? "left" : "right"}
        >
          <MultipleChoices />
        </Question.Box>
      )}

      {prev === 3 && [now - 1, now, now + 1].includes(4) ? (
        <Question.Box
          inView={now === 4}
          inViewMove={"right"}
          outView={[now - 1, now + 1].includes(4)}
          outViewMove={now - 1 === 4 ? "left" : "right"}
        >
          <DropdownInput />
        </Question.Box>
      ) : null}

      <Steps />
    </main>
  );
}
