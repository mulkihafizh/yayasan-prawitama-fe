import React from "react";
import Image from "next/image";
import css from "./header.module.css";

export default function page() {
  return (
    <div className={css.adjust}>
      <div className={"max-md:!max-h-[300px] " + css.container}>
        <div className={css.teks}>
          <div className={css.title}>
            <h1 className="max-[600px]:!text-base ">Kepegawaian</h1>
          </div>
          <div className={css.desc}>
            <p className="max-[600px]:!text-xs">
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
