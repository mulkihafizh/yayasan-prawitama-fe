"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import UserData from "@/data/pegawai/page";

function LineChart({ chartData }: { chartData: any }) {
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
  return <Line data={userData} />;
}

export default LineChart;
