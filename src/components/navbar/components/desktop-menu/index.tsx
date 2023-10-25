"use client";
import React, { useState } from "react";
import { Moods, navbarItems as NIs } from "@/constants";
import { useSelector } from "react-redux";
import { selectTheme } from "@/redux/slices/ThemeSlice";
import NavbarItem, { NavbarItemProps } from "@/components/navbar-item";

export default function DesktopMenu() {
  const theme = useSelector(selectTheme);

  const [navbarItems, setNavbarItems] = useState<NavbarItemProps[]>(
    NIs.map((i, index) => {
      let isActive = false;
      if (index == 0) isActive = true;
      return {
        id: i.id,
        label: i.label,
        link: `/#${i.id}`,
        isActive,
      };
    })
  );

  const handleClickNavbarItem = (index: number) => {
    const newNavbarItems = navbarItems.map((nbi, i) => {
      if (i == index) nbi.isActive = true;
      else nbi.isActive = false;
      return nbi;
    });

    setNavbarItems(newNavbarItems);
  };
  return (
    <ul className="hidden lg:flex flex-row gap-4">
      {navbarItems.map((item, index) => (
        <div key={index} onClick={() => handleClickNavbarItem(index)}>
          <NavbarItem
            id={item.id}
            label={item.label}
            link={item.link}
            isActive={item.isActive}
            textColor={theme == Moods.Light ? "white" : "#43495B"}
            inactiveBackgroundColor={theme == Moods.Light ? "#1D2130" : "white"}
          />
        </div>
      ))}
    </ul>
  );
}
