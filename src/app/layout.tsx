import React from "react";
import "@/styles/globals.scss";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="bg-background">{children}</body>
    </html>
  );
};

export default RootLayout;
