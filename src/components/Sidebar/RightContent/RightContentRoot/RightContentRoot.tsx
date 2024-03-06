import stylex from "@stylexjs/stylex";
import React, { ReactNode } from "react";
import { styles } from "./RightContentRoot.Stylex";

interface RightContentRootProps {
  children: ReactNode;
}

export default function RightContentRoot({
  children,
}: Readonly<RightContentRootProps>) {
  return (
    <div {...stylex.props(styles.rightContent)}>
      {children}
      {/* <BrandNavList /> */}
    </div>
  );
}
