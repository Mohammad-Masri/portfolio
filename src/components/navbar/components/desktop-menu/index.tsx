"use client";
import React from "react";
import { Moods, navbarItems as NIs } from "@/constants";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "@/redux/slices/ThemeSlice";
import NavbarItem from "@/components/navbar-item";
import {
  selectMenuItems,
  setItemAsActive,
} from "@/redux/slices/MenuItemsSlice";

export default function DesktopMenu() {
  const theme = useSelector(selectTheme);

  const navbarItems = useSelector(selectMenuItems);
  const dispatch = useDispatch();

  const handleClickNavbarItem = (id: string) => {
    dispatch(setItemAsActive(id));
  };
  return (
    <ul className="hidden lg:flex flex-row gap-4">
      {navbarItems.map((item, index) => (
        <div key={index} onClick={() => handleClickNavbarItem(item.id)}>
          <NavbarItem
            menuItem={item}
            textColor={theme == Moods.Light ? "white" : "#43495B"}
            inactiveBackgroundColor={theme == Moods.Light ? "#1D2130" : "white"}
          />
        </div>
      ))}
    </ul>
  );
}
