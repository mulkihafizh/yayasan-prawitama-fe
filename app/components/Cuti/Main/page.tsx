import React from "react";
import Header from "./header";
import Pengajuan from "./pengajuan";

export default function page({
  data,
  target,
  cuti,
}: {
  data: any;
  target: any;
  cuti: any;
}) {
  return (
    <div className="col-span-7 flex flex-col w-full gap-20">
      <Header data={data} target={target} cuti={cuti} />
      <Pengajuan target={target} />
    </div>
  );
}
