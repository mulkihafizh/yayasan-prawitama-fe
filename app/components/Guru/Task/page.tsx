import React from "react";
import css from "./task.module.css";
import Image from "next/image";
import Data from '../../../../data/task/page'

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
            <th>Jabatan</th>
            <th>Jam Ajar</th>
            <th>Deskripsi</th>
            <th>Pelaporan</th>
            <th>Aksi</th>
          </tr>
          <tr>
            <td>{data.Jabatan}</td>
            <td>{data.Ja}</td>
            <td>{data.Deskripsi}</td>
            <td>
                <a href={data.Pelaporan} target="_blank" rel="noopener noreferrer">
                  Lihat Pelaporan
                </a>
              </td>
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
