import DATA from "@/mock";
import moment from "moment";
import React from "react";

export default function Education() {
  return (
    <div className="w-full flex flex-col  gap-4 px-4 lg:px-20">
      <h3 className="text-[#242A41] dark:text-white text-[42px] font-semibold">
        Education
      </h3>
      <div className="flex flex-row -mt-3 gap-2 text-[#242A41] dark:text-[#585F6F]">
        <p>
          {moment.utc(DATA.EDUCATION.startDate.date).format(" MMM YYYY")} to{" "}
          {DATA.EDUCATION.endDate.isPresent ? (
            "Present"
          ) : (
            <>{moment.utc(DATA.EDUCATION.endDate.date).format(" MMM YYYY")}</>
          )}{" "}
          | Graduate from {DATA.EDUCATION.school} specialization at{" "}
          {DATA.EDUCATION.specialization}
        </p>
      </div>
    </div>
  );
}
