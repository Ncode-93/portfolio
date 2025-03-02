"use client";

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
          <img 
            src="https://media.giphy.com/media/PkoBC2GlkLJ5yFIWtf/giphy.gif?cid=790b7611ku7ky4nxcyroewx87eukuh84ilrru83wgvgqn9iw&ep=v1_gifs_search&rid=giphy.gif&ct=g" 
            alt="Loading" 
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