import React, { ComponentProps } from "react";
import { Montserrat } from "next/font/google";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import "@/styles/globals.scss";

import api from "@/utils/api";

import QueryProvider from "./_components/QueryProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  let menu: ComponentProps<typeof Header>["menu"] = [];
  await api
    .get("/menu?subCategoryId=3")
    .then((response) => {
      menu = response.data.data;
    })
    .catch((error) => {
      console.error("Error fetching Header Menu: ", error);
    });

  return (
    <html lang="en" className={montserrat.className}>
      <body className="bg-[#131313]">
        <QueryProvider>
          <Header menu={menu} />
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
