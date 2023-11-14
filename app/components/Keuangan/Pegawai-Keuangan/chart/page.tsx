  "use client";

import React from "react";
import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import UserData from "@/data/keuangan/page";

function LineChart() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.jenis),
    datasets: [
      {
        label: "Pegawai",
        data: UserData.map((data) => data.JumlahPegawai),
        tension: 0.3,
        fill: true,
        backgroundColor: ["rgb(117, 194, 246)", "rgb(255, 193, 54)"],
      },
    ],
  });
  return <Doughnut data={userData} />;  
}

export default LineChart;
