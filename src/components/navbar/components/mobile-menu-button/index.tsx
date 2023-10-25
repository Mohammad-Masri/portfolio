"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsOpen, setIsOpen } from "@/redux/slices/MobileMenuSlice";
import { selectTheme } from "@/redux/slices/ThemeSlice";
import { Moods } from "@/constants";

const OPEN_MENU_ICON = "line-md:close-to-menu-transition";
const CLOSED_MENU_ICON = "line-md:menu-to-close-transition";
const MENU_ICON_SIDE = 30;

export default function MobileMenuButton() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsOpen);
  const theme = useSelector(selectTheme);

  const iconColor = theme == Moods.Light ? "black" : "white";

  const handleClickMenu = () => {
    dispatch(setIsOpen(!isOpen));
  };
  return (
    <button className="flex lg:hidden" onClick={handleClickMenu}>
      {isOpen && (
        <Icon
          icon={CLOSED_MENU_ICON}
          width={MENU_ICON_SIDE}
          color={iconColor}
        />
      )}
      {!isOpen && (
        <Icon icon={OPEN_MENU_ICON} width={MENU_ICON_SIDE} color={iconColor} />
      )}
    </button>
  );
}
