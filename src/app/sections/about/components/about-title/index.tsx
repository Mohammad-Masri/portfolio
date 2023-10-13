import DATA from "@/mock";
import React from "react";

export default function AboutTitle() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-[#1D2130] text-4xl text-left">
        HEY! <span className="font-bold">I'm {DATA.PROFILE.firstName},</span>
        <br />
        <span className="font-bold text-[#583FBC]">
          {DATA.PROFILE.position}
        </span>
      </h1>
    </div>
  );
}
