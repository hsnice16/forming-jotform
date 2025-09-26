"use client";

import { useLayoutEffect, useState } from "react";

import { DesktopPage, MobilePage } from "@/components";
import { isMobileBrowser } from "@/utils";

export default function Page() {
  const [isOnMobile, setIsOnMobile] = useState(false);

  useLayoutEffect(() => {
    if (isMobileBrowser()) {
      setIsOnMobile(true);
    }
  }, []);

  if (isOnMobile) {
    return <MobilePage />;
  }

  return <DesktopPage />;
}
