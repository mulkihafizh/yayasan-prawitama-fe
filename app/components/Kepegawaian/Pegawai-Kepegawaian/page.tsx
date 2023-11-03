"use client";

import React, { useEffect, useState } from "react";
import css from "./pegawai.module.css";
import LineChart from "./chart/page";
import UserData from "@/data/pegawai/page";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

const ChartPage = ({ data }: any) => {
  return (
    <div className={css.MainContainer}>
      <div className={css.title}>Jumlah Karyawan</div>
      <div
        className={"max-lg:!gap-8 max-lg:!grid-cols-1 " + css.jumlahKaryawan}
      >
        <div className={"max-md:!gap-3 " + css.presentase}>
          <div className={"max-md:!gap-2 " + css.box1}>
            <div className={css.number}>
              <div className={"max-md:!text-[16px] " + css.h1}>
                {data != null &&
                data != undefined &&
                Object.keys(data).length > 0 ? (
                  data.filter(
                    (item: any) => item.employment_type == "Permanent"
                  ).length
                ) : (
                  <span className="min-w-[60px]  text-sm animate-colorChange text-transparent  ml-2 rounded-2xl ">
                    Name
                  </span>
                )}
              </div>
            </div>
            <div className={"max-md:!text-[12px] " + css.kt}>
              Karyawan Tetap
            </div>
          </div>
          <div className={"max-md:!gap-2 " + css.box2}>
            <div className={css.number}>
              <div className={"max-md:!text-[16px] " + css.h1}>
                {data != null &&
                data != undefined &&
                Object.keys(data).length > 0 ? (
                  data.filter((item: any) => item.employment_type == "Contract")
                    .length
                ) : (
                  <span className="min-w-[60px]  text-sm animate-colorChange text-transparent   rounded-2xl ">
                    Name
                  </span>
                )}
              </div>
            </div>
            <div className={"max-md:!text-[12px] " + css.kt}>
              Karyawan Tidak Tetap
            </div>
          </div>
        </div>
        <div className={css.chart}>
          {data != null && data != undefined && Object.keys(data).length > 0 ? (
            <LineChart chartData={data} />
          ) : (
            <span className="min-w-[60px]  text-xl animate-colorChange text-transparent   rounded-2xl ">
              Name Placeholder
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChartPage;
