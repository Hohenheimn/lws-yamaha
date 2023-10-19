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
        "cs-sm": "1rem",
        "cs-md": "1.5rem",
        "cs-lg": "2rem",
        "cs-xl": "3rem",
        "cs-2xl": "4rem",
        "cs-3xl": "5rem",
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
      },
      fontFamily: {
        "montserrat-regular": "montserrat-regular",
        "montserrat-medium": "montserrat-medium",
        "montserrat-bold": "montserrat-bold",
        "montserrat-extrabold": "montserrat-extrabold",
      },
    },
  },
  plugins: [],
};
export default config;
