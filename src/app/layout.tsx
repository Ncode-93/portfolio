import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import LayoutTemplate from "./layout-template";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

// export const metadata: Metadata = {
//   title: "Nimish Bhardwaj",
//   description: "Created with Next.js, Tailwind CSS, and TypeScript",
//   icons: {
//     icon: "/Images/upstream_13.ico"
//   }
// };

export const metadata: Metadata = {
  title: "Nimish Bhardwaj | Full-Stack Web Developer Portfolio",
  description:
    "Official portfolio of Nimish Bhardwaj – Full-Stack Developer specializing in Next.js, TypeScript, and Tailwind CSS. Explore projects, resume, and contact details.",
  keywords: [
    "Nimish Bhardwaj",
    "Nimish Bhardwaj Portfolio",
    "Nimish Bhardwaj Developer",
    "Nimish Bhardwaj Website",
    "Full-Stack Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Tailwind CSS",
    "Web Developer Portfolio",
    "Nimish Bhardwaj nimishwritescode.tech"
  ],
  authors: [{ name: "Nimish Bhardwaj", url: "https://www.nimishwritescode.tech" }],
  openGraph: {
    title: "Nimish Bhardwaj | Full-Stack Web Developer Portfolio",
    description:
      "Explore Nimish's portfolio – modern web applications built with Next.js, TypeScript, and Tailwind CSS. Discover skills, projects, and contact info.",
    url: "https://www.nimishwritescode.tech",
    siteName: "Nimish Bhardwaj Portfolio",
    images: [
      {
        url: "/Images/preview.png",
        width: 1200,
        height: 630,
        alt: "Nimish Bhardwaj Portfolio Preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nimish Bhardwaj | Full-Stack Web Developer Portfolio",
    description:
      "Portfolio of Nimish Bhardwaj – showcasing projects, skills, and experience in Next.js, TypeScript, and Tailwind CSS.",
    images: ["/Images/preview.png"]
  },
  icons: {
    icon: "/Images/upstream_13.ico"
  },
  metadataBase: new URL("https://www.nimishwritescode.tech")
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
