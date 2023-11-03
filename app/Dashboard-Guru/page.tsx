"use client";
import { useEffect, useState } from "react";
import React from "react";
import Navbar from "../components/Navbar-Dashboard/page";
import Header from "../components/Guru/Header-Guru/page";
import Cuti from "../components/Guru/Cuti/page";
import Biodata from "../components/Guru/Biodata/page";
import { getCookie } from "cookies-next";

export default function page() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api/user/employee", {
      headers: {
        Authorization: "Bearer " + getCookie("token"),
      },
    }).then((res) => {
      res.json().then((data) => {
        setData(data.employee);
      });
    });
  }, [getCookie]);

  return (
    <div className="DK">
      <Navbar />
      <Header data={data} />
      <Cuti data={data} />
      <Biodata data={data} />
    </div>
  );
}
