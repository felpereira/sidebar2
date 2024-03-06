"use client";
import stylex from "@stylexjs/stylex";
import { ReactNode } from "react";

const styles = stylex.create({
  brandNavList: {
    marginTop: 30,
    marginLeft: 25,
  },
});

interface BrandNavListProps {
  children: ReactNode;
}

export default function BrandNavList({
  children,
}: Readonly<BrandNavListProps>) {
  return (
    <div {...stylex.props(styles.brandNavList)}>
      {children}
      {/* <NavLogo Icon={LogotipoPrincipal} texto={"Appli"} />
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
      <NavBottom /> */}
    </div>
  );
}
