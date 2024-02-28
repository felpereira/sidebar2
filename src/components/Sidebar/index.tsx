import stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const styles = stylex.create({
  sidebar: {
    minHeight: "100vh",
    minWidth: 248,
    display: "flex",
    overflow: "hidden",
    backgroundColor: colors["white-100"],
  },
});

export default function Sidebar() {
  return (
    <div {...stylex.props(styles.sidebar)}>
      <RightContent />
      <LeftContent />
    </div>
  );
}
