"use client";
import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar-Dashboard/page";
import Header from "../components/Kepegawaian/Header-Kepegawaian/page";
import JumlahPegawai from "../components/Kepegawaian/Pegawai-Kepegawaian/page";
import ListPegawai from "../components/Kepegawaian/ListPegawai/page";
import { getCookie } from "cookies-next";

export default function Page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/employee/get", {
      headers: {
        Authorization: "Bearer " + getCookie("token"),
      },
    }).then((res) => {
      res.json().then((data) => {
        setData(data.data);
      });
    });
  }, [getCookie]);
  return (
    <div className="DK">
      <Navbar />
      <Header />
      <JumlahPegawai data={data} />
      <ListPegawai Users={data} />
    </div>
  );
}
