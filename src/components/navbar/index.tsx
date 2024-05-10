import React from "react";

import NeonText from "../neon-text";
import DATA from "@/mock";
import MoodButton from "./components/mood-button";

import DesktopMenu from "./components/desktop-menu";
import MobileMenuButton from "./components/mobile-menu-button";

export default function Navbar() {
  return (
    <div className="sticky top-0 left-0 z-20">
      <div className="absolute -top-4 left-0 w-full h-[150%] blur bg-white dark:bg-slate-900 -z-10"></div>
      <div className="py-2 px-6 lg:px-12 flex flex-row items-center justify-between">
        <h1 className="hidden lg:flex text-[#242A41] text-[24px] font-semibold transform duration-200 ease-in-out hover:scale-105">
          <NeonText
            text={`${DATA.PROFILE.firstName} ${DATA.PROFILE.lastName}`}
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
        <MobileMenuButton />
        <div className="flex flex-row gap-5 lg:gap-10 items-center ">
          <DesktopMenu />
          <MoodButton />
        </div>
      </div>
    </div>
  );
}
