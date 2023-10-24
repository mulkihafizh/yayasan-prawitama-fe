import React from "react";
import css from "./exp.module.css";
import Image from "next/image";
import Data from './data/page'

export default function page() {
  return (
    <div className={css.Container}>
      <h1>Pengalaman</h1>
      <div className={css.adjust}>
        <button>
          <Image src={"/plus.png"} width={24} height={24} alt="plus" />
          Pengalaman
        </button>
      </div>
      <table>
        <tbody>
          {Data.map((data, index) => (
            <>
          <tr>
            <th>Instansi/Perusahaan</th>
            <th>Posisi</th>
            <th>Tanggal Mulai</th>
            <th>Tanggal Selesai</th>
            <th>Aksi</th>
          </tr>
          <tr>
            <td>{data.Instansi}</td>
            <td>{data.Posisi}</td>
            <td>{data.Tm}</td>
            <td>{data.Ts}</td>
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
