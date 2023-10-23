"use client";
import React, { useState } from "react";
import NavbarItem, { NavbarItemProps } from "../navbar-item";
import PrimaryButton from "../primary-button";
import NeonText from "../neon-text";
import DATA from "@/mock";
import { Moods, navbarItems as NIs } from "@/constants";
import MoodButton from "./components/mood-button";
import { useSelector } from "react-redux";
import { selectTheme } from "@/redux/slices/ThemeSlice";

export default function Navbar() {
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
    <div className="sticky top-0 left-0 z-10">
      <div className="absolute -top-4 left-0 w-full h-[100px] blur bg-white dark:bg-slate-900 -z-10"></div>
      <div className="py-2 px-28 flex flex-row items-center justify-between">
        <h1 className="text-[#242A41] text-[24px] font-semibold">
          <NeonText
            text={DATA.PROFILE.fullName}
            textColors={["#FFF"]}
            shadowColors={[
              "#583FBC",
              "#583FBC",
              "#583FBC",
              "#583FBC",
              "#583FBC",
              "#583FBC",
            ]}
          />
        </h1>
        <div className="flex flex-row gap-10 items-center ">
          <ul className="flex flex-row gap-4">
            {navbarItems.map((item, index) => (
              <div key={index} onClick={() => handleClickNavbarItem(index)}>
                <NavbarItem
                  id={item.id}
                  label={item.label}
                  link={item.link}
                  isActive={item.isActive}
                  textColor={theme == Moods.Light ? "white" : "#43495B"}
                  inactiveBackgroundColor={
                    theme == Moods.Light ? "#1D2130" : "white"
                  }
                />
              </div>
            ))}
          </ul>
          <MoodButton />

          <PrimaryButton
            label="Download CV"
            textColor="#FFF"
            backgroundColor1="#583FBC"
            backgroundColor2="#242A41"
          />
        </div>
      </div>
    </div>
  );
}
