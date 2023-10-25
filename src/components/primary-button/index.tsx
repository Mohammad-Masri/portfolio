"use client";
import { MouseEventHandler } from "react";

type Props = {
  label: string;
  textColor?: string;
  backgroundColor1?: string;
  backgroundColor2?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

export default function PrimaryButton({
  label,
  textColor = "#000",
  onClick = () => {},
  backgroundColor1 = "#DC2626",
  backgroundColor2 = "#9333EA",
}: Props) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to left, ${backgroundColor1}, ${backgroundColor2})`,
  };
  return (
    <button className="relative group cursor-pointer" onClick={onClick}>
      <div
        style={gradientStyle}
        className="absolute -inset-1  rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
      ></div>
      <div
        className={`relative px-6 py-4  ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6`}
      >
        <div className="space-y-2">
          <p style={{ color: textColor }}>{label}</p>
        </div>
      </div>
    </button>
  );
}
