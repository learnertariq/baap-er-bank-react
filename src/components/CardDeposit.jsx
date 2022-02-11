import React from "react";
import Input from "./Input";

export default function CardDeposit({
  title,
  bgColor,
  textColor,
  titleColor,
  onChange,
  onSubmit,
  value
}) {
  return (
    <div
      className={`card px-2 py-3 m-2 rounded-xl shadow-xl flex flex-col gap-3 ${
        bgColor ? bgColor : ""
      } ${textColor ? textColor : ""}`}
    >
      <h3 className={"font-medium text-xl " + titleColor}>{title}</h3>
      <Input
        placeholder="$ টাকার পরিমান লিখুন"
        type="number"
        name="deposit"
        onChange={onChange}
        value={value}
      />
      <button
        type="submit"
        name='depositButton'
        className="px-8 py-2 bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-xl font-bold uppercase tracking-wider"
        onClick={onSubmit}
      >
        জমা করুন
      </button>
    </div>
  );
}
