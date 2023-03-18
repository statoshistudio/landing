import * as React from 'react';
import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {}

const Moon = (props: Props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="moon"
    {...props}
  >
    <path
      d="M10.543 2.11416C10.619 1.8247 10.5156 1.51779 10.2799 1.3333C10.0443 1.14881 9.72156 1.12204 9.45876 1.26521C8.02724 2.04507 6.72246 3.16252 5.67317 4.58734C2.19782 9.30652 2.75524 15.789 7.14942 19.025C11.5436 22.261 17.8995 20.8697 21.3748 16.1505C22.1642 15.0787 22.7445 13.9203 23.1198 12.7316C23.2108 12.4436 23.1201 12.1292 22.8898 11.9339C22.6595 11.7385 22.3345 11.7004 22.0652 11.837C18.9162 13.4353 15.5539 13.4162 13.1451 11.6423C10.492 9.68845 9.5265 5.98835 10.543 2.11416Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinejoin="round"
      className="star__Subtract"
    />
  </svg>
);

export default Moon;
