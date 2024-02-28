import stylex from "@stylexjs/stylex";
import TopWhite from "./TopWhite";
import { colors } from "../../../tokens.stylex";
const styles = stylex.create({
  leftContent: {
    flexGrow: 1,
    overflow: "hidden",
    zIndex: 1,
    background: colors["white-200"],
  },
});

export default function LeftContent() {
  return (
    <div {...stylex.props(styles.leftContent)}>
      <TopWhite />
      LeftContent
    </div>
  );
}
