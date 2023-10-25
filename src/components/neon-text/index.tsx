import React from "react";

type Props = {
  text: string;
  textColors?: string[];
  shadowColors?: string[];
};

export default function NeonText({
  text,
  textColors = [],
  shadowColors = [],
}: Props) {
  const textShadow = shadowColors
    .map((color, index) => `0 0 ${5 + index * 10}px ${color}`)
    .join(", ");

  const neonStyle = {
    color: textColors.join(", "),
    textShadow,
  };

  return <p style={neonStyle}>{text}</p>;
}
