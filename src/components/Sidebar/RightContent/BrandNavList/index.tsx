"use client";
import stylex from "@stylexjs/stylex";
import NavBottom from "./NavBottom";

import HomeIcon from "img/Home";
import EditSquare from "img/EditSquare";
import LogotipoPrincipal from "img/LogotipoPrincipal";
import NavButton from "./NavButton";
import { useState } from "react";
import NavLogo from "./NavLogo";

const styles = stylex.create({
  brandNavList: {
    marginTop: 30,
    marginLeft: 25,
  },
});

export default function BrandNavList() {
  const [menuSelecionado, setMenuSelecionado] = useState("Dashboard");
  const handleSelect = (menu: string) => {
    setMenuSelecionado(menu);
  };

  return (
    <div {...stylex.props(styles.brandNavList)}>
      <NavLogo Icon={LogotipoPrincipal} texto={"Appli"} />
      <NavButton
        Icon={HomeIcon}
        text="Dashboard"
        onClick={handleSelect}
        selectedMenu={menuSelecionado}
      />
      <NavButton
        Icon={EditSquare}
        text="Posts"
        onClick={handleSelect}
        selectedMenu={menuSelecionado}
      />
      <NavBottom />
    </div>
  );
}
