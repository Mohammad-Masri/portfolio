import DATA from "@/mock";
import Image from "next/image";
import React from "react";

export default function HeaderBackground() {
  return (
    <div className="absolute left-0 top-0 w-full -z-10 flex">
      <div className="w-full flex flex-row items-center justify-center">
        <Image
          src={DATA.ABOUT_SECTION.aboutBlurGradientLink}
          width={1024}
          height={1024}
          alt="about background blur gradient"
          className="w-[50%] object-center"
        />
      </div>
    </div>
  );
}
