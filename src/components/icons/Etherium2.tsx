import * as React from 'react';
import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {}

const Etherium2 = (props: Props) => (
  <svg
    width={8}
    height={14}
    viewBox="0 0 8 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="Group"
    {...props}
  >
    <path
      d="M2.96668 1.03354L0.473348 4.1402C-0.0933187 4.84687 0.106681 5.75354 0.913348 6.15354L3.40001 7.4002C3.72668 7.5602 4.26001 7.5602 4.58668 7.4002L7.07335 6.15354C7.88002 5.74687 8.08002 4.8402 7.51335 4.1402L5.02668 1.03354C4.46668 0.320202 3.53335 0.320202 2.96668 1.03354Z"
      fill="#12D8FA"
      className="Group__Vector"
    />
    <path
      d="M1.84666 8.62025L2.91999 9.10025C3.60666 9.40692 4.39333 9.40692 5.08666 9.10025L6.15999 8.62025C7.11999 8.19359 8.00666 9.35359 7.33999 10.1669L5.03333 12.9869C4.46666 13.6803 3.53999 13.6803 2.96666 12.9869L0.666659 10.1669C-0.006674 9.35359 0.879993 8.19359 1.84666 8.62025Z"
      fill="#12D8FA"
      className="Group__Vector_2"
    />
  </svg>
);

export default Etherium2;
