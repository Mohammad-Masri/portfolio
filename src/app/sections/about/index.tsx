import React from "react";
import AboutTitle from "./components/about-title";
import AboutBackground from "./components/about-background";
import AboutPhoto from "./components/about-photo";

export default function About() {
  return (
    <div className="w-full grid gap-4 grid-cols-2 relative h-[600px] pt-16">
      <AboutBackground />
      <AboutTitle />
      <AboutPhoto />
    </div>
  );
}
