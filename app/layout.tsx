import "@/globals.css";
import { Metadata } from "next"; 

export const metadata: Metadata = {
  title: "Next.js 사이트",
  description: "Next.js로 만든 웹 사이트입니다.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( 
      <html lang="en">
        <body>{children}</body>
      </html> 
  );
}
