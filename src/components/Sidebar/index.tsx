"use client";
import stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";
import LeftContent from "./LeftContent";
import { RightContent } from "./RightContent/index";

import LogotipoPrincipal from "img/LogotipoPrincipal";
import HomeIcon from "img/Home";
import EditSquareIcon from "img/EditSquare";
import { useState } from "react";

const styles = stylex.create({
  sidebar: {
    minHeight: "100vh",
    minWidth: 247,
    display: "flex",
    overflow: "hidden",
    backgroundColor: colors["white-100"],
  },
});

export default function Sidebar() {
  const [menuSelecionado, setMenuSelecionado] = useState("Dashboard");
  const handleSelect = (menu: string) => {
    setMenuSelecionado(menu);
  };
  return (
    <div {...stylex.props(styles.sidebar)}>
      <RightContent.Root>
        <RightContent.BrandNavList>
          <RightContent.NavLogo texto="Appli" Icon={LogotipoPrincipal} />
          <RightContent.NavButton
            Icon={HomeIcon}
            text="Dashboard"
            onClick={handleSelect}
            selectedMenu={menuSelecionado}
          />
          <RightContent.NavButton
            Icon={EditSquareIcon}
            text="Posts"
            onClick={handleSelect}
            selectedMenu={menuSelecionado}
          />
          <RightContent.NavBotton />
        </RightContent.BrandNavList>
      </RightContent.Root>
      <LeftContent />
    </div>
  );
}
