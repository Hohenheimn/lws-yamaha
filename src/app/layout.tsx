import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import "@/styles/globals.scss";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="bg-[#131313]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
