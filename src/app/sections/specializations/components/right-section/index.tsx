import DATA from "@/mock";
import React from "react";
import SpecializationCard from "../specialization-card";
import { HomePageSectionIds } from "@/constants";

export default function RightSection() {
  return (
    <div
      id={HomePageSectionIds.Specialize}
      className="flex flex-col gap-4 px-10"
    >
      <h3 className="text-[#242A41] text-[42px] font-semibold">
        I specialize in
      </h3>
      <div className="flex flex-col gap-10">
        {DATA.SPECIALIZATIONS.map((s, index) => (
          <div
            key={index}
            className={`${index % 2 == 0 ? "rotate-3" : "-rotate-3"}`}
          >
            <SpecializationCard number={index + 1} specialization={s} />
          </div>
        ))}
      </div>
    </div>
  );
}
