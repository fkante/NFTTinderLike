import React from "react";

interface CrossSvgProps {
  style?: string;
}

export default function CrossSvg({ style }: CrossSvgProps) {
  return (
    <svg
      className={style}
      viewBox="0 0 31 30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.0009 28.8776C30.4793 27.3981 30.4793 24.9993 29.0009 23.5197L20.8053 15.318L29.1859 6.93107C30.6644 5.45153 30.6644 3.05272 29.1859 1.57318C27.7075 0.0936372 25.3105 0.0936404 23.832 1.57318L15.4513 9.96008L7.06442 1.56693C5.58598 0.0873909 3.18895 0.0873898 1.71051 1.56693C0.232073 3.04647 0.232076 5.44528 1.71052 6.92482L10.0974 15.318L1.89553 23.526C0.417091 25.0055 0.41709 27.4043 1.89553 28.8839C3.37397 30.3634 5.771 30.3634 7.24944 28.8839L15.4513 20.6759L23.647 28.8776C25.1254 30.3572 27.5225 30.3572 29.0009 28.8776Z"
        fill="url(#paint0_linear_2_7)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2_7"
          x1="1.34323"
          y1="0.457275"
          x2="29.7538"
          y2="29.9724"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF6B00" />
          <stop offset="1" stopColor="#FF51B9" />
        </linearGradient>
      </defs>
    </svg>
  );
}
