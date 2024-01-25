import React from "react";
import css from "./exp.module.css";
import Image from "next/image";

export default function page({ data }: { data: any }) {
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
          <thead>
            <tr>
              <th>Instansi</th>
              <th>Posisi</th>
              <th>Tanggal Mulai</th>
              <th>Tanggal Selesai</th>
              <th>Aksi</th>
            </tr>
          </thead>
          {data.work_history.length > 0 ? (
            data.work_history.map((e: any, index: Number) => (
              <>
                <tr>
                  <td>{data.company_name}</td>
                  <td>{data.position}</td>
                  <td>{data.start_date}</td>
                  <td>{data.end_date}</td>
                  <td>
                    <Image
                      src={"/edit2.png"}
                      width={20}
                      height={10}
                      alt="edit"
                    />
                  </td>
                </tr>
              </>
            ))
          ) : (
            <tr>
              <td
                className="text-center !justify-center text-xl !py-8"
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
