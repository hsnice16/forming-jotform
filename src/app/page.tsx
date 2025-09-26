"use client";

import { DesktopPage, MobilePage } from "@/components";
import { isMobileBrowser } from "@/utils";

export default function Page() {
  if (isMobileBrowser()) {
    return <MobilePage />;
  }

  return <DesktopPage />;
}
