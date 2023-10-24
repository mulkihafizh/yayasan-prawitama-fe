import React from "react";
import Image from "next/image";
import css from "./header1.module.css";

export default function page() {
  return (
    <div className={css.adjust}>
      <div className={css.container}>
        <div className={css.teks}>
          <div className={css.title}>
            <h1>Keuangan</h1>
          </div>
          <div className={css.desc}>
            <p>
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
            style={{
              position: "absolute",
              left: 0,
              bottom: "5%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
