import React from "react";
import css from "./cuti.module.css";
import Image from "next/image";
import Link from "next/link";

export default function page({ data }: any) {
  return (
    <div className={"max-lg:!gap-8 max-lg:!grid-cols-1 " + css.Parent}>
      <div className={"max-lg:!gap-8 " + css.CardGaji}>
        <div className={css.AdjustCard}>
          <div className={css.head}>
            <Image
              src={"/wallet.png"}
              width={60}
              height={60}
              alt="wallet"
              style={{
                width: "clamp(50px, 2.5vw, 60px)",
                height: "clamp(50px, 2.5vw, 60px)",
              }}
            />
            <h1 className="max-md:!text-2xl">Gaji Bulan Ini</h1>
          </div>
          <div className={css.periode}>
            <p>Periode : 25 Sept - 26 Okt</p>
            <p>Tanggal : 30 Oktober 2023</p>
          </div>
        </div>
        <div className={css.adjustButton}>
          <h2 className="max-md:!text-sm">
            Rp <span className="max-md:!text-lg">3.500.000</span>
          </h2>
          <div className={css.detail}>
            <Image src={"/print.png"} width={38} height={38} alt="print" />
            <button>Lihat Detail</button>
          </div>
        </div>
      </div>
      {/* Cuti */}
      <div className={css.CardCuti}>
        <div className={"max-md:!gap-4 " + css.boxes}>
          <div className={css.box1}>
            <Link href={"Form-Cuti"}>
              <p className="max-md:!text-[12px]">Pengajuan Cuti</p>
            </Link>
          </div>
          <div className={css.box2}>
            <Link href={""}>
              <p className="max-md:!text-[12px]">Penyetujuan Cuti</p>
            </Link>
          </div>
        </div>
        <div className="text-group">
          <div className={css.title}>
            <Image src={"/anoun.png"} width={55} height={55} alt="announ" />
            <h1>Announcement</h1>
          </div>
          <div className={css.teks}>
            <p>
              Sisa hari cuti anda adalah{" "}
              {Object.keys(data).length > 0 ? (
                data.days_off
              ) : (
                <span className="min-w-[60px]  text-2xl animate-colorChange text-transparent  rounded-2xl ">
                  Name
                </span>
              )}{" "}
              hari
            </p>
            <p>Anda memiliki pemberitahuan terkait penyetujuan cuti</p>
          </div>
        </div>
      </div>
    </div>
  );
}
