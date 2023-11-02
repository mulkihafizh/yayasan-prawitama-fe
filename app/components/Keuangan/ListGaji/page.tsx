import React from "react";
import css from "./listgaji.module.css";
import Image from "next/image";
import DataGaji from "./Data/page";
import Link from "next/link";

export default function page() {
  return (
    <div className={css.adjust}>
      <div className={css.Parent}>
        <div className={css.head}>
          <input type="search" placeholder="Adv.Search" />
          <div className={css.page}>
            <p>
              Records per page: <span>100</span>
              <Image src={"/sortdown.png"} width={15} height={15} alt="down" />
            </p>
            <Image src={"/print.png"} width={47} height={47} alt="print" />
          </div>
        </div>
        <table>
          <tbody>
            <tr>
              <th>NIP</th>
              <th>Nama</th>
              <th>Status</th>
              <th>Jabatan</th>
              <th>Gaji</th>
            </tr>
            {DataGaji.map((data, index) => (
              <>
                <tr>
                  <td>{data.nip}</td>
                  <td>{data.Nama}</td>
                  <td>{data.Status}</td>
                  <td>{data.Jabatan}</td>
                  <td>
                    {data.Gaji}
                    <button
                      style={{
                        backgroundColor: "#FFCA56",
                      }}
                    >
                      Edit
                    </button>
                    <button
                      style={{
                        backgroundColor: "#337ccf",
                      }}
                    >
                      <Link href={'/Detail-Gaji'}>
                      Detail
                      </Link>
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
