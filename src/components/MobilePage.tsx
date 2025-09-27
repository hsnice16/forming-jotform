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
            {[1, 2].includes(now) ? (
              <Question.MobileBox
                inView={now === 1}
                inViewMove={prev === 2 ? "left" : ""}
                isAnimateScale={now === 1 && prev !== 2}
                outView={[now - 1, now + 1].includes(1)}
                outViewMove={now - 1 === 1 ? "left" : "right"}
              >
                <Name />
              </Question.MobileBox>
            ) : null}

            {[1, 2, 3].includes(now) ? (
              <Question.MobileBox
                inView={now === 2}
                outView={[now - 1, now + 1].includes(2)}
                inViewMove={prev === 3 ? "left" : "right"}
                outViewMove={now - 1 === 2 ? "left" : "right"}
              >
                <SingleChoice />
              </Question.MobileBox>
            ) : null}

            {[2, 3, 4].includes(now) ? (
              <Question.MobileBox
                inView={now === 3}
                outView={[now - 1, now + 1].includes(3)}
                inViewMove={prev === 4 ? "left" : "right"}
                outViewMove={now - 1 === 3 ? "left" : "right"}
              >
                <MultipleChoices />
              </Question.MobileBox>
            ) : null}

            {[3, 4].includes(now) ? (
              <Question.MobileBox
                inView={now === 4}
                inViewMove={"right"}
                outView={[now - 1, now + 1].includes(4)}
                outViewMove={now - 1 === 4 ? "left" : "right"}
              >
                <DropdownInput />
              </Question.MobileBox>
            ) : null}
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
