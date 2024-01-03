import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="h-screen w-screen text-2xl font-bold text-[#1F3984] flex flex-col gap-5 items-center justify-center font-Poppins">
      <Image src={"/prawitama.jpeg"} width={200} height={200} alt="img" />
      <h1>YAYASAN PRAWITAMA</h1>
    </div>
  );
}
