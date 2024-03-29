import React, { FC, SVGProps } from "react";

const MoonIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 62 62"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_11_7224)">
      <path d="M41.6057 52.6801C48.5619 50.1482 53.7633 44.671 56.0848 37.9531C56.4282 36.9593 55.3414 36.0857 54.4458 36.6191C44.2624 42.6855 31.1608 37.9533 27.1406 26.908C24.8248 20.5455 26.1013 13.4551 30.4903 8.29005C31.1669 7.49389 30.4814 6.2783 29.4467 6.45211C27.9962 6.69619 26.571 7.072 25.1887 7.57487C12.7399 12.1059 6.30783 25.8713 10.8446 38.336C15.3756 50.7848 29.1411 57.2169 41.6057 52.6801Z" />
    </g>
    <defs>
      <clipPath id="clip0_11_7224">
        <rect
          width={48}
          height={48}
          fill="white"
          transform="translate(0.238892 16.6559) rotate(-20)"
        />
      </clipPath>
    </defs>
  </svg>
);
export default MoonIcon;
