"use client";
import { useEffect, useState } from "react";
import React from "react";
import Navbar from "../components/Navbar-Dashboard/page";
import Header from "../components/Guru/Header-Guru/page";
import Cuti from "../components/Guru/Cuti/page";
import Biodata from "../components/Guru/Biodata/page";
import { getCookie } from "cookies-next";
import Loading from "../components/Loading/page";

export default function page() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/user/employee", {
      headers: {
        Authorization: "Bearer " + getCookie("token"),
      },
    }).then((res) => {
      res.json().then((data) => {
        setData(data.employee);
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
      <Header data={data} />
      <Cuti data={data} />
      <Biodata data={data} />
    </div>
  );
}
