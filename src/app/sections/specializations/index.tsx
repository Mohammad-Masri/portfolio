import React from "react";
import RightSection from "./components/right-section";
import LeftSide from "./components/left-section";

export default function Specializations() {
  return (
    <div className="grid grid-cols-2 pt-40">
      <LeftSide />
      <RightSection />
    </div>
  );
}
