"use client";
import Skill from "@/dto/skill";
import React from "react";
import { Icon } from "@iconify/react";

type Props = {
  skill: Skill;
};

export default function SkillCard({ skill }: Props) {
  return (
    <div className="text-[#585F6F] dark:text-gray-400 text-[14px] flex flex-col justify-center items-center gap-1">
      {skill.icon && <Icon icon={skill.icon} color="#242A41" width={50} />}
      <p>{skill.label}</p>
    </div>
  );
}
