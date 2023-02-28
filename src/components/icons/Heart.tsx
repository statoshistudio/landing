import * as React from "react";
import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {

}

const Heart = (props: Props) => (
  <svg
    width={13}
    height={13}
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_210_1219)" className="__heart1">
      <path
        d="M11.1148 2.67394C10.8564 2.4154 10.5496 2.2103 10.2119 2.07038C9.8742 1.93045 9.51223 1.85843 9.14669 1.85843C8.78115 1.85843 8.41918 1.93045 8.08148 2.07038C7.74378 2.2103 7.43695 2.4154 7.17854 2.67394L6.64223 3.21025L6.10592 2.67394C5.58393 2.15195 4.87596 1.8587 4.13776 1.8587C3.39956 1.8587 2.69159 2.15195 2.16961 2.67394C1.64762 3.19592 1.35437 3.90389 1.35437 4.64209C1.35437 5.38029 1.64762 6.08826 2.16961 6.61025L2.70592 7.14655L6.64223 11.0829L10.5785 7.14655L11.1148 6.61025C11.3734 6.35183 11.5785 6.045 11.7184 5.7073C11.8583 5.3696 11.9304 5.00763 11.9304 4.64209C11.9304 4.27655 11.8583 3.91458 11.7184 3.57688C11.5785 3.23918 11.3734 2.93235 11.1148 2.67394V2.67394Z"
        stroke="currentColor"
        strokeWidth={0.728571}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="__heart1__Vector"
      />
    </g>
    <defs>
      <clipPath className="__clip0_210_1219">
        <rect
          width={12.1429}
          height={12.1429}
          fill="currentColor"
          transform="translate(0.570801 0.341492)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default Heart;