import Skill from "@/dto/skill";
import React from "react";

type Props = {
  skill: Skill;
  backgroundColor: string;
  textColor: string;
};

export default function SkillChip({
  skill,
  backgroundColor,
  textColor,
}: Props) {
  return (
    <div
      className="py-1 px-2 lg:py-2 lg:px-4 rounded-lg shadow-lg "
      style={{ backgroundColor }}
    >
      <p style={{ color: textColor }} className="text-[14px]">
        {skill.label}
      </p>
    </div>
  );
}
