import React from "react";
import css from "./form-cuti.module.css";
import { TextareaHTMLAttributes } from "react";

export default function page() {
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
        <form>
          <div className={css.inputs}>
            <div className={css.label}>
              <label>Nama</label>
              <input type="text" />
            </div>
            <div className={css.label}>
              <label>Jabatan</label>
              <input type="text" />
            </div>
          </div>
          <div className={css.inputs}>
            <div className={css.label}>
              <label>Cuti</label>
              <select>
                <option hidden>Tipe Cuti</option>
                <option>Cuti Melahirkan</option>
                <option>Cuti Izin</option>
                <option>Cuti Liburan</option>
                <option>Cuti Liburan</option>
                <option>Cuti Liburan</option>
              </select>
            </div>
            <div className={css.label}>
              <label>Keterangan Cuti</label>
              <input type="text" />
            </div>
          </div>
          <div className={css.inputs}>
            <div className={css.label}>
              <label>Guru yang dituju</label>
              <select>
                <option hidden>Pilih Guru yang Dituju</option>
                <option>Guru A</option>
                <option>Guru B</option>
                <option>Guru C</option>
              </select>
            </div>
            <div className={css.label}>
              <label>Catatan</label>
              <textarea name="catatan" id="" cols={20} rows={10}></textarea>
            </div>
          </div>
          <div className={css.inputs}>
            <div className={css.label}>
              <div className={css.dmy}>
              <label>Tanggal</label>
              <input
                style={{
                  maxWidth: "465px",
                }}
                type="date"
              />
              </div>
            </div>
            <div className={css.post}>
              <p>Cancel</p>
              <button>Kirim</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
