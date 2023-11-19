import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TextInput(props: InputProps) {
  return (
    <input
      {...props}
      style={{ ...props.style, width: "100%", height: "6vh", fontSize: 18, padding: 5 }}
      type="text"
    />
  );
}
