"use client";

import Image from "next/image";

import { Intro, MultipleChoices, Name, SingleChoice } from "@/components";
import { useSharedStates } from "@/contexts";
import { useHandleKeydown } from "@/hooks";

export default function Home() {
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
          className="hidden sm:block absolute top-14 left-26"
        />
      )}

      {prev === null && now === 0 ? <Intro /> : null}

      {[0, 2].includes(prev ?? -1) && [now - 1, now, now + 1].includes(1) ? (
        <Name />
      ) : null}

      {[1, 3].includes(prev ?? 0) && [now - 1, now, now + 1].includes(2) ? (
        <SingleChoice />
      ) : null}

      {prev === 2 && [now - 1, now, now + 1].includes(3) ? (
        <MultipleChoices />
      ) : null}
    </main>
  );
}
