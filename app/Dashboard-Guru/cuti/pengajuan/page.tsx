"use client";
import React, { useEffect, useState } from "react";
import css from "./form-cuti.module.css";
import { getCookie } from "cookies-next";
import Loading from "../../../components/Loading/page";
import Link from "next/link";

interface Employee {
  name: string;
  _id: string;
}

export default function page() {
  const [data, setData] = useState<Employee[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [submitData, setSubmitData] = useState<any>({});

  const submitCuti = async () => {
    await fetch("/api/cuti/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("token"),
      },
      body: JSON.stringify(submitData),
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

  useEffect(() => {
    fetch("/api/employee/role/get", {
      headers: {
        Authorization: "Bearer " + getCookie("token"),
      },
    }).then((res) => {
      res.json().then((data) => {
        setData(data.data);
        setLoading(false);
      });
    });
  }, [getCookie]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className={css.header}>
        <h1>Form Pengajuan Cuti</h1>
        <p>
          <span>Perhatian!</span> Pengajuan cuti dibuat saat jauh-jauh hari
          sebelum pengisian form pengajuan
        </p>
      </div>

      <div className={css.adjust}>
        <div className={css.form}>
          <div className={css.inputs}>
            <div className={css.label}>
              <label>Nama</label>
              <input
                type="text"
                onChange={(e) =>
                  setSubmitData({ ...submitData, name: e.target.value })
                }
              />
            </div>
            <div className={css.label}>
              <label>Jabatan</label>
              <input
                type="text"
                onChange={(e) =>
                  setSubmitData({ ...submitData, department: e.target.value })
                }
              />
            </div>
          </div>
          <div className={css.inputs}>
            <div className={css.label}>
              <label>Cuti</label>
              <select
                onChange={(e) =>
                  setSubmitData({ ...submitData, type: e.target.value })
                }
              >
                <option hidden value="">
                  Tipe Cuti
                </option>
                <option value="Cuti">Cuti Melahirkan</option>
                <option value="Izin">Cuti Izin</option>
                <option value="Sakit">Cuti Sakit</option>
              </select>
            </div>
            <div className={css.label}>
              <label>Keterangan Cuti</label>
              <input
                type="text"
                onChange={(e) =>
                  setSubmitData({ ...submitData, reason: e.target.value })
                }
              />
            </div>
          </div>
          <div className={css.inputs}>
            <div className={css.label}>
              <label>Guru yang dituju</label>
              <select
                onChange={(e) =>
                  setSubmitData({ ...submitData, target_id: e.target.value })
                }
              >
                <option hidden>Pilih Guru yang Dituju</option>
                {data.map((e, index) => (
                  <option key={index} value={e._id}>
                    {e.name}
                  </option>
                ))}
              </select>
            </div>
            <div className={css.label}>
              <label>Catatan</label>
              <textarea
                name="catatan"
                onChange={(e) =>
                  setSubmitData({ ...submitData, notes: e.target.value })
                }
                id=""
                cols={20}
                rows={10}
              ></textarea>
            </div>
          </div>
          <div className={css.inputs}>
            <div className={css.label}>
              <div className={css.dmy}>
                <label>Tanggal</label>
                <input
                  onChange={(e) =>
                    setSubmitData({ ...submitData, date: e.target.value })
                  }
                  style={{
                    maxWidth: "465px",
                  }}
                  type="date"
                />
              </div>
            </div>
            <div className={css.post}>
              <Link href={"/dashboard-guru/cuti"}>Cancel</Link>
              <button onClick={submitCuti}>Kirim</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
