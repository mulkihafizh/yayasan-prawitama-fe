import React from "react";
import css from "./list.module.css";
import Image from "next/image";
import DataPegawai from "./data/page";

export default function page() {
  return (
    <div className={css.MainContainer}>
      <div className={css.head}>
        <div className={css.title}>List Karyawan</div>
        <div className={css.buttons}>
          <input type="search" />
          <button>Search</button>
          <button>
            <Image src={"/export1.png"} width={20} height={20} alt="img" />
            Export
          </button>
        </div>
      </div>
      <table>
        <tbody>
          <tr>
            <th>NIP</th>
            <th>Nama</th>
            <th>Status</th>
            <th>Jabatan</th>
            <th>Sisa Cuti</th>
            <th>Tenggat Kontrak</th>
          </tr>
          {DataPegawai.map((data, index) => (
            <>
              <tr>
                <td>{data.nip}</td>
                <td>{data.Nama}</td>
                <td>{data.Status}</td>
                <td>{data.Jabatan}</td>
                <td>{data.Sisacuti}</td>
                <td style={{ 
                    borderRight: "1px solid #e5e5e5"
                 }}>
                    {data.tenggat}
                    <Image
                    src={'/edit.png'}
                    width={20}
                    height={20}
                    alt="edit"
                    />
                    <Image
                    src={'/doc.png'}
                    width={20}
                    height={20}
                    alt="docs"
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
