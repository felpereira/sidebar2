import React, { FC, SVGProps } from "react";

const LogoutIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19.155 3.333c4.137 0 7.512 3.317 7.512 7.4v7.983H16.492c-.728 0-1.305.567-1.305 1.283 0 .7.577 1.283 1.306 1.283h10.174v7.967c0 4.083-3.375 7.417-7.546 7.417h-8.258c-4.156.001-7.53-3.316-7.53-7.399V10.75c0-4.1 3.392-7.417 7.546-7.417zM30.9 14.25a1.273 1.273 0 0 1 1.817-.017l4.867 4.85c.25.25.383.567.383.917 0 .333-.133.667-.383.9l-4.867 4.85c-.25.25-.583.383-.9.383-.333 0-.667-.133-.917-.383-.5-.5-.5-1.317 0-1.817l2.667-2.65h-6.9v-2.567h6.9l-2.667-2.65c-.5-.5-.5-1.317 0-1.817" />
  </svg>
);
export default LogoutIcon;