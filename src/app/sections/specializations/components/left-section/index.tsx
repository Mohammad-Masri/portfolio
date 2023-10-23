import SkillCard from "@/components/skill-card";
import { HomePageSectionIds } from "@/constants";
import DATA from "@/mock";
import React from "react";

export default function LeftSide() {
  return (
    <div id={HomePageSectionIds.Skills} className="flex flex-col gap-4 px-10 ">
      <h3 className="text-[#242A41] dark:text-white text-[42px] font-semibold">
        Skills
      </h3>
      {/* <div className="flex flex-row items-center gap-3 flex-wrap"> */}
      <div className="flex flex-row flex-wrap gap-3">
        {DATA.PROFILE.skills.map((s, index) => (
          <div key={index}>
            <SkillCard skill={s} />
          </div>
        ))}
      </div>
    </div>
  );
}
