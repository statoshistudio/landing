import * as React from 'react';
import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {}

const Claim = (props: Props) => (
  <svg
    width={32}
    height={30}
    viewBox="0 0 32 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="Icon"
    {...props}
  >
    <rect
      opacity={0.4}
      y={15}
      width={8}
      height={15}
      rx={2}
      fill="white"
      className="Icon__Rectangle762"
    />
    <rect
      x={12}
      width={8}
      height={30}
      rx={2}
      fill="white"
      className="Icon__Rectangle763"
    />
    <rect
      opacity={0.4}
      x={24}
      y={10}
      width={8}
      height={20}
      rx={2}
      fill="white"
      className="Icon__Rectangle764"
    />
  </svg>
);

export default Claim;
