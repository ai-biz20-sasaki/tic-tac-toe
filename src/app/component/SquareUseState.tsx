'use client';
//親：Board->子：Square

import { useState } from "react";

export default function Square() {

  const [value, setValue] = useState("");

  const handleclick = () => {
    setValue('X');
    console.log('clicked!');
  }

  return (
    <button
      className="square"
      onClick={handleclick}
    >
      {value}
    </button>
  )
}