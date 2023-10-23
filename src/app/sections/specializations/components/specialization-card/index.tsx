import Specialization from "@/dto/specialization";
import React from "react";

type Props = {
  number: number;
  specialization: Specialization;
  backgroundColor?: string;
};

export default function SpecializationCard({
  number,
  specialization,
  backgroundColor = "#EDF0F9",
}: Props) {
  return (
    <div
      className=" p-6 border-2 border-[#585F6F] dark:border-white rounded-md relative overflow-hidden z-0"
      style={{ backgroundColor }}
    >
      <div className="absolute -top-8 -left-8 h-16 w-16 bg-[#D9DFF2] rounded-full"></div>
      <div className="absolute -bottom-16 -left-10 h-32 w-32 bg-[#d9dff2c3] rounded-full"></div>
      <div className="absolute -bottom-12 left-16 h-20 w-20 bg-[#D9DFF2] rounded-full"></div>
      <div className="absolute top-[10%] -right-10 h-[200%] w-[40%] bg-[#D9DFF2] rounded-tl-full rotate-[20deg]"></div>

      <div className="flex flex-col gap-2">
        <p className="text-[#585F6F] text-[25px] z-10">{number}</p>
        <h3 className="text-[#242A41] text-[31px] font-bold z-10">
          {specialization.title}
        </h3>
        <p className="text-[#585F6F] text-[16px] z-10">
          {specialization.details}
        </p>
      </div>
    </div>
  );
}
