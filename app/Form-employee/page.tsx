"use client";
import React from "react";
import { useState } from "react";
import css from "./employee.module.css";

export default function page() {
  const [jumlahP, setJP] = useState(1);
  const [jumlahAnak, setJA] = useState(0);
  const [isMarried, setMarried] = useState(false);
  let pekerjaan = [];
  let anak = [];

  for (let i = 0; i < jumlahP; i++) {
    pekerjaan.push(
      <>
        <div className={"!items-end " + css.AdjustRow}>
          <div className={css.Label}>
            <label>Riwayat Ke-{i + 1}</label>
            <label>Nama Perusahaan</label>
            <input type="text" placeholder="Nama Perusahaan"></input>
          </div>
          <div className={css.Label}>
            <label>Posisi</label>
            <input type="text" placeholder="Posisi"></input>
          </div>
        </div>
        <div className={"!items-end " + css.AdjustRow}>
          <div className={css.Label}>
            <label>Tanggal Mulai</label>
            <input type="date" placeholder="Nama Perusahaan"></input>
          </div>
          <div className={css.Label}>
            <label>Tanggal Selesai</label>
            <input type="date" placeholder="Posisi"></input>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={css.header}>
        <h1>Form Create Employee</h1>
      </div>

      <div className={css.Container}>
        <div className={css.form}>
          <div className={css.AdjustRow}>
            <div className={css.Label}>
              <label>Email</label>
              <input type="text" placeholder="Email"></input>
            </div>
            <div className={css.Label}>
              <label>Password</label>
              <input type="password" placeholder="Password"></input>
            </div>
            <div className={css.Label}>
              <label>Name</label>
              <input type="text" placeholder="Name"></input>
            </div>
          </div>

          <div className={css.AdjustRow}>
            <div className={css.Label}>
              <label>ID</label>
              <input type="text" placeholder="ID Pegawai"></input>
            </div>
            <div className={css.Label}>
              <label>Reg Number</label>
              <input type="text" placeholder="Registrasi Number"></input>
            </div>
            <div className={css.Label}>
              <label>Certi Number</label>
              <input type="text" placeholder="Certificate Number"></input>
            </div>
          </div>

          <div className={css.AdjustRow}>
            <div className={css.Label}>
              <label>NIK</label>
              <input type="text" placeholder="NIK Pegawai"></input>
            </div>
            <div className={css.Label}>
              <label>Religion</label>
              <select>
                <option hidden>Agama</option>
                <option>Islam</option>
                <option>Kristen Protestan</option>
                <option>Kristen Katolik</option>
                <option>Buddha</option>
                <option>Hindu</option>
                <option>Konghucu</option>
              </select>
            </div>
            <div className={css.Label}>
              <label>Birth Date</label>
              <input type="date"></input>
            </div>
          </div>

          <div className={css.AdjustRow}>
            <div className={css.Label}>
              <label>Birth Place</label>
              <input type="text" placeholder="Tempat Lahir"></input>
            </div>
            <div className={css.Label}>
              <label>Age</label>
              <input type="text" placeholder="Usia"></input>
            </div>
            <div className={css.Label}>
              <label>Start Working</label>
              <input type="date"></input>
            </div>
          </div>

          <div className={css.AdjustRow}>
            <div className={css.Label}>
              <label>SK</label>
              <input type="text" placeholder="Sk Number"></input>
            </div>
            <div className={css.Label}>
              <label>Graduation Date</label>
              <input type="date"></input>
            </div>
            <div className={css.Label}>
              <label>Blood Type</label>
              <select>
                <option hidden>Blood Type</option>
                <option>A</option>
                <option>B</option>
                <option>O</option>
                <option>AB</option>
              </select>
            </div>
          </div>

          <div className={css.AdjustRow}>
            <div className={css.Label}>
              <label>Department</label>
              <select name="" id="">
                <option value="" hidden selected>
                  Pilih Department
                </option>
                <option value="">Staff</option>
                <option value="">Guru</option>
              </select>
            </div>
            <div className={css.Label}>
              <label>Posisi</label>
              <select name="" id="">
                <option value="" hidden selected>
                  Pilih Posisi
                </option>
                <option value="">Kepala Program Keahlian PPLG</option>
              </select>
            </div>
            <div className={css.Label}>
              <label>Employment Type</label>
              <select>
                <option hidden>Employment Type</option>
                <option>Permanent</option>
                <option>Contract</option>
              </select>
            </div>
          </div>

          <div className={css.AdjustRow}>
            <div className={css.Label}>
              <label>Address</label>
              <input type="text" placeholder="Address"></input>
            </div>
            <div className={css.Label}>
              <label>Phone Number</label>
              <input type="text" placeholder="Phone Number"></input>
            </div>
            <div className={css.Label}></div>
          </div>

          <div className={css.AdjustRow}>
            <div className={css.Label}>
              <h1 className="text-xl ">Riwayat Pendidikan & Pekerjaan</h1>
            </div>
            <div className={css.Label}></div>
            <div
              className={
                "self-center justify-self-center !items-center !justify-center " +
                css.Label
              }
            >
              <div className={css.buttons}>
                <button
                  className={css.create}
                  onClick={() => setJP(jumlahP + 1)}
                >
                  Tambah
                </button>
              </div>
            </div>
          </div>

          {pekerjaan}

          <div className={"-mb-12 " + css.AdjustRow}>
            <div className={css.Label}>
              <h1 className="text-xl ">Pasangan</h1>
            </div>
            <div className={css.Label}></div>
            <div className={css.Label}></div>
          </div>

          <div className={css.AdjustRow}>
            <div className={css.Label}>
              <label>Status Pernikahan</label>
              <select
                name="marriage"
                id="marriage"
                onChange={() => {
                  const value = (
                    document.getElementById("marriage") as HTMLInputElement
                  ).value;
                  if (value === "true") {
                    setMarried(true);
                  } else {
                    setMarried(false);
                  }
                }}
              >
                <option value="" hidden selected>
                  Pilih Status
                </option>
                <option value="true">Menikah</option>
                <option value="false">
                  Tidak (Belum, Cerai, Meninggal Dunia)
                </option>
              </select>
            </div>
            <div className={css.Label}>
              {isMarried ? (
                <>
                  <label>Nama Pasangan</label>
                  <input type="text" placeholder="Nama Pasangan"></input>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className={css.AdjustRow}>
            <div className={css.buttons}>
              <button className={css.cancel}>Cancel</button>
              <button className={css.create}>Create</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
