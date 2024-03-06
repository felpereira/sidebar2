"use client";
import stylex from "@stylexjs/stylex";

import { colors, weightFont, fontFamily } from "../../../../../tokens.stylex";

const MAX_WIDTH_MEDIA_QUERY = "@media screen and (max-width: 600px)";

const styles = stylex.create({
  navButtonContainer: {
    display: "flex",
    alignItems: "center",
    fill: colors["cinza-600"],
    color: colors["cinza-600"],
    height: 40,
    width: { default: 290, [MAX_WIDTH_MEDIA_QUERY]: "initial" },
    marginBottom: 10,
    backgroundColor: "transparent",
    outline: "none",
    cursor: "pointer",
    border: "none",
    padding: {
      default: "0px 0px 0px 10px",
      [MAX_WIDTH_MEDIA_QUERY]: "0px 10px 0px 10px",
    },
    fontFamily: fontFamily.Epilogue,
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: weightFont["regular-400"],
    paddingTop: 4,
    marginLeft: 10,
    display: { default: "initial", [MAX_WIDTH_MEDIA_QUERY]: "none" },
  },
  selectedNavButton: {
    fill: colors["primary-600"],
    backgroundColor: colors["azul-500"],
    borderRadius: 5,
    fontWeight: weightFont["simi-bold-600"],
    color: colors["primary-600"],
    transition: "background-color 0.3s ease-in-out",
  },
});

interface NavButtonProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
  selectedMenu: string;
  onClick: (text: string) => void;
}

const NavButton: React.FC<NavButtonProps> = ({
  Icon,
  text,
  selectedMenu,
  onClick,
}) => {
  const isSelected = selectedMenu === text;

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick(text);
  };

  return (
    <button
      {...stylex.props(
        styles.navButtonContainer,
        isSelected && styles.selectedNavButton
      )}
      onClick={(e) => handleButtonClick(e)}
    >
      <Icon width={30} height={30} />
      <div
        {...stylex.props(
          styles.navButtonText,
          isSelected && styles.selectedNavButton
        )}
      >
        {text}
      </div>
    </button>
  );
};

export default NavButton;
