import { MenuItem } from "@/constants";
import Link from "next/link";
import React from "react";

type MobileMenuItemProps = {
  menuItem: MenuItem;
  textColor?: string;
  activeTextColor?: string;
};

export default function MobileMenuItem({
  menuItem,
  textColor,
  activeTextColor = "#CBC1F6",
}: MobileMenuItemProps) {
  textColor = menuItem.isActive ? activeTextColor : textColor;
  return (
    <Link className={`text-[32px] text-center group`} href={menuItem.link}>
      <p style={{ color: textColor }}>{menuItem.label}</p>
    </Link>
  );
}
