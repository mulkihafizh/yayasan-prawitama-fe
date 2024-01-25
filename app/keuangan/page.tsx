"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar-Dashboard/page";
import Header from "../components/Keuangan/Header-Keuangan/page";
import JumlahPegawai from "../components/Keuangan/Pegawai-Keuangan/page";
import ListGaji from "../components/Keuangan/ListGaji/page";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { getCookie } from "cookies-next";
import Loading from "../components/Loading/page";

library.add(faArrowRightFromBracket);
config.autoAddCss = false;

export default function page() {
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
      <JumlahPegawai />
      <ListGaji data={data} />
    </div>
  );
}
