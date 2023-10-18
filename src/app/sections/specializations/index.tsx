import React from "react";
import RightSection from "./components/right-section";
import { HomePageSectionIds } from "@/constants";

export default function Specializations() {
  return (
    <div id={HomePageSectionIds.Specialize} className="grid grid-cols-2 pt-40">
      <div></div>
      <RightSection />
    </div>
  );
}
