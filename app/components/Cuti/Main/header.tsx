import React from "react";
import css from "./main.module.css";

export default function ({
  data,
  target,
  cuti,
}: {
  data: any;
  target: any;
  cuti: any;
}) {
  return (
    <div
      className={
        "w-full bg-[#387cdb9e] gap-8 grow rounded-2xl flex flex-col p-5 " +
        css.container
      }
    >
      <h1 className="text-2xl font-bold">Hai, {data.name}</h1>
      <div className="items grid grid-cols-2 grow pr-12 gap-4">
        <div className="flex gap-3  bg-white p-4 rounded-xl">
          <h2 className="text-xl font-bold">{data.days_off}</h2>
          <h3 className="text-lg">Cuti Tersisa</h3>
        </div>
        <div className=" invisible"></div>
        <div className="flex gap-3  bg-white p-4 rounded-xl ">
          <h2 className="text-xl font-bold">{target.length}</h2>
          <h3 className="text-lg">Pengajuan</h3>
        </div>
        <div className="flex gap-3  bg-white p-4 rounded-xl ">
          <h2 className="text-xl font-bold">{cuti.length}</h2>
          <h3 className="text-lg">Selesai</h3>
        </div>
      </div>
    </div>
  );
}
