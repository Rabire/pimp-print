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
      // fontSize: {
      //   sm: "6px",
      //   base: "8px",
      //   lg: "10px",
      //   xl: "12px",
      //   "2xl": "14px",
      // },
      extend: {
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
