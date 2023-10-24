"use client";
import { HomePageSectionIds, Moods } from "@/constants";
import DATA from "@/mock";
import { selectTheme } from "@/redux/slices/ThemeSlice";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export default function Contact() {
  const theme = useSelector(selectTheme);
  return (
    <div
      id={HomePageSectionIds.Contact}
      className="grid grid-cols-2 space-x-10 px-28"
    >
      <div className="flex flex-col justify-center gap-2">
        <h3 className="text-[#242A41] dark:text-white text-[24px]">
          Let's build it together.
        </h3>
        <div className="flex flex-row justify-between gap-10 text-[12px]">
          <Link
            href={DATA.PROFILE.linkedin}
            target="_blank"
            className="bg-[#1D2130] dark:bg-white px-6 py-2 rounded-lg text-white dark:text-[#242A41] flex flex-row gap-5 justify-center items-center"
          >
            <p>My Linkedin</p>
            <Icon
              icon="mdi:linkedin"
              color={theme == Moods.Light ? "white" : "#242A41"}
              width={30}
            />
          </Link>
          <Link
            href={DATA.PROFILE.linkedin}
            target="_blank"
            className="bg-[#1D2130] dark:bg-white px-6 py-2 rounded-lg text-white dark:text-[#242A41] flex flex-row gap-5 justify-center items-center"
          >
            <p>Download my resume</p>
            <Icon
              icon="formkit:downloadcloud"
              color={theme == Moods.Light ? "white" : "#242A41"}
              width={30}
            />
          </Link>
        </div>
      </div>
      <div className="relative text-white dark:text-black bg-[#583FBC] dark:bg-[#7ED9E2]  rounded-md p-6 flex flex-row gap-3 justify-center items-center">
        <div className="absolute bg-[#7ED9E2] dark:bg-[#583FBC] rounded-md h-full w-full -z-10 -rotate-2"></div>
        <div className="flex flex-col">
          <p className="text-[24px]">Try me out, risk free!</p>
          <p className="text-[12px]">Let's build something great together</p>
        </div>
        <Link
          href={`mailto:${DATA.PROFILE.email}`}
          className="px-4 py-2 flex flex-row gap-2 items-center justify-center text-white bg-[#7ED9E2] dark:bg-[#583FBC] rounded-md"
        >
          <p>Contact</p>
          <Icon icon="basil:arrow-right-outline" width={30} />
        </Link>
      </div>
    </div>
  );
}
