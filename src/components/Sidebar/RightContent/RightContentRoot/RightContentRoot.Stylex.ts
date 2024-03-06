import stylex from "@stylexjs/stylex";
import { colors } from "../../../../tokens.stylex";

const MAXWIDTH = "@media screen and (max-width: 600px)";

export const styles = stylex.create({
  rightContent: {
    minWidth: { default: 340, [MAXWIDTH]: "initial" },
    minHeight: "100%",
    width: { default: "initial", [MAXWIDTH]: 100 },
    backgroundColor: colors["white-100"],
    overflow: "hidden",
    filter: "drop-shadow(0px 4px 40px rgba(0, 0, 0, 0.04));",
    zIndex: 2,
    transition: "margin-left 0.7s linear",
    position: { default: "initial", [MAXWIDTH]: "absolute" },
    marginLeft: { default: "initial", [MAXWIDTH]: "-55vh" },
  },
});
