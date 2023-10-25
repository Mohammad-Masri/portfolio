import { getCurrentYear } from "@/helpers/date.helpers";
import DATA from "@/mock";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col lg:flex-row justify-between py-6 mx-2 md:mx-24 border-dashed border-t-2 border-[#26252B] dark:border-white text-[#1D2130] dark:text-white">
      <p>
        Get a question?{" "}
        <Link href={`mailto:${DATA.PROFILE.email}`} className="text-[#583FBC]">
          {DATA.PROFILE.email}
        </Link>
      </p>

      <p className="text-[16px] text-end">
        Copyright ©{getCurrentYear()}. All Rights Reserved.
      </p>
    </div>
  );
}
