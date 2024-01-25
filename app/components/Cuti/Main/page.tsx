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
      {data != null &&
      data != undefined &&
      target != null &&
      target != undefined &&
      cuti != null &&
      cuti != undefined &&
      Object.keys(data).length > 0 &&
      Object.keys(target).length > 0 &&
      Object.keys(cuti).length > 0 ? (
        <>
          {" "}
          <Header data={data} target={target} cuti={cuti} />
          <Pengajuan target={target} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
