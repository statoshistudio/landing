import * as React from 'react';
import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {}

const Heart2 = (props: Props) => (
  <svg
    width={22}
    height={20}
    viewBox="0 0 22 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.62 18.8101C11.28 18.9301 10.72 18.9301 10.38 18.8101C7.48 17.8201 1 13.6901 1 6.6901C1 3.6001 3.49 1.1001 6.56 1.1001C8.38 1.1001 9.99 1.9801 11 3.3401C12.01 1.9801 13.63 1.1001 15.44 1.1001C18.51 1.1001 21 3.6001 21 6.6901C21 13.6901 14.52 17.8201 11.62 18.8101Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="__Vector"
    />
  </svg>
);

export default Heart2;
