import React from "react";
import css from "./task.module.css";
import Image from "next/image";
import Data from './data/page'

export default function page() {
  return (
    <div className={css.Container}>
      <h1>Tugas</h1>
      <div className={css.adjust}>
        <button>
          <Image src={"/plus.png"} width={24} height={24} alt="plus" />
          Tugas
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
            <td>{data.Jabatan}</td>
            <td>{data.Ja}</td>
            <td>{data.Deskripsi}</td>
            <td>{data.Pelaporan}</td>
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
