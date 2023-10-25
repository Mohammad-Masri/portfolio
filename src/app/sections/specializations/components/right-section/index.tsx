import DATA from "@/mock";
import React from "react";
import SpecializationCard from "../specialization-card";
import { HomePageSectionIds } from "@/constants";

export default function RightSection() {
  return (
    <div id={HomePageSectionIds.Specialize} className="flex flex-col gap-4">
      <h3 className="text-[#242A41] dark:text-white text-[42px] font-semibold">
        I specialize in
      </h3>
      <div className="flex flex-col gap-5">
        {DATA.SPECIALIZATIONS.map((s, index) => (
          <div key={index}>
            <SpecializationCard number={index + 1} specialization={s} />
          </div>
        ))}
      </div>
    </div>
  );
}
