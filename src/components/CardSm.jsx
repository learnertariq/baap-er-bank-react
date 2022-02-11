import React from "react";

export default function CardSm({
  title,
  subTitle,
  symbol,
  bgColor,
  textColor,
}) {
  return (
    <div
      className={`card px-2 py-3 m-2 rounded-xl shadow-xl ${
        bgColor ? bgColor : ""
      } ${textColor ? textColor : ""}`}
    >
      <h3 className="font-medium text-lg">{title}</h3>
      <p>
        {symbol}
        {subTitle}
      </p>
    </div>
  );
}
