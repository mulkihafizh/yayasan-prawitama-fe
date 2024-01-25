import React from "react";
import Image from "next/image";
import css from "./loading.module.css";

export default function Page() {
  return (
    <div className="h-screen w-screen text-2xl font-bold text-[#1F3984] flex flex-col gap-5 items-center justify-center font-Poppins">
      <Image src={"/prawitama.jpeg"} width={200} height={200} alt="img" />
      <h1>YAYASAN PRAWITAMA</h1>
      <CircleLoading />
    </div>
  );
}

export function CircleLoading() {
  return (
    <>
      <div className=" gap-4 flex max-h-2  ">
        <div
          className={
            `h-2 w-2 relative rounded-full bg-[#1F3984]  ` +
            css.ball1 +
            ` animate-loading
`
          }
        ></div>
        <div
          className={
            `h-2 w-2 relative  rounded-full bg-[#1F3984]  ` +
            css.ball2 +
            ` animate-loading
`
          }
        ></div>
        <div
          className={
            `h-2 w-2 relative rounded-full bg-[#1F3984]  ` +
            css.ball3 +
            ` animate-loading
`
          }
        ></div>
      </div>
    </>
  );
}
