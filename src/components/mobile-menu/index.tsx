"use client";
import React, { useEffect } from "react";
import { selectIsOpen, setIsOpen } from "@/redux/slices/MobileMenuSlice";
import { useDispatch, useSelector } from "react-redux";
import { Variants, motion } from "framer-motion";
import { selectTheme } from "@/redux/slices/ThemeSlice";
import {
  selectMenuItems,
  setItemAsActive,
} from "@/redux/slices/MenuItemsSlice";
import MobileMenuItem from "../mobile-menu-item";
import { Moods } from "@/constants";

export default function MobileMenu() {
  const isOpen = useSelector(selectIsOpen);

  const theme = useSelector(selectTheme);

  const navbarItems = useSelector(selectMenuItems);
  const dispatch = useDispatch();

  const handleClickMenuItem = (id: string) => {
    dispatch(setItemAsActive(id));
    dispatch(setIsOpen(false));
  };

  const variants: Variants = {
    hide: {
      // width: 0,
      // height: 0,
      zIndex: -20,
      opacity: 0,
    },
    show: {
      // width: "100%",
      // height: "100%",
      zIndex: 20,
      opacity: 1,
      transition: {
        bounce: 0.4,
        duration: 0.3,
      },
    },
  };

  useEffect(() => {
    // Disable body scroll when the menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable body scroll when the menu is closed
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <motion.div
      className="fixed top-0 left-0 bg-slate-200 dark:bg-slate-800 backdrop-blur-3xl w-full h-full overflow-hidden transition-all ease-in-out duration-500"
      initial={isOpen ? "hide" : "show"}
      animate={isOpen ? "show" : "hide"}
      variants={variants}
    >
      <ul className="flex flex-col items-center justify-start gap-4 mt-20">
        {navbarItems.map((item, index) => (
          <div key={index} onClick={() => handleClickMenuItem(item.id)}>
            <MobileMenuItem
              menuItem={item}
              textColor={theme == Moods.Light ? "black" : "white"}
              activeTextColor={theme == Moods.Light ? "#583FBC" : "#CBC1F6"}
            />
          </div>
        ))}
      </ul>
    </motion.div>
  );
}
