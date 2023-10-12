import Link from "next/link";
import React from "react";

export type NavbarItemProps = {
  label: string;
  link: string;
  isActive: boolean;
  textColor?: string;
};

export default function NavbarItem({
  label,
  link,
  isActive,
  textColor = "#242A41",
}: NavbarItemProps) {
  const style = {
    backgroundColor: isActive ? "#583FBC" : "#1D2130",
  };
  return (
    <Link className={`relative text-[17px] text-center group`} href={link}>
      <div
        style={style}
        className="absolute -inset-1 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
      ></div>

      <p
        className={`relative px-4 py-2 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6`}
        style={{ color: textColor }}
      >
        {label}
      </p>
    </Link>
  );
}
