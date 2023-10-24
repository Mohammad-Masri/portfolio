import React from "react";
import AboutTitle from "./components/about-title";
import AboutBackground from "./components/about-background";
import AboutPhoto from "./components/about-photo";
import { HomePageSectionIds } from "@/constants";

export default function Header() {
  return (
    <div
      id={HomePageSectionIds.Header}
      className="w-full grid gap-4 grid-cols-2 relative h-[600px] pt-16"
    >
      <AboutBackground />
      <AboutTitle />
      <AboutPhoto />
    </div>
  );
}
