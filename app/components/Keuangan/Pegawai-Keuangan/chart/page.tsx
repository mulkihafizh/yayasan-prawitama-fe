"use client";

import React from "react";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import UserData from "@/data/keuangan/page";

function LineChart() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "Pegawai Tetap",
        data: UserData.map((data) => data.PT),
        tension: 0.3,
        fill: true,
        backgroundColor: "rgba(117, 194, 246, 0.8)",
      },
      {
        label: "Pegawai Tidak Tetap",
        data: UserData.map((data) => data.PTT),
        tension: 0.3,
        fill: true,
        backgroundColor: "rgba(31, 128, 194, 0.9)",
      },
    ],
  });
  return <Line data={userData} />;
}

export default LineChart;
