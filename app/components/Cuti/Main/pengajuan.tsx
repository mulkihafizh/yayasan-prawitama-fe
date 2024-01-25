import React from "react";
import css from "./main.module.css";
import Link from "next/link";
import { getCookie } from "cookies-next";
export default function pengajuan({ target }: { target: any }) {
  const update = async (e: any, id: any) => {
    await fetch("/api/cuti/update/" + id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("token"),
      },
      body: JSON.stringify({ status: e.target.value }),
    })
      .then((res) => {
        res.json().then((data) => {
          console.log(data);
          window.location.href = "/dashboard-guru/cuti";
        });
      })
      .catch((err) => {
        console.log(err);
        window.location.href = "/dashboard-guru/cuti";
      });
  };
  return (
    <div className="bg-white rounded-2xl flex-grow p-5 flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Pengajuan Cuti</h1>

        <Link
          href={"/dashboard-guru/cuti/pengajuan"}
          className="bg-[#387cdb9e] px-4 py-2 rounded-lg font-bold"
        >
          Ajukan Cuti
        </Link>
      </div>
      <table className="text-center">
        <thead className="pb-12">
          <tr>
            <th>Guru/Staff</th>
            <th>Tanggal</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody className={css.tbody}>
          {target.length > 0 ? (
            target.map((i: any, index: number) => {
              return (
                <tr>
                  <td className="flex flex-col text-start break-words">
                    <h4 className="text-xl font-bold break-words">{i.name}</h4>
                    <p>{i.department}</p>
                  </td>
                  <td>
                    {new Date(i.date).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </td>
                  <td>{i.type}</td>
                  <td>
                    <button
                      className="bg-green-500 text-white px-6 py-2 rounded-md mr-4"
                      value="Diterima"
                      onClick={(e) => {
                        update(e, i._id);
                      }}
                    >
                      ✓
                    </button>

                    <button
                      className="bg-red-500 text-white px-6 py-2 rounded-md"
                      value="Ditolak"
                      onClick={(e) => {
                        update(e, i._id);
                      }}
                    >
                      x
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={4} className=" text-center break-words">
                <h4 className="text-xl font-bold break-words">-</h4>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
