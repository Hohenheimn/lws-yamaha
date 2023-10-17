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
        "1rem": "1rem",
        "1-2rem": "1.5rem",
        "2rem": "2rem",
        "3rem": "3rem",
        "4rem": "4rem",
        "5rem": "5rem",
      },
      colors: {
        primary: "#131313",
        "primary-2": "#0c0c0c",
        secondary: "#323232",
        "secondary-2": "#212121",
        tertiary: "#d52b1e",
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
