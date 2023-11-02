"use client";

import React, { useEffect, useState } from "react";
import css from "./pegawai.module.css";
import LineChart from "./chart/page";
import UserData from "@/data/pegawai/page";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

const ChartPage = () => {
  const userData = {
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "Pegawai Tetap",
        data: UserData.map((data) => data.PT),
        tension: 0.3,
        fill: true,
        backgroundColor: "rgba(252, 214, 114, 0.8)",
      },
      {
        label: "Pegawai Tidak Tetap",
        data: UserData.map((data) => data.PTT),
        tension: 0.3,
        fill: true,
        backgroundColor: "rgba(217, 157, 0, 0.9)",
      },
    ],
  };
  return (
    <div className={css.MainContainer}>
      <div className={css.title}>Jumlah Karyawan</div>
      <div
        className={"max-lg:!gap-8 max-lg:!grid-cols-1 " + css.jumlahKaryawan}
      >
        <div className={"max-md:!gap-3 " + css.presentase}>
          <div className={"max-md:!gap-2 " + css.box1}>
            <div className={css.number}>
              <div className={"max-md:!text-[16px] " + css.h1}>115</div>
            </div>
            <div className={"max-md:!text-[12px] " + css.kt}>
              Karyawan Tetap
            </div>
          </div>
          <div className={"max-md:!gap-2 " + css.box2}>
            <div className={css.number}>
              <div className={"max-md:!text-[16px] " + css.h1}>96</div>
            </div>
            <div className={"max-md:!text-[12px] " + css.kt}>
              Karyawan Tidak Tetap
            </div>
          </div>
        </div>
        <div className={css.chart}>
          <LineChart chartData={userData} />
        </div>
      </div>
    </div>
  );
};

export default ChartPage;
