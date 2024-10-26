// import { JetBrains_Mono as FontMono, Inter as FontSans } from "next/font/google"
import { JetBrains_Mono as FontMono } from "next/font/google";
import localFont from "next/font/local";
// import { GeistMono } from "geist/font/mono"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// })
export const fontSans = geistSans;

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
