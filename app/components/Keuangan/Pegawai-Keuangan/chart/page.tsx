"use client";

import React from "react";
import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import UserData from "@/data/keuangan/page";

function LineChart() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.Pegawaitetap),
    datasets: [
      {
        label: "Pegawai Tetap",
        data: UserData.map((data) => data.Pegawaitetap),
        tension: 0.3,
        fill: true,
        backgroundColor: "rgb(117, 194, 246)",
      },
      {
        label: "Pegawai Tidak Tetap",
        data: UserData.map((data) => data.Pegawaitidaktetap),
        tension: 0.3,
        fill: true,
        backgroundColor: "rgba(31, 128, 194.)",
      },
    ],
  });
  return <Doughnut data={userData} />;
}

export default LineChart;
