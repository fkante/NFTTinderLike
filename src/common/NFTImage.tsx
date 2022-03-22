import React from "react";

interface INFTImageProps {
  name: string;
  size?: number;
  classNames?: string;
}

export default function NFTImage({
    name,
    size = 10,
    classNames
}: INFTImageProps) {
  const className = `w-${size} ${classNames}`;
  if (name && name.includes("mp4")) {
    return (
      <video
        className={className}
        src={name}
        autoPlay
        loop
        muted
      />
    );
  }
  return <img className={className} src={name} alt={name} />;
}
