import * as React from 'react';
import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {}

const Twitter = (props: Props) => (
  <svg
    width={20}
    height={18}
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.6441 3.18054C18.5012 2.64436 19.1425 1.80009 19.4483 0.805353C18.6429 1.30541 17.7618 1.65766 16.8429 1.84687C15.569 0.436695 13.5505 0.093522 11.9155 1.00911C10.2804 1.9247 9.4335 3.87238 9.84798 5.76384C6.54901 5.59052 3.47544 3.95985 1.3921 1.27759C0.304847 3.23999 0.860458 5.74861 2.66182 7.01046C2.01043 6.98855 1.37348 6.804 0.804092 6.47219C0.804092 6.4902 0.804092 6.50821 0.804092 6.52622C0.804469 8.5704 2.18125 10.3312 4.09599 10.7363C3.49179 10.9083 2.85802 10.9337 2.24304 10.8104C2.78153 12.5585 4.32121 13.7561 6.07611 13.7919C4.62265 14.9856 2.82769 15.6329 0.980017 15.6298C0.65252 15.6303 0.32528 15.6106 0 15.5707C1.87627 16.8324 4.06002 17.5021 6.29028 17.4997C9.39311 17.522 12.375 16.242 14.569 13.946C16.763 11.6499 17.986 8.52947 17.9644 5.2826C17.9644 5.0965 17.9603 4.91141 17.952 4.72732C18.7556 4.11961 19.4491 3.36678 20 2.5042C19.2514 2.85144 18.4573 3.07941 17.6441 3.18054Z"
      fill="white"
      className="__coolicon"
    />
  </svg>
);

export default Twitter;
