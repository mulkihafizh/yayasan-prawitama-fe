import React from "react";
import Image from "next/image";
import css from "./header.module.css";

export default function page() {
  return (
    <div className={css.adjust}>
      <div className={css.container}>
        <div className={css.teks}>
          <div className={css.title}>
            <h1>Kepegawaian</h1>
          </div>
          <div className={css.desc}>
            <p>
              Selamat datang di halaman Kepegawaian! Di sini, Anda dapat dengan
              mudah melihat persentase kehadiran dan daftar lengkap pegawai SMK
              Wikrama
            </p>
          </div>
        </div>
        <div className={css.img}>
          <Image
            src={"/logo2.png"}
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
