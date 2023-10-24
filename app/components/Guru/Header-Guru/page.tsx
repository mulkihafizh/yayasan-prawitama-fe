import React from "react";
import css from "./headerguru.module.css";
import Image from "next/image";

export default function page() {
  return (
    <div className={css.adjust}>
      <div className={css.container}>
        <div className={css.teks}>
          <div className={css.title}>
            <h1>Hai, User</h1>
          </div>
          <div className={css.desc}>
            <p>
              Selamat datang di Dashboard Guru ! Di sini, Anda dapat melihat
              rincian lengkap mengenai Biodata Pribadi, Payroll, Pengajuan Cuti,
              Penyetujuan Cuti, Unggah Dokumen.
            </p>
          </div>
        </div>
        <div className={css.img}>
          <Image
            src={"/logo4.png"}
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
