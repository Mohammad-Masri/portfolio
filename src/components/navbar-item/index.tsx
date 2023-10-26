import Link from "next/link";
import React from "react";
import { MenuItem } from "@/constants";

type NavbarItemProps = {
  menuItem: MenuItem;
  textColor?: string;
  activeBackgroundColor?: string;
  inactiveBackgroundColor?: string;
};

export default function NavbarItem({
  menuItem,
  textColor,
  activeBackgroundColor = "#583FBC",
  inactiveBackgroundColor = "#1D2130",
}: NavbarItemProps) {
  const style = {
    backgroundColor: menuItem.isActive
      ? activeBackgroundColor
      : inactiveBackgroundColor,
  };
  return (
    <Link
      className={`relative text-[17px] text-center group`}
      href={menuItem.link}
    >
      <div
        style={style}
        className="absolute -inset-1 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
      ></div>

      <p
        className={`relative px-4 py-2 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6`}
        style={{ color: textColor }}
      >
        {menuItem.label}
      </p>
    </Link>
  );
}
