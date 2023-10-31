import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "cs-xs": ".9rem",
        "cs-sm": "1.05rem",
        "cs-md": "1.5rem",
        "cs-lg": "1.9rem",
        "cs-xl": "2.5rem",
        "cs-2xl": "3.5rem",
        "cs-3xl": "4rem",
      },
      colors: {
        primary: "#131313",
        "primary-2": "#0c0c0c",
        secondary: "#323232",
        "secondary-2": "#212121",
        " tertiary-0": "#d52b1e",
        tertiary: "#d52b1e",
        "hover-tertiary": "#d04d43",
        quarternary: "#2f58cd",
        "hover-quarternary": "#4d77ea",
      },
      fontFamily: {
        "montserrat-regular": "montserrat-regular",
        "montserrat-medium": "montserrat-medium",
        "montserrat-bold": "montserrat-bold",
        "montserrat-extrabold": "montserrat-extrabold",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
export default config;
