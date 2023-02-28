import * as React from "react";
import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {

}

const Arrow = (props: Props) => (
  <svg
    width={20}
    height={12}
    viewBox="0 0 20 12"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75L1 5.25ZM19.5303 6.53033C19.8232 6.23744 19.8232 5.76256 19.5303 5.46967L14.7574 0.6967C14.4645 0.403807 13.9896 0.403807 13.6967 0.6967C13.4038 0.989593 13.4038 1.46447 13.6967 1.75736L17.9393 6L13.6967 10.2426C13.4038 10.5355 13.4038 11.0104 13.6967 11.3033C13.9896 11.5962 14.4645 11.5962 14.7574 11.3033L19.5303 6.53033ZM1 6.75L19 6.75L19 5.25L1 5.25L1 6.75Z"
      fill="currentColor"
      className="__Arrow2"
    />
  </svg>
);

export default Arrow;