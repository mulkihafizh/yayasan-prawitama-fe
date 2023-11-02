"use client";
import { useEffect, useState } from "react";
import React from "react";
import Navbar from "../components/Navbar-Dashboard/page";
import Header from "../components/Guru/Header-Guru/page";
import Cuti from "../components/Guru/Cuti/page";
import Biodata from "../components/Guru/Biodata/page";

export default function page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      window.location.href = "/";
    }
    fetch("/api/user/employee", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      res.json().then((data) => {
        setData(data.employee);
      });
    });
  });

  return (
    <div className="DK">
      <Navbar />
      <Header data={data} />
      <Cuti />
      <Biodata data={data} />
    </div>
  );
}
