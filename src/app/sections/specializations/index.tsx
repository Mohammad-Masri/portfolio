import React from "react";
import RightSection from "./components/right-section";
import LeftSide from "./components/left-section";

export default function Specializations() {
  return (
    <div className="flex flex-col gap-20 lg:grid lg:grid-cols-2 px-4 lg:px-20">
      <LeftSide />
      <RightSection />
    </div>
  );
}
