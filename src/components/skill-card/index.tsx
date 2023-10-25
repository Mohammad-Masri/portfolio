"use client";
import Skill from "@/dto/skill";
import React from "react";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import { selectTheme } from "@/redux/slices/ThemeSlice";
import { Moods } from "@/constants";

type Props = {
  skill: Skill;
};

export default function SkillCard({ skill }: Props) {
  const theme = useSelector(selectTheme);
  return (
    <div className="text-[#585F6F] dark:text-gray-400 text-[14px] flex flex-col justify-center items-center gap-1">
      {skill.icon && (
        <Icon
          icon={skill.icon}
          color={theme == Moods.Light ? "#242A41" : "white"}
          width={50}
        />
      )}
      <p className="text-center">{skill.label}</p>
    </div>
  );
}
