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
    labels: UserData.map((data) => data.jenis),
    datasets: [
      {
        label: "Pegawai",
        data: UserData.map((data) => data.JumlahPegawai),
        tension: 0.3,
        fill: true,
        backgroundColor: ["rgb(117, 194, 246)", "#0560fd"],
      },
    ],
  });
  return (
    <div className={css.MainContainer}>
      <div className={css.title}>Jumlah Karyawan</div>
      <div className={css.jumlahKaryawan}>
        <div className={css.presentase}>
          {UserData.map((data, index) => (
            <div key={data.jenis} className={index == 0 ? css.box1 : css.box2}>
              <div className={css.number}>
                <div className={"!text-lg " + css.h1}>{index == 0 ? 2 : 0}</div>
              </div>
              <div className={"!text-lg " + css.kt}>{data.jenis}</div>
            </div>
          ))}
        </div>
        <div className={css.chart}>
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default ChartPage;
