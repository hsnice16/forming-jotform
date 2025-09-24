import type { Metadata } from "next";
import "./globals.css";

import { QuestionsProvider, SharedStatesProvider } from "@/contexts";

export const metadata: Metadata = {
  title: "Jotform",
  description: "Jotform built to share with others.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SharedStatesProvider>
          <QuestionsProvider>{children}</QuestionsProvider>
        </SharedStatesProvider>
      </body>
    </html>
  );
}
