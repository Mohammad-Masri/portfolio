import React from "react";
import HeaderTitle from "./components/header-title";
import HeaderBackground from "./components/header-background";
import HeaderPhoto from "./components/header-photo";
import { HomePageSectionIds } from "@/constants";

export default function Header() {
  return (
    <div
      id={HomePageSectionIds.Header}
      className="w-full flex flex-col lg:grid grid-cols-2 relative  h-auto lg:h-[600px] pt-16 px-10"
    >
      <HeaderBackground />
      <HeaderTitle />
      <HeaderPhoto />
    </div>
  );
}
