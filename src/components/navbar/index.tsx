"use client";
import React, { useState } from "react";
import NavbarItem, { NavbarItemProps } from "../navbar-item";
import PrimaryButton from "../primary-button";
import NeonText from "../neon-text";
import DATA from "@/mock";

export default function Navbar() {
  const [navbarItems, setNavbarItems] = useState<NavbarItemProps[]>([
    {
      label: "About",
      link: "/#about",
      isActive: true,
    },
    {
      label: "Experience",
      link: "/#experience",
      isActive: false,
    },
    {
      label: "Skills",
      link: "/#skills",
      isActive: false,
    },
    {
      label: "Projects",
      link: "/#projects",
      isActive: false,
    },
    {
      label: "Contact",
      link: "/#contact",
      isActive: false,
    },
  ]);

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
      <div className="absolute top-0 left-0 w-full h-[80px] blur bg-white -z-10"></div>
      <div className="py-2 px-28 flex flex-row items-center justify-between  ">
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
                  label={item.label}
                  link={item.link}
                  isActive={item.isActive}
                />
              </div>
            ))}
          </ul>
          <div>Dark/Light</div>

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
