import { HomePageSectionIds } from "@/constants";
import DATA from "@/mock";
import React from "react";

export default function Summary() {
  return (
    <div
      id={HomePageSectionIds.About}
      className="w-full flex flex-col gap-4 px-4 lg:px-20"
    >
      <h3 className="text-[#242A41] dark:text-white text-[42px] font-semibold">
        Summary
      </h3>
      <ul className="flex flex-col gap-2 text-[#242A41] dark:text-[#585F6F]">
        {DATA.PROFILE.summary.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}
