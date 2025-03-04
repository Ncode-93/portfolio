"use client";
import Image from "next/image";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function LayoutTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-[#94b0b9] dark:bg-gray-900 z-50">
          <Image 
            src="/Images/giphy.gif" 
            alt="Loading" 
            width={100}
            height={100}
            unoptimized
            priority={true}
            className="w-100 h-100"
          />
        </div>
      ) : (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      )}
    </>
  );
}