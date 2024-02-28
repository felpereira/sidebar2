import stylex from "@stylexjs/stylex";
import { weightFont } from "../../../../../tokens.stylex";
const MAXWIDTH = "@media screen and (max-width: 600px)";
const styles = stylex.create({
  brand: {
    display: "flex",
    alignItems: "center",
    marginBottom: 50,
    paddingLeft: { default: "initial", [MAXWIDTH]: 5 },
  },
  brandTitle: {
    fontWeight: weightFont["simi-bold-600"],
    fontSize: 24,
    letterSpacing: 0.5,
    marginLeft: 15,
    display: { default: "initial", [MAXWIDTH]: "none" },
  },
});

interface NavLogoProps {
  texto: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export default function NavLogo({ texto, Icon }: Readonly<NavLogoProps>) {
  return (
    <div {...stylex.props(styles.brand)}>
      <Icon height={40} width={40} />
      <div {...stylex.props(styles.brandTitle)}>{texto}</div>
    </div>
  );
}
