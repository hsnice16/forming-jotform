import { headers } from "next/headers";

import { DesktopPage, MobilePage } from "@/components";
import { isMobileBrowser } from "@/utils";

export default async function Page() {
  let userAgent = (await headers()).get("user-agent") ?? "";
  if (typeof window !== "undefined") {
    userAgent = window.navigator.userAgent;
  }

  if (isMobileBrowser(userAgent)) {
    return <MobilePage />;
  }
  return <DesktopPage />;
}
