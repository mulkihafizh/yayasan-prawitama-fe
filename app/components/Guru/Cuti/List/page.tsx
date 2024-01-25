import React from "react";
import css from "../../../Kepegawaian/ListPegawai/list.module.css";

export default function page({ cuti }: any) {
  return (
    <div className={"" + css.MainContainer}>
      <div className={"max-md:!grid-cols-1 " + css.head}>
        <div className={css.title}>List Cuti</div>
        <div className={" md:col-span-2 grid grid-cols-3 " + css.buttons}></div>
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
          {cuti != null && cuti != undefined && Object.keys(cuti).length > 0 ? (
            cuti.map((i: any, index: number) => {
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
                    <button className="bg-green-500 text-white px-6 py-2 rounded-md mr-4">
                      ✓
                    </button>

                    <button className="bg-red-500 text-white px-6 py-2 rounded-md">
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
