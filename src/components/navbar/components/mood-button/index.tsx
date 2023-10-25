"use client";
import { Moods } from "@/constants";
import { Icon } from "@iconify/react";
import React from "react";
import { motion, Variants } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, setTheme } from "@/redux/slices/ThemeSlice";

const lightIcon = "twemoji:sun",
  darkIcon = "icon-park:moon";

const BUTTON_WIDTH = 30;

export default function MoodButton() {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const setThemeTo = (mood: Moods) => {
    const oldMood = mood == Moods.Light ? Moods.Dark : Moods.Light;
    document.documentElement.classList.remove(oldMood);
    document.documentElement.classList.add(mood);
    dispatch(setTheme(mood));
  };

  const variants: Variants = {
    hide: {
      y: "-100%",
      opacity: 0,
      display: "none",
    },
    show: {
      y: 0,
      opacity: 1,
      display: "block",
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const handleClickMoodButton = () => {
    const newMood = theme == Moods.Light ? Moods.Dark : Moods.Light;

    setThemeTo(newMood);
  };

  const renderIcon = (current: Moods, is: Moods, icon: string) => {
    return (
      <motion.div
        initial={current == is ? "hide" : "show"}
        whileInView={current == is ? "show" : "hide"}
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div variants={variants}>
          <Icon icon={icon} width={BUTTON_WIDTH} />
        </motion.div>
      </motion.div>
    );
  };

  return (
    <button
      className="flex flex-row items-center justify-center"
      style={{ width: BUTTON_WIDTH }}
      onClick={handleClickMoodButton}
    >
      {renderIcon(theme, Moods.Light, lightIcon)}
      {renderIcon(theme, Moods.Dark, darkIcon)}
    </button>
  );
}
