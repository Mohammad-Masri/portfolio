"use client";
import React, { ReactNode } from "react";
import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";

interface Props {
  children: ReactNode;
  length: number;
  dir: "rtl" | "ltr";
}
const animation = { duration: 40000, easing: (t: number) => t };

export default function Slider({ children, length, dir }: Props) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    rtl: dir === "rtl",
    drag: true,
    vertical: true,
    slides: {
      perView: length / 2,
      spacing: 10,
    },
    created(s) {
      s.moveToIdx(length, true, animation);
    },

    updated(s) {
      s.moveToIdx(s.track.details.abs + length, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + length, true, animation);
    },
  });

  function stopSlider() {
    instanceRef.current?.animator.stop();
  }

  function startSlider() {
    const keyframe = {
      distance: 0,
      duration: 0,
      easing: (t: number) => t,
    };
    instanceRef.current?.animator.start([keyframe, keyframe]);
  }
  return (
    <div
      ref={sliderRef}
      className="keen-slider flex flex-row"
      onMouseEnter={() => stopSlider()}
      onMouseLeave={() => startSlider()}
    >
      {children}
    </div>
  );
}
