"use client";
import React from "react";
import { formatDaysAsYearsMonths } from "@/helpers/date.helpers";

type Props = {
  days: number;
};

export default function TotalExperienceInfo({ days }: Props) {
  return (
    <>
      Total:{" "}
      <span className="font-semibold">{formatDaysAsYearsMonths(days)}</span>
    </>
  );
}
