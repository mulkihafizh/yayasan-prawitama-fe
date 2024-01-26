"use client";
import { useEffect, useState } from "react";
import React from "react";
import Navbar from "../components/Navbar-Dashboard/page";
import Header from "../components/Guru/Header-Guru/page";
import Cuti from "../components/Guru/Cuti/page";
import Biodata from "../components/Guru/Biodata/page";
import { getCookie } from "cookies-next";
import Loading from "../components/Loading/page";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faArrowRightFromBracket,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faArrowRightFromBracket, faXmark);
config.autoAddCss = false;

export default function page() {
  const [data, setData] = useState([]);
  const [certificate, setCertificate] = useState([]);
  const [payroll, setPayroll] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/user/employee", {
      headers: {
        Authorization: "Bearer " + getCookie("token"),
      },
    }).then((res) => {
      res.json().then((a) => {
        setData(a.employee);
        fetch("/api/certificate/user/" + a.employee._id, {
          headers: {
            Authorization: "Bearer " + getCookie("token"),
          },
        }).then((res) => {
          res.json().then((i) => {
            setCertificate(i.data);
            fetch("/api/payroll/user/" + a.employee._id, {
              headers: {
                Authorization: "Bearer " + getCookie("token"),
              },
            }).then((res) => {
              res.json().then((c) => {
                setPayroll(c.payroll);
                setLoading(false);
              });
            });
          });
        });
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
      <Cuti data={data} payroll={payroll} />
      <Biodata data={data} certi={certificate} />
    </div>
  );
}
