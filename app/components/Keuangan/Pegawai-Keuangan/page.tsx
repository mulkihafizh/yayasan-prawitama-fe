"use client";

import React, { useEffect, useState } from "react";
import css from "./pegawai.module.css";
import LineChart from "./chart/page";
import UserData from "../../../../data/keuangan/page";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

const ChartPage = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.Pegawaitetap),
    datasets: [
      {
        label: "Pegawai Tetap",
        data: UserData.map((data) => data.Pegawaitetap),
        tension: 0.3,
        fill: true,
        backgroundColor: "rgba(117, 194, 246)",
      },
      {
        label: "Pegawai Tidak Tetap",
        data: UserData.map((data) => data.Pegawaitidaktetap),
        tension: 0.3,
        fill: true,
        backgroundColor: "rgba(31, 128, 194)",
      },
    ],
  });
  return (
    <div className={css.MainContainer}>
      <div className={css.title}>Jumlah Karyawan</div>
      <div className={css.jumlahKaryawan}>
        <div className={css.presentase}>
          <div className={css.box1}>
            <div className={css.number}>
              <div className={css.h1}>115</div>
            </div>
            <div className={css.kt}>Karyawan Tetap</div>
          </div>
          <div className={css.box2}>
            <div className={css.number}>
              <div className={css.h1}>96</div>
            </div>
            <div className={css.kt}>Karyawan Tidak Tetap</div>
          </div>
        </div>
        <div className={css.chart}>
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default ChartPage;
