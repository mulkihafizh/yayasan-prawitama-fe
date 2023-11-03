"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import UserData from "@/data/pegawai/page";

function LineChart({ chartData }: any) {
  const userData = {
    labels: UserData.map((e) => e.month),
    datasets: [
      {
        label: "Pegawai Tetap",
        data: chartData?.map((e: any) => e.employment_type == "Permanent"),
        tension: 0.3,
        fill: true,
        backgroundColor: "rgba(252, 214, 114, 0.8)",
      },
      {
        label: "Pegawai Tidak Tetap",
        data: chartData?.map((e: any) => e.employment_type == "Contract"),
        tension: 0.3,
        fill: true,
        backgroundColor: "rgba(217, 157, 0, 0.9)",
      },
    ],
  };
  return <Line data={userData} />;
}

export default LineChart;
