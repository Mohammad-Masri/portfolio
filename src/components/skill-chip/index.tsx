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
    <div className="py-2 px-4 rounded-lg shadow-lg" style={{ backgroundColor }}>
      <p style={{ color: textColor }}>{skill.label}</p>
    </div>
  );
}
