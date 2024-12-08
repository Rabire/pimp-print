import { Font } from "@react-pdf/renderer";
import { clsx, type ClassValue } from "clsx";
import { createTw } from "react-pdf-tailwind";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const COLOR = {
  primary: "#6366F1",
  secondary: "#F43F5E",
  light: "#fff",
  dark: "#334155",
  card: "#f2f4f4",
};

export const tw = (...inputs: ClassValue[]) =>
  createTw({
    theme: {
      fontFamily: { inter: ["Inter"] },

      extend: {
        fontSize: {
          xs: "6px", // correspond à environ 4.5pt
          sm: "8px", // correspond à environ 6pt
          base: "10px", // correspond à environ 7.5pt
          lg: "12px", // correspond à environ 9pt
          xl: "14px", // correspond à environ 10.5pt
          "2xl": "16px", // correspond à environ 12pt
          "3xl": "20px", // correspond à environ 15pt
          "4xl": "24px", // correspond à environ 18pt
          "5xl": "28px", // correspond à environ 21pt
          "6xl": "32px", // correspond à environ 24pt
        },

        colors: {
          // TODO: replace by cmjn
          primary: COLOR.primary,
          secondary: COLOR.secondary,
          light: COLOR.light,
          dark: COLOR.dark,
          card: COLOR.card,
        },
      },
    },
  })(clsx(inputs));

Font.register({
  family: "Inter",
  fonts: [
    {
      fontWeight: 800, // ultra-bold
      src: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyYAZ9hjp-Ek-_EeA.woff",
    },
    {
      fontWeight: 600, // semi-bold
      src: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hjp-Ek-_EeA.woff",
    },
    {
      fontWeight: 400, // normal
      src: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff",
    },
  ],
});
