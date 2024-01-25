import React from "react";
import css from "./certi.module.css";
import Image from "next/image";
import Link from "next/link";

export default function page({ data }: { data: any }) {
  return (
    <div className={css.Container}>
      <h1>Sertifikat</h1>
      <div className={css.adjust}>
        <button>
          <Image src={"/plus.png"} width={24} height={24} alt="plus" />
          Sertifikat
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Bidang Studi</th>
            <th>Tanggal Sertifikasi</th>
            <th>Dikeluarkan Oleh</th>
            <th>Waktu Berlaku</th>
            <th>Bukti</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((i: any, index: any) => (
              <tr>
                <td>{data.Bidang}</td>
                <td>{data.Ts}</td>
                <td>{data.Ns}</td>
                <td>{data.Np}</td>
                <td>
                  <Link href={"/#"}>Sertifikasi Perangkat Lunak</Link>
                </td>
                <td>
                  <Image src={"/edit2.png"} width={20} height={10} alt="edit" />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                className="!text-center !justify-center !text-xl !py-8"
                colSpan={5}
              >
                Belum ada data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
