import stylex from "@stylexjs/stylex";
import Sidebar from "../components/Sidebar/index";

const styles = stylex.create({
  main: {
    height: "100%",
    width: "100vw",
  },
  myHeading: {
    color: "red",
    fontSize: 50,
    fontWeight: 700,
  },
  myPara: {
    color: "white",
    fontSize: 20,
  },
});

export default function Home() {
  return (
    <main {...stylex.props(styles.main)}>
      <Sidebar />
    </main>
  );
}
