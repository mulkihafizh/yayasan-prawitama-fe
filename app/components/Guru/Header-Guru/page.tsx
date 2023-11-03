import React from "react";
import css from "./headerguru.module.css";
import Image from "next/image";

export default function page({ data }: any) {
  return (
    <div className={css.adjust}>
      <div className={"max-md:!max-h-[300px] " + css.container}>
        <div className={css.teks}>
          <div className={css.title}>
            <h1 className="max-[600px]:!text-base ">
              Hai,
              {data != null &&
              data != undefined &&
              Object.keys(data).length > 0 ? (
                data.name
              ) : (
                <span className="min-w-[60px]  text-2xl animate-colorChange text-transparent  ml-2 rounded-2xl ">
                  Name Placeholder
                </span>
              )}
            </h1>
          </div>
          <div className={css.desc}>
            <p className="max-[600px]:!text-xs">
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
