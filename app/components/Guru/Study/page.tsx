import React from "react";
import css from "./study.module.css";
import Image from "next/image";
import Link from "next/link";

export default function page({ data }: { data: any }) {
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
        <thead>
          <tr>
            <th>Satuan Pendidikan</th>
            <th>Bidang Studi</th>
            <th>Tanggal Masuk</th>
            <th>Tanggal Lulus</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data !== null &&
          data !== undefined &&
          Object.keys(data.education_history).length > 0 ? (
            data.map((e: any, index: Number) => (
              <>
                <tr>
                  <td>{data.school_name}</td>
                  <td>{data.major}</td>
                  <td>{data.start_date}</td>
                  <td>{data.end_date}</td>
                  <td>
                    <Link href={"/#"}>Lihat disini</Link>
                  </td>
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
