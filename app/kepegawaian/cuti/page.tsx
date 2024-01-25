"use client";
import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar-Dashboard/page";
import List from "@/app/components/Guru/Cuti/List/page";
import { getCookie } from "cookies-next";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Loading from "../../components/Loading/page";

library.add(faArrowRightFromBracket);
config.autoAddCss = false;

export default function Page() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/cuti/get", {
      headers: {
        Authorization: "Bearer " + getCookie("token"),
      },
    }).then((res) => {
      res.json().then((data) => {
        setData(data);
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
    <div className="DK min-h-screen">
      <Navbar />
      <List cuti={data} />
    </div>
  );
}
