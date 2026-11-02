import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "xeerpe/animations.css";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nicola Centonze",
  description: "Nicola Centonze's portfolio and personal website.",
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body>{children}</body>
    </html>
  );
}
