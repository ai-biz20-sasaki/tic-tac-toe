'use client';
//親：Board->子：Square

import { useState } from "react";

export default function Square(props) {

  return (
    <button
      className="square"
      onClick={props.onSquareClick}
    >
      {props.value}
    </button>
  )
}