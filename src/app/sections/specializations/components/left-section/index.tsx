import SkillCard from "@/components/skill-card";
import Slider from "@/components/slider";
import { HomePageSectionIds } from "@/constants";
import { divideArray } from "@/helpers/array.helper";
import DATA from "@/mock";
import React from "react";

export default function LeftSide() {
  const skillsArrays = divideArray(DATA.PROFILE.skills, 4);

  return (
    <div id={HomePageSectionIds.Skills} className="flex flex-col gap-4">
      <h3 className="text-[#242A41] dark:text-white text-[42px] font-semibold">
        Skills
      </h3>

      <div className="flex flex-row h-[700px] border-y-2 border-y-[#583FBC] shadow-y-md relative">
        <div className="absolute w-full h-full bg-transparent z-10 block lg:hidden"></div>
        {skillsArrays.map((sa, index1) => (
          <Slider
            key={index1}
            dir={index1 % 2 == 0 ? "ltr" : "rtl"}
            length={sa.length}
          >
            {sa.map((s, index2) => (
              <div key={index2} className="keen-slider__slide">
                <SkillCard skill={s} />
              </div>
            ))}
          </Slider>
        ))}
      </div>
    </div>
  );
}
