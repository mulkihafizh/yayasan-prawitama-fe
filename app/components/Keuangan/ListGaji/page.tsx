import React from "react";
import css from "./listgaji.module.css";
import Image from "next/image";
import DataGaji from "../../../../data/gaji/page";
import Link from "next/link";

export default function page({ data }: { data: any }) {
  return (
    <div className={css.adjust}>
      <div className={css.Parent}>
        <div className={css.head}>
          <p className="text-xl font-bold">Data Gaji Karyawan</p>
          <div className={css.page}></div>
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
            {data.map((i: any, index: number) => (
              <>
                <tr>
                  <td>{i.id_pegawai}</td>
                  <td>{i.name}</td>
                  <td>{i.employment_type}</td>
                  <td>{i.department.details}</td>
                  <td>
                    {" "}
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(i.department.salary * i.attendance.total)}
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
