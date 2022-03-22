import React from "react";

interface IIconProps {
  name: string;
  size?: number;
  classNames?: string;
}

export default function Icon({
    name,
    size = 10,
    classNames
}: IIconProps) {
  const iconSource = `/images/${name && name.toLowerCase()}_icon.png`;
  const className = `h-10 w-10 rounded-lg ${classNames}`;
  return <img className={className} src={iconSource} alt={name} />;
}
