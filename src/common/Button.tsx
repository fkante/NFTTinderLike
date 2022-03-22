import React from "react";

interface ButtonProps {
  color?: string;
  isDisabled?: boolean;
  onClick: () => void;
  style?: string;
  type: "button" | "submit" | "reset";
  value: string;
  metamask: boolean;
}

export default function Button({
  color,
  isDisabled = false,
  onClick,
  style,
  type,
  value,
  metamask,
}: ButtonProps) {
  return (
    <button
      className={`${
        isDisabled && "cursor-not-allowed opacity-50"
      } ${color ? color : `inline-flex items-center font-semibold bg-gradient-to-br from-purple-400 via-green-400 to-blue-400 hover:from-green-400 hover:to-green-400`} flex self-center justify-center py-3 pr-10 pl-8 text-sm leading-5 rounded-lg transition duration-150 ease-in-out text-white ${style}`}
      disabled={isDisabled}
      onClick={onClick}
      type={type}
    >
      {value}
    </button>
  );
}
