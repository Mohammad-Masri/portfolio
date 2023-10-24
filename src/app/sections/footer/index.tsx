import { getCurrentYear } from "@/helpers/date.helpers";
import DATA from "@/mock";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-row justify-between items-center p-6 mx-24 border-dashed border-t-2 border-[#26252B] dark:border-white text-[#1D2130] dark:text-white">
      <p className="text-[16px]">
        Copyright ©{getCurrentYear()}. All Rights Reserved.
      </p>
      <p className="flex flex-row justify-end gap-4">
        Get a question?
        <Link href={`mailto:${DATA.PROFILE.email}`} className="text-[#583FBC]">
          {DATA.PROFILE.email}
        </Link>
      </p>
    </div>
  );
}
