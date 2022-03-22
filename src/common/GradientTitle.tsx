import React from "react";

interface GradientTitleProps {
  style?: string;
  size?: "small" | "medium" | "big";
  titles: string[];
}

export default function GradientTitle({
  style,
  titles,
  size,
}: GradientTitleProps) {
  return (
    <h1
      className={`inline-block whitespace-pre-line text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 font-bold md:leading-14 ${
        size === "big" && `md:text-5.5xl text-4xl`
      } ${size === "medium" && `md:text-5xl text-2xl`} ${size === "small" && `md:text-2xl text-lg`} ${style}`}
    >
      {titles && titles.map((t) => t)}
    </h1>
  );
}
