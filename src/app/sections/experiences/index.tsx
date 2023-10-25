import { HomePageSectionIds } from "@/constants";
import DATA from "@/mock";
import React from "react";
import ExperienceCard from "./components/experience-card";
import {
  calculateDaysBetweenDates,
  formatDaysAsYearsMonths,
} from "@/helpers/date.helpers";

export default function Experiences() {
  const startDate = DATA.EXPERIENCES[DATA.EXPERIENCES.length - 1].startDate;
  const endDate = DATA.EXPERIENCES[0].endDate;

  const days = calculateDaysBetweenDates(
    startDate.date == null ? new Date() : startDate.date,
    endDate.isPresent ? null : endDate.date
  );

  return (
    <div
      id={HomePageSectionIds.Experience}
      className="flex flex-col justify-center items-center px-4 lg:px-20 overflow-hidden"
    >
      <h1 className="text-[#242A41] dark:text-white text-[40px]  sm:text-[56px] font-bold">
        Experiences
      </h1>
      <p className="text-[#79839a] dark:text-gray-400 text-[18px] font-bold">
        Total:{" "}
        <span className="font-semibold">{formatDaysAsYearsMonths(days)}</span>
      </p>
      <div className="flex flex-col justify-center items-center gap-10 mt-10">
        {DATA.EXPERIENCES.map((e, index) => (
          <div key={index} className="w-full">
            <ExperienceCard
              experience={e}
              backgroundColor={index % 2 == 0 ? "#7DE0EA" : "#CBC1F6"}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
