import React from "react";
import css from "./certi.module.css";
import Image from "next/image";
import Data from './data/page'
import Link from "next/link";

export default function page() {
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
        <tbody>
          {Data.map((data, index) => (
            <>
          <tr>
            <th>Bidang Studi</th>
            <th>Tanggal Sertifikasi</th>
            <th>Nomor Sertifikat</th>
            <th>Nomor Peserta</th>
            <th>Tanggal Lulus</th> 
            <th>Bukti</th>
          </tr>
          <tr>
            <td>{data.Bidang}</td>
            <td>{data.Ts}</td>
            <td>{data.Ns}</td>
            <td>{data.Np}</td>
            <td><Link href={'/#'}>Sertifikasi Perangkat Lunak</Link></td>
            <td>
              <Image
              src={'/edit2.png'}
              width={32}
              height={30}
              alt="edit"
              />
            </td>
          </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
