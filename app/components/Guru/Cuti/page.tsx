import React, { useState } from "react";
import css from "./cuti.module.css";
import Image from "next/image";
import Link from "next/link";
import Modal from "./Modal/page";

export default function page({ data, payroll }: { data: any; payroll: any }) {
  const [modal, setModal] = useState(false);
  const periode = `25 ${new Date(
    new Date().setMonth(new Date().getMonth() - 1)
  ).toLocaleDateString("id-ID", {
    month: "long",
    year: "numeric",
  })}
    - 26 ${new Date().toLocaleDateString("id-ID", {
      month: "long",
      year: "numeric",
    })}
    `;

  const onClose = () => {
    setModal(false);
  };

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
            <p>Periode : {periode}</p>
            <p>
              Tanggal :{" "}
              {new Date().toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
        <div className={css.adjustButton}>
          <h2 className="max-md:!text-sm">
            <span className="max-md:!text-lg">
              {Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(data.department.salary * data.attendance.total)}
            </span>
          </h2>
          <div className={css.detail}>
            <Image src={"/print.png"} width={38} height={38} alt="print" />
            <Link href={`/dashboard-guru/gaji/${payroll[0]._id}`}>
              <button>Lihat Detail</button>
            </Link>
          </div>
        </div>
      </div>
      {/* Cuti */}
      <div className={css.CardCuti}>
        <div className={"max-md:!gap-4 " + css.boxes}>
          <div className={css.box1}>
            <Link href={"dashboard-guru/cuti"}>
              <p className="max-md:!text-[12px]">Pengajuan Cuti</p>
            </Link>
          </div>
          <div className={css.box1}>
            <Link href={"dashboard-guru/gaji"}>
              <p className="max-md:!text-[12px]">Payroll Gaji</p>
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
              {data != null &&
              data != undefined &&
              Object.keys(data).length > 0 ? (
                data.days_off
              ) : (
                <span className="min-w-[60px]  text-2xl animate-colorChange text-transparent  rounded-2xl ">
                  Name
                </span>
              )}{" "}
              hari
            </p>
            <p>
              {new Date(data.attendance.last).getDay() ==
              new Date(Date.now()).getDay() ? (
                <span className="text-green-600 font-bold">
                  Anda sudah absen hari ini!
                </span>
              ) : (
                <span className="font-bold">
                  Anda belum absen hari ini!{" "}
                  <span
                    className="text-blue-500 cursor-pointer underline font-normal"
                    onClick={() => setModal(true)}
                  >
                    klik disini untuk absen
                  </span>
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
      {modal && <Modal onClose={onClose} userId={data._id} />}
    </div>
  );
}
