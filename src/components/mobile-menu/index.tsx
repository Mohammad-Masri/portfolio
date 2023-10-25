"use client";
import React from "react";
import { selectIsOpen } from "@/redux/slices/MobileMenuSlice";
import { useSelector } from "react-redux";
import { Variants, motion } from "framer-motion";
import { selectTheme } from "@/redux/slices/ThemeSlice";

export default function MobileMenu() {
  const isOpen = useSelector(selectIsOpen);

  const variants: Variants = {
    hide: {
      //   width: 0,
      //   height: 0,
      zIndex: -20,
      opacity: 0,
    },
    show: {
      //   width: "100%",
      //   height: "100%",
      zIndex: 10,
      opacity: 1,
      transition: {
        bounce: 0.4,
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 bg-slate-200 dark:bg-slate-800 backdrop-blur-3xl  w-full h-full overflow-hidden transition-all ease-in-out duration-500"
      initial={isOpen ? "hide" : "show"}
      animate={isOpen ? "show" : "hide"}
      variants={variants}
    ></motion.div>
  );
}
