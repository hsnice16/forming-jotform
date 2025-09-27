"use client";

import {
  Name,
  Intro,
  SingleChoice,
  DropdownInput,
  MultipleChoices,
} from "@/components/mobile";

import { MobileButtons, Question, Section } from "@/components/ui";
import { useSharedStates } from "@/contexts";
import { useMemo } from "react";

export function MobilePage() {
  const { questionNum } = useSharedStates();
  const { now, prev } = questionNum;

  const [showNextBtn, showPreviousBtn, showQuestionSteps, showSubmitBtn] =
    useMemo(() => {
      switch (questionNum.now) {
        case 1: {
          return [true, false, true, false];
        }

        case 2:
        case 3: {
          return [true, true, true, false];
        }

        case 4: {
          return [false, true, false, true];
        }

        default: {
          return [false, false, false, false];
        }
      }
    }, [questionNum.now]);

  return (
    <main className="h-dvh flex flex-col overflow-hidden">
      {prev === null && now === 0 ? (
        <Intro />
      ) : (
        <>
          <Section.Sub className="flex-1 relative">
            <Question.MobileBox
              questionNum={1}
              inView={now === 1}
              outView={now !== 1}
              inViewMove={prev === 2 ? "left" : ""}
              isAnimateScale={now === 1 && prev !== 2}
              outViewMove={now > 1 ? "left" : "right"}
            >
              <Name />
            </Question.MobileBox>

            <Question.MobileBox
              inView={now === 2}
              outView={now !== 2}
              isAnimateScale={now === 1 && prev !== 2}
              outViewMove={now > 2 ? "left" : "right"}
              inViewMove={prev === 3 ? "left" : "right"}
            >
              <SingleChoice />
            </Question.MobileBox>

            <Question.MobileBox
              inView={now === 3}
              outView={now !== 3}
              outViewMove={now > 3 ? "left" : "right"}
              inViewMove={prev === 4 ? "left" : "right"}
              isAnimateScale={
                (now === 1 && prev !== 2) || (now === 2 && prev !== 3)
              }
            >
              <MultipleChoices />
            </Question.MobileBox>

            <Question.MobileBox
              inView={now === 4}
              outView={now !== 4}
              inViewMove={"right"}
              isAnimateScale={
                (now === 1 && prev !== 2) ||
                (now === 2 && prev !== 3) ||
                (now === 3 && prev !== 4)
              }
              outViewMove={now > 4 ? "left" : "right"}
            >
              <DropdownInput />
            </Question.MobileBox>
          </Section.Sub>

          <MobileButtons
            showNextBtn={showNextBtn}
            showSubmitBtn={showSubmitBtn}
            showPreviousBtn={showPreviousBtn}
            showQuestionSteps={showQuestionSteps}
          />
        </>
      )}
    </main>
  );
}
