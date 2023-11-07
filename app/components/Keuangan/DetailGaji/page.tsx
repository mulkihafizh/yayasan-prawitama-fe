import React from "react";
import css from "./detailgaji.module.css";
import Image from "next/image";

export default function page() {
  return (
    <div className={css.Parent}>
      <div className={css.title}>
        <h1>Rincian Gaji Bulan Ini</h1>
        <p>Periode : 25 Sept - 26 Okt</p>
      </div>
      <div className={css.detail}>
        <div className={css.print}>
          <Image src={"/print.png"} width={38} height={38} alt="print" />
          <p>Print</p>
        </div>
        <div className={css.details}>
          <div className={css.line}>
            <p>Gaji</p>
            <div className={css.rectangle}></div>
          </div>
          <div className={css.desc}>
            <div className={css.container}>
              <div className={css.list}>
                <strong>Nama Lengkap</strong>
                <strong>Jabatan</strong>
                <strong>Status Kepegawaian</strong>
                <strong>Bulan</strong>
              </div>
              <div className={css.output}>
                <p>Sam</p>
                <p>Nganggur</p>
                <p>Ga nentu</p>
                <p>September</p>
              </div>
            </div>
            <div className={css.container}>
              <div className={css.list}>
                <strong>Detail Pendapatan (+)</strong>
                <strong>Honor</strong>
                <strong>Honor Mengajar</strong>
              </div>
              <div className={css.output}>
                <p>-</p>
                <p>-</p>
                <p>Rp 1.200.000</p>
              </div>
            </div>
            <div className={css.container}>
              <div className={css.list}>
                <strong>Benefit Jabatan</strong>
                <p>Honor Tugas Tambahan</p>
                <p>Tunjangan Wali Kelas</p>
              </div>
              <div className={css.output}>
                <p>-</p>
                <p>Rp 1.200.000</p>
                <p>Rp 1.200.000</p>
              </div>
            </div>
            <div className={css.container}>
              <div className={css.list}>
                <strong>Benefit Kinerja</strong>
                <p>Tunjangan Kehadiran</p>
                <p>Tunjangan Masa Kerja</p>
                <p>Tunjangan Pegawai Tetap</p>
                <p>Tunjangan Keluarga</p>
                <p>Tunjangan Pensiun</p>
              </div>
              <div className={css.output}>
                <p>-</p>
                <p>Rp 1.200.000</p>
                <p>Rp 1.200.000</p>
                <p>Rp 1.200.000</p>
                <p>Rp 1.200.000</p>
                <p>Rp 1.200.000</p>
              </div>
            </div>
            <div className={css.container}>
              <div className={css.list}>
                <strong>Benefit Kinerja</strong>
                <p>BPJS Ketenagakerjaan</p>
                <p>Kewajiban Sekolah</p>
                <p>BPJS Kesehatan</p>
              </div>
              <div className={css.output}>
                <p>-</p>
                <p>Rp 1.200.000</p>
                <p>Rp 1.200.000</p>
                <p>Rp 1.200.000</p>
              </div>
            </div>
            <div className={css.container}>
              <div className={css.lists}>
                <strong>Detail Potongan (-)</strong>
                <strong>BPJS</strong>
                <p>Ketenagakerjaan</p>
                <p>Kewajiban Sekolah</p>
                <p>Kewajiban Pegawai</p>
                <p>BPJS Kesehatan</p>
                <strong>Kesehatan</strong>
                <p>Kewajiban Sekolah</p>
                <p>Tambahan</p>
              </div>
              <div className={css.output}>
                <p>-</p>
                <p>-</p>
                <p>Rp 1.200.000</p>
                <p>Rp 1.200.000</p>
                <p>Rp 1.200.000</p>
                <p>Rp 1.200.000</p>
                <p>-</p>
                <p>Rp 1.200.000</p>
                <p>Rp 1.200.000</p>
              </div>
            </div>
            <div className={css.container}>
              <div className={css.list}>
                <strong>PPH21</strong>
                <strong>Infak & Sodakoh</strong>
                <strong>Iuran Pensiun</strong>
              </div>
              <div className={css.output}>
                <p>Rp 1.200.000</p>
                <p>Rp 1.200.000</p>
                <p>Rp 1.200.000</p>
              </div>
            </div>
            <div style={{ 
              border: 'none !important'
             }} className={css.container}>
              <div className={css.list}>
                <strong>Total</strong>
              </div>
              <div className={css.output}>
                <p>Rp 24.000.000</p>
              </div>
            </div>
            <button>Back</button>
          </div>
        </div>
      </div>
    </div>
  );
}
