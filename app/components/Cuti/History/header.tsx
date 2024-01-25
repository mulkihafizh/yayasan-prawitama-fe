import React from "react";
import css from "./history.module.css";

export default function header() {
  return (
    <header
      className={
        "bg-[#387cdb9e] rounded-2xl p-8 text-2xl font-bold " + css.header
      }
    >
      <h1>History </h1>
    </header>
  );
}
