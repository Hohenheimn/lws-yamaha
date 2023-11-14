import React from "react";
import { Montserrat } from "next/font/google";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import "@/styles/globals.scss";
import QueryProvider from "./_components/QueryProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={montserrat.className}>
      <QueryProvider>
        <body className="bg-[#131313]">
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
        </body>
      </QueryProvider>
    </html>
  );
};

export default RootLayout;
