"use client";
import DATA from "@/mock";
import React, { ReactElement } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

type IconLinkProps = {
  link: string;
  icon: ReactElement;
};

function IconLink({ link, icon }: IconLinkProps) {
  return (
    <Link
      href={link}
      className=" border-[1px] border-[#242A41] rounded-full p-2"
      target="_blank"
    >
      {icon}
    </Link>
  );
}

export default function AboutTitle() {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <h1 className="text-[#1D2130] text-4xl text-left">
        HEY! <span className="font-bold">I'm {DATA.PROFILE.firstName},</span>
        <br />
        <span className="font-bold text-[#583FBC]">
          {DATA.PROFILE.position}
        </span>
      </h1>
      <div className="flex flex-row gap-3">
        <IconLink
          link={DATA.PROFILE.linkedin}
          icon={<Icon icon="mdi:linkedin" color="#242A41" width={30} />}
        />
        <IconLink
          link={DATA.PROFILE.github}
          icon={<Icon icon="ri:github-line" color="#242A41" width={30} />}
        />
        <IconLink
          link={`https://wa.me/${DATA.PROFILE.whatsappNumber}`}
          icon={<Icon icon="ic:baseline-whatsapp" color="#242A41" width={30} />}
        />
        <IconLink
          link={`tel:${DATA.PROFILE.phoneNumber}`}
          icon={<Icon icon="ic:baseline-phone" color="#242A41" width={30} />}
        />
      </div>
    </div>
  );
}
