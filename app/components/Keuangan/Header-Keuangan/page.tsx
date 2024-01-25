import React from "react";
import Image from "next/image";
import css from "./header1.module.css";

export default function page() {
  return (
    <div className={css.adjust}>
      <div className={"max-md:!max-h-[300px] " + css.container}>
        <div className={css.teks}>
          <div className={css.title}>
            <h1 className="max-[600px]:!text-base ">Keuangan</h1>
          </div>
          <div className={css.desc}>
            <p className="max-[600px]:!text-xs">
              Selamat datang di laporan Keuangan ! Di sini, Anda dapat melihat
              rincian lengkap mengenai Pendapatan, Tunjangan, dan Benefit
              karyawan.
            </p>
          </div>
        </div>
        <div className={css.img}>
          <Image
            src={"/logo3.png"}
            width={530}
            height={380}
            alt="img"
            className="z-50"
            style={{
              position: "absolute",
              left: 0,
              bottom: "3%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
