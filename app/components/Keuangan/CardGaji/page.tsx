import React from "react";
import css from "./cardgaji.module.css";
import Image from "next/image";

export default function page() {
  return (
    <div className={css.container}>
      <div className={css.title}>
        <Image className="img" src={"/anoun.png"} width={55} height={55} alt="anoun" />
        <h1>Announcement</h1>
      </div>
      <div className={css.CardParent}>
        <div className={css.card}>
          <h1>Proses Gaji Karyawan</h1>
          <p>Segera Input data Gaji Karyawan bulan ini !</p>
        </div>
        <div className={css.card2}>
          <h1>Proses Gaji Karyawan</h1>
          <p>Segera Input data Gaji Karyawan bulan ini !</p>
        </div>
      </div>
    </div>
  );
}
