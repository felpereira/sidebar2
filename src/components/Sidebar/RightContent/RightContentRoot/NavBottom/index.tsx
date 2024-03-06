import stylex from "@stylexjs/stylex";

import Moon from "img/Moon";
import Toogle from "@/img/Toggle";
import Logout from "img/Logout";
import { colors, weightFont, fontFamily } from "../../../../../tokens.stylex";

const MAXWIDTH = "@media screen and (max-width: 600px)";

const styles = stylex.create({
  navBottom: {
    marginTop: 0,
    height: 125,
    width: 290,
  },
  changeDarkMode: {
    height: "50%",
    display: "flex",
    justifyContent: { default: "space-around", [MAXWIDTH]: "initial" },
    paddingLeft: { default: "initial", [MAXWIDTH]: 6 },
    alignItems: "center",
    fill: colors["cinza-600"],
  },
  textNavBotton: {
    display: { default: "flex", [MAXWIDTH]: "none" },
    justifyContent: "space-between",
    alignItems: "center",
    width: "60%",
  },
  navBottomMinimaze: {
    display: { default: "none", [MAXWIDTH]: "flex" },
    paddingLeft: { default: "unset", [MAXWIDTH]: 10 },
  },
  buttonLogout: {
    display: { default: "flex", [MAXWIDTH]: "none" },
    alignItems: "center",
    height: 40,
    width: 290,
    marginBottom: 10,
    backgroundColor: colors["cinza-700"],
    outline: "none",
    cursor: "pointer",
    border: "none",
    paddingLeft: 10,
    borderRadius: 5,
    fill: colors["white-100"],
  },
  buttonText: {
    fontSize: 16,
    paddingTop: 4,
    marginLeft: 10,
    fontWeight: weightFont["simi-bold-600"],
    color: colors["azul-500"],
    fontFamily: fontFamily.Epilogue,
  },
});

export default function NavBottom() {
  return (
    <div {...stylex.props(styles.navBottom)}>
      <div {...stylex.props(styles.changeDarkMode)}>
        <Moon />
        <div {...stylex.props(styles.textNavBotton)}>
          Dark Mode
          <Toogle />
        </div>
      </div>
      <div {...stylex.props(styles.navBottomMinimaze)}>
        <Logout />
      </div>
      <button {...stylex.props(styles.buttonLogout)}>
        <Logout />
        <div {...stylex.props(styles.buttonText)}>Logout</div>
      </button>
    </div>
  );
}
