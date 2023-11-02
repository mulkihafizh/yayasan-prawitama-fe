import React from "react";
import css from "./study.module.css";
import Image from "next/image";
import Data from '../../../../data/study/page'
import Link from "next/link";

export default function page() {
  return (
    <div className={css.Container}>
      <h1>Pendidikan</h1>
      <div className={css.adjust}>
        <button>
          <Image src={"/plus.png"} width={24} height={24} alt="plus" />
          Pendidikan
        </button>
      </div>
      <table>
        <tbody>
          {Data.map((data, index) => (
            <>
          <tr>
            <th>Jenjang</th>
            <th>Satuan Pendidikan</th>
            <th>Bidang Studi</th>
            <th>Tanggal Masuk</th>
            <th>Tanggal Lulus</th>
            <th>Gelar Akademik</th>
            <th>Dokumen</th>
            <th>Aksi</th>
          </tr>
          <tr>
            <td>{data.Jenjang}</td>
            <td>{data.St}</td>
            <td>{data.Bs}</td>
            <td>{data.Ts}</td>
            <td>{data.Tl}</td>
            <td>{data.Ga}</td>
            <td><Link href={'/#'}>Lihat disini</Link></td>
            <td>
              <Image
              src={'/edit2.png'}
              width={20}
              height={10}
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
