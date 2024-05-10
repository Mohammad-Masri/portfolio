"use client";
import DATA from "@/mock";
import React, { ReactElement } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectTheme } from "@/redux/slices/ThemeSlice";
import { Moods } from "@/constants";
import { Variants, motion } from "framer-motion";

type IconLinkProps = {
  link: string;
  icon: ReactElement;
  openNewTab?: boolean;
};

function IconLink({ link, icon, openNewTab = false }: IconLinkProps) {
  return (
    <Link
      href={link}
      className=" border-[1px] border-[#242A41] rounded-full p-2 transform duration-200 ease-in-out hover:translate-y-2"
      target={openNewTab ? "_blank" : "_self"}
    >
      {icon}
    </Link>
  );
}

export default function HeaderTitle() {
  const theme = useSelector(selectTheme);

  const variants: Variants = {
    hide: {
      scale: 0,
    },
    show: {
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center gap-10"
      initial="hide"
      animate="show"
      variants={variants}
    >
      <h1 className="text-[#1D2130] dark:text-white text-4xl text-left">
        HEY! <span className="font-bold">I'm {DATA.PROFILE.firstName},</span>
        <br />
        <span className="font-bold text-[#583FBC]">
          {DATA.PROFILE.position}
        </span>
      </h1>
      <div className="flex flex-row gap-3">
        <IconLink
          link={DATA.PROFILE.linkedin}
          icon={
            <Icon
              icon="mdi:linkedin"
              color={theme == Moods.Light ? "#242A41" : "white"}
              width={30}
            />
          }
          openNewTab
        />
        <IconLink
          link={DATA.PROFILE.github}
          icon={
            <Icon
              icon="ri:github-line"
              color={theme == Moods.Light ? "#242A41" : "white"}
              width={30}
            />
          }
          openNewTab
        />
        <IconLink
          link={`https://wa.me/${DATA.PROFILE.whatsappNumber}`}
          icon={
            <Icon
              icon="ic:baseline-whatsapp"
              color={theme == Moods.Light ? "#242A41" : "white"}
              width={30}
            />
          }
          openNewTab
        />
        <IconLink
          link={`mailto:${DATA.PROFILE.email}`}
          icon={
            <Icon
              icon="mdi:email-send"
              color={theme == Moods.Light ? "#242A41" : "white"}
              width={30}
            />
          }
        />
        <IconLink
          link={`tel:${DATA.PROFILE.phoneNumber}`}
          icon={
            <Icon
              icon="ic:baseline-phone"
              color={theme == Moods.Light ? "#242A41" : "white"}
              width={30}
            />
          }
        />
      </div>
    </motion.div>
  );
}
