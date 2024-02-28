import React, { FC, SVGProps } from "react";

const ToogleIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={40}
    height={14.545}
    viewBox="0 0 40 14.545"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#E9F5FE"
      d="M7.273 0h25.454A7.273 7.273 0 0 1 40 7.273a7.273 7.273 0 0 1-7.273 7.272H7.273A7.273 7.273 0 0 1 0 7.273 7.273 7.273 0 0 1 7.273 0"
    />
    <path
      fill="#2196F3"
      d="M12.121 7.273a4.85 4.85 0 0 1-4.848 4.848 4.85 4.85 0 0 1-4.849-4.848 4.848 4.848 0 0 1 9.697 0"
    />
    <path
      d="M28.551 10.358q-.764 0-1.395-.355a2.7 2.7 0 0 1-1.001-1.001q-.362-.645-.362-1.45t.362-1.442a2.6 2.6 0 0 1 1.001-1.001 2.75 2.75 0 0 1 1.395-.362q.772 0 1.402.362a2.6 2.6 0 0 1 .993.993q.362.639.362 1.45 0 .812-.362 1.45a2.63 2.63 0 0 1-.993 1.001q-.63.355-1.402.355m0-.622q.575 0 1.032-.268.465-.268.725-.764.268-.497.268-1.15 0-.661-.268-1.15a1.9 1.9 0 0 0-.717-.764q-.458-.268-1.04-.268t-1.04.268a1.9 1.9 0 0 0-.725.764q-.26.488-.26 1.15 0 .655.26 1.15.268.496.725.764a2.06 2.06 0 0 0 1.04.268m8.179.567h-.717L33.129 5.93v4.373h-.717V4.804h.717l2.884 4.365V4.804h.717z"
      fill="#333F49"
    />
  </svg>
);
export default ToogleIcon;
