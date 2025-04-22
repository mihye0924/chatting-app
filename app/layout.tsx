import "@/assets/globals.css";
import { Metadata } from "next";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "talk",
  description: "채팅 웹 입니다",
};
const pretendard = localFont({
  src: "./assets/fonts/PretendardVariable.woff",
  display: "swap",
  weight: "100 200 300 400 500 600 700 800 900",
  variable: "--font-pretendard",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={`${pretendard.variable}`}>
      <body>{children}</body>
    </html>
  );
}
