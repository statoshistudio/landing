import * as React from 'react';
import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {}

const Etherium = (props: Props) => (
  <svg
    width={26}
    height={27}
    viewBox="0 0 26 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="ethe"
    {...props}
  >
    <path
      d="M12.8571 26.3571C19.958 26.3571 25.7143 20.6008 25.7143 13.5C25.7143 6.39916 19.958 0.642822 12.8571 0.642822C5.75634 0.642822 0 6.39916 0 13.5C0 20.6008 5.75634 26.3571 12.8571 26.3571Z"
      fill="#AA20DA"
      className="ethe__Vector"
    />
    <g className="ethe__Group">
      <path
        d="M18.1015 14.6818C18.0787 14.6804 12.9248 17.7347 12.8573 17.7608C12.8421 17.752 7.6429 14.6749 7.61816 14.678C7.63075 14.6965 12.8538 22.071 12.8573 22.071C12.8608 22.071 18.1015 14.6818 18.1015 14.6818V14.6818Z"
        fill="white"
        className="ethe__Group__Vector_2"
      />
      <path
        d="M12.8604 4.92798L7.63574 13.6661L12.8604 16.7609L18.0851 13.6661L12.8604 4.92798Z"
        fill="white"
        className="ethe__Group__Vector_3"
      />
    </g>
  </svg>
);

export default Etherium;
