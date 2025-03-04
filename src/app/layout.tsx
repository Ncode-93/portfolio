import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import LayoutTemplate from "./layout-template";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Nimish Bhardwaj",
  description: "Created with Next.js, Tailwind CSS, and TypeScript",
  icons: {
    icon: "/Images/upstream_13.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={spaceMono.variable}>
      <body>
        <LayoutTemplate>
          {children}
        </LayoutTemplate>
      </body>
    </html>
  );
}