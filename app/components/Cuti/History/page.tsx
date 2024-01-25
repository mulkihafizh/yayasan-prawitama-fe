"use client";
import React from "react";
import Header from "./header";
import List from "./list";

export default function page({ cuti }: { cuti: any }) {
  return (
    <div className="col-span-5 flex flex-col w-full rounded-2xl gap-12 bg-white">
      <Header />
      <List cuti={cuti} />
    </div>
  );
}
