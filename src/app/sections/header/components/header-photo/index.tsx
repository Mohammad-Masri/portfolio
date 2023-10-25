import DATA from "@/mock";
import Image from "next/image";
import React from "react";

export default function HeaderPhoto() {
  return (
    <div className=" hidden lg:flex flex-row justify-center relative  ">
      <div className="absolute top-0 w-full flex justify-center">
        <Image
          src={DATA.ABOUT_SECTION.aboutSquaresLink}
          width={1024}
          height={1024}
          alt="about squares"
          className="w-[50%] object-cover"
        />
      </div>
      <div className="absolute top-0 w-full flex justify-center -z-10">
        <Image
          src={DATA.ABOUT_SECTION.aboutStartsLink}
          width={1024}
          height={1024}
          alt="about starts"
          className="w-[50%] object-cover"
        />
      </div>

      <div className="absolute top-16 flex items-center justify-center w-[400px] h-[400px] bg-[#DFE1FA] rounded-full">
        <div className="absolute top-10 -left-10 flex items-center justify-center w-[400px] h-[400px]">
          <Image
            src={DATA.PROFILE.profilePhotoLink}
            width={1024}
            height={1024}
            alt={`${DATA.PROFILE.profilePhotoLink} profile photo`}
            className="w-96 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
