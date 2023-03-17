import * as React from 'react';
import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {}

const Folder = (props: Props) => (
  <svg
    width={30}
    height={24}
    viewBox="0 0 30 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_d_36_124)" className="__Vector">
      <path
        d="M26.334 3.49935H15.0007L13.0032 1.50185C12.4648 0.963516 11.7423 0.666016 10.9915 0.666016H3.66732C2.09482 0.666016 0.848151 1.92685 0.848151 3.49935L0.833984 20.4994C0.833984 22.0719 2.09482 23.3327 3.66732 23.3327H26.334C27.8923 23.3327 29.1673 22.0577 29.1673 20.4994V6.33268C29.1673 4.77435 27.8923 3.49935 26.334 3.49935ZM23.5007 14.8327H20.6673V17.666C20.6673 18.4452 20.0298 19.0827 19.2507 19.0827C18.4715 19.0827 17.834 18.4452 17.834 17.666V14.8327H15.0007C14.2215 14.8327 13.584 14.1952 13.584 13.416C13.584 12.6368 14.2215 11.9993 15.0007 11.9993H17.834V9.16602C17.834 8.38685 18.4715 7.74935 19.2507 7.74935C20.0298 7.74935 20.6673 8.38685 20.6673 9.16602V11.9993H23.5007C24.2798 11.9993 24.9173 12.6368 24.9173 13.416C24.9173 14.1952 24.2798 14.8327 23.5007 14.8327Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        x={0.833984}
        y={0.666016}
        width={28.3334}
        height={22.6667}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
        className="__filter0_d_36_124"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.01 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_36_124"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_36_124"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default Folder;
