"use client";
import SkillChip from "@/components/skill-chip";
import Experience from "@/dto/experience";
import { hexToRgba } from "@/helpers/color.helper";
import {
  calculateDaysBetweenDates,
  formatDaysAsYearsMonths,
} from "@/helpers/date.helpers";
import { motion, Variants, useInView } from "framer-motion";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

type Props = {
  experience: Experience;
  backgroundColor: string;
  index: number;
};

export default function ExperienceCard({
  experience,
  backgroundColor,
  index,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const variants: Variants = {
    hide: {
      // x: `${index % 2 == 0 ? "" : "-"}100%`,
      opacity: 0,
    },
    show: {
      // x: "0",
      opacity: 1,
      transition: {
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const responsibilities = (
    <ul className="list-disc pl-5 pb-10 text-[14px]">
      {experience.responsibilities.map((r, i) => (
        <li className="list-item" key={i}>
          {r}
        </li>
      ))}
    </ul>
  );

  return (
    <motion.div
      ref={ref}
      className="flex flex-col px-6 pt-10 rounded-3xl shadow-2xl gap-3 relative overflow-hidden h-full z-0"
      style={{ backgroundColor: hexToRgba(backgroundColor, 0.7) }}
      initial={isInView ? "hide" : "show"}
      animate={isInView ? "show" : "hide"}
      variants={variants}
    >
      <div
        className="absolute -top-12 -left-12 h-32 w-32 rounded-full"
        style={{ backgroundColor }}
      ></div>
      <div
        className="absolute -bottom-32 -left-24 h-64 w-64 rounded-full"
        style={{ backgroundColor }}
      ></div>
      <div
        className="absolute -bottom-12 left-28 h-32 w-32 rounded-full"
        style={{ backgroundColor }}
      ></div>
      <div
        className="absolute top-[10%] -right-10 h-[200%] w-[40%] rounded-tl-full rotate-[20deg]"
        style={{ backgroundColor }}
      ></div>

      <h3 className="text-[#242F65] text-[30px] md:text-[40px] font-semibold z-10">
        {experience.position} @
        <Link
          href={experience.company.link}
          target="_blank"
          className="underline"
        >
          {" "}
          {experience.company.name}
        </Link>
      </h3>
      <div className="flex flex-col -mt-3 z-10">
        <p className="text-[14px] text-[#585F6F] dark:text-gray-200">
          {moment.utc(experience.startDate.date).format("D MMM YYYY")} to{" "}
          {experience.endDate.isPresent ? (
            "Present"
          ) : (
            <>{moment.utc(experience.endDate.date).format("D MMM YYYY")}</>
          )}{" "}
          |{" "}
          {formatDaysAsYearsMonths(
            calculateDaysBetweenDates(
              experience.startDate.date == null
                ? new Date()
                : experience.startDate.date,
              experience.endDate.isPresent ? null : experience.endDate.date
            )
          )}
        </p>
      </div>

      <div className="flex flex-wrap gap-3 z-10">
        {experience.skills.map((s, i) => (
          <div key={i}>
            <SkillChip skill={s} backgroundColor="white" textColor="#6878AC" />
          </div>
        ))}
      </div>

      <div className="text-black dark:text-white z-10 w-full">
        {experience.assetURL ? (
          <div className="flex flex-col md:grid md:grid-cols-2">
            {responsibilities}

            <div className="hidden md:flex flex-col items-center justify-end">
              {experience.assetURL && (
                <Image
                  src={experience.assetURL}
                  alt={experience.position}
                  height={720}
                  width={1024}
                  className="w-full object-cover max-w-md"
                />
              )}
            </div>
          </div>
        ) : (
          <>{responsibilities}</>
        )}
      </div>
    </motion.div>
  );
}
