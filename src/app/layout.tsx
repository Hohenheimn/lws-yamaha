import React from "react";
import { Montserrat } from "next/font/google";

import QueryProvider from "@/components/QueryProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

import "@/styles/globals.scss";

import "@/styles/globals.scss";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="bg-[#131313]">
        <QueryProvider>
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
        </QueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
