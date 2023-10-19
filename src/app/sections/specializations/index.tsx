import React from "react";
import RightSection from "./components/right-section";
import { HomePageSectionIds } from "@/constants";
import LeftSide from "./components/left-section";

export default function Specializations() {
  return (
    <div id={HomePageSectionIds.Specialize} className="grid grid-cols-2 pt-40">
      <LeftSide />
      <RightSection />
    </div>
  );
}
