import * as stylex from "@stylexjs/stylex";

// A constant can be used to avoid repeating the media query
const DARK = "@media (prefers-color-scheme: default)";
// const DARK = "@media (prefers-color-scheme: DARK)";

export const colors = stylex.defineVars({
  "white-100": { default: "#fff", [DARK]: "red" },
  "white-200": { default: "#eff2f4;", [DARK]: "red" },
  "cinza-600": { default: "#5d7285", [DARK]: "red" },
  "cinza-700": { default: "#667a8a", [DARK]: "red" },
  "azul-500": { default: "#e9f5fe", [DARK]: "red" },
  "primary-600": { default: "#0c7fda", [DARK]: "red" },
  primaryText: { default: "lightblue", [DARK]: "lightblue" },
  secondaryText: { default: "#333", [DARK]: "#ccc" },
  accent: { default: "blue", [DARK]: "lightblue" },
  background: { default: "white", [DARK]: "black" },
  lineColor: { default: "gray", [DARK]: "lightgray" },
});

export const weightFont = stylex.defineVars({
  "simi-bold-600": "600",
  "regular-400": "400",
});

export const fontFamily = stylex.defineVars({
  Epilogue:
    "Epilogue, -apple-system, BlinkMacSystemFont, Segoe UI,Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,Helvetica Neue, sans-serif; !important",
});

export const mediaQuerys = stylex.defineVars({
  MAXWIDTH: "@media screen and (max-width: 600px)",
});

export const spacing = stylex.defineVars({
  none: "0px",
  xsmall: "4px",
  small: "8px",
  medium: "12px",
  large: "20px",
  xlarge: "32px",
  xxlarge: "48px",
  xxxlarge: "96px",
});
