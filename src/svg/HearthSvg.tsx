import React from "react";

interface HearthSvgProps {
  style?: string;
}

export default function HearthSvg({ style }: HearthSvgProps) {
  return (
    <svg
      className={style}
      viewBox="0 0 37 33"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.4501 18.4412C37.5642 14.3271 37.5642 7.65689 33.4501 3.54282C29.336 -0.571242 22.6658 -0.571241 18.5517 3.54283C18.5517 3.54283 18.5517 3.54284 18.5517 3.54285C14.4376 -0.571222 7.76743 -0.571221 3.65336 3.54285C-0.460707 7.65691 -0.460706 14.3271 3.65336 18.4412L3.67273 18.4605L3.67271 18.4605L16.6129 31.4007C17.6944 32.4822 19.4478 32.4822 20.5293 31.4007L33.4694 18.4605L33.4501 18.4412Z"
        fill="url(#paint0_linear_2_3)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2_3"
          x1="-1.65359"
          y1="9.46417"
          x2="36.5356"
          y2="12.4039"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#42A4FF" />
          <stop offset="1" stopColor="#42F4FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
