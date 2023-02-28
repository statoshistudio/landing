import * as React from "react";
import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {

}

const Star = (props: Props) => (
  <svg
    width={28}
    height={29}
    viewBox="0 0 28 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_d_9_7070)" className="__Iconex/Filled/Star">
      <g className="__Iconex/Filled/Star__Star">
        <path
          d="M12.9718 3.87509C13.4382 3.10011 14.5618 3.10011 15.0282 3.87509L17.9621 8.75024C18.1296 9.02865 18.4029 9.22721 18.7195 9.30053L24.2627 10.5843C25.1439 10.7884 25.4911 11.857 24.8981 12.54L21.1682 16.8368C20.9552 17.0822 20.8508 17.4035 20.8789 17.7272L21.3709 23.3958C21.4491 24.2969 20.5401 24.9573 19.7072 24.6045L14.4681 22.3849C14.1689 22.2582 13.8311 22.2582 13.5319 22.3849L8.29279 24.6045C7.45995 24.9573 6.55098 24.2969 6.62918 23.3958L7.12114 17.7272C7.14923 17.4035 7.04484 17.0822 6.83183 16.8368L3.10192 12.54C2.50899 11.857 2.85619 10.7884 3.73736 10.5843L9.28053 9.30053C9.59709 9.22721 9.87039 9.02865 10.0379 8.75024L12.9718 3.87509Z"
          fill="white"
          stroke="white"
          strokeWidth={1.5}
          className="__Iconex/Filled/Star__Star__Star2"
        />
      </g>
    </g>
    <defs>
      <filter
        x={-2}
        y={-1}
        width={32}
        height={32}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
        className="__filter0_d_9_7070"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius={2}
          operator="dilate"
          in="SourceAlpha"
          result="effect1_dropShadow_9_7070"
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
          result="effect1_dropShadow_9_7070"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_9_7070"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default Star;