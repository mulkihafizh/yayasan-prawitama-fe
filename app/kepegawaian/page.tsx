"use client";
import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar-Dashboard/page";
import Header from "../components/Kepegawaian/Header-Kepegawaian/page";
import JumlahPegawai from "../components/Kepegawaian/Pegawai-Kepegawaian/page";
import ListPegawai from "../components/Kepegawaian/ListPegawai/page";
import { getCookie } from "cookies-next";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Loading from "../components/Loading/page";

library.add(faArrowRightFromBracket);
config.autoAddCss = false;

export default function Page() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/employee/get", {
      headers: {
        Authorization: "Bearer " + getCookie("token"),
      },
    }).then((res) => {
      res.json().then((data) => {
        setData(data.data);
        setLoading(false);
      });
    });
  }, [getCookie]);

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return (
    <div className="DK">
      <Navbar />
      <Header />
      <JumlahPegawai data={data} />
      <ListPegawai Users={data} />
    </div>
  );
}
