import React from "react";

export default function Input({
  placeholder,
  type,
  name,
  id,
  onChange,
  value,
}) {
  return (
    <input
      className="block mb-3 px-3 py-2 text-lg rounded-xl outline-none"
      placeholder={placeholder ? placeholder : ""}
      type={type}
      name={name ? name : type}
      id={id ? id : type}
      onChange={onChange}
      value={value}
    />
  );
}
