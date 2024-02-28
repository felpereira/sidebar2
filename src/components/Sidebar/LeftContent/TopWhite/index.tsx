import stylex from "@stylexjs/stylex";
import { colors } from "../../../../tokens.stylex";

const styles = stylex.create({
  whiteBoard: {
    width: "100%",
    height: 150,
    backgroundColor: colors["white-100"],
  },
});

const TopWhite = () => {
  return (
    <div {...stylex.props(styles.whiteBoard)}>
      <div
        style={{
          display: "inline-flex",
          paddingTop: "10px",
          paddingRight: "10px",
          width: "100%",
          justifyContent: "flex-end",
        }}
      >
        {/* <Logo width={50} height={50} onClick={() => setExibir(!exibir)} /> */}
      </div>
    </div>
  );
};

export default TopWhite;
