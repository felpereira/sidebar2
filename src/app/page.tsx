import stylex from "@stylexjs/stylex";
import Sidebar from "../components/Sidebar/index";

const s = stylex.create({
  main: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    <main>
      <Sidebar />
    </main>
  );
}
