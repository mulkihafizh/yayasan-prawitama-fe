"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import React from "react";
import Navbar from "../../../components/Navbar-Dashboard/page";
import { getCookie } from "cookies-next";
import Loading from "../../../components/Loading/page";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faArrowRightFromBracket,
  faXmark,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faArrowRightFromBracket, faXmark, faMoneyBill);
config.autoAddCss = false;

export default function page() {
  const [data, setData] = useState<any>([]);
  const [payroll, setPayroll] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);
  const params = useParams();
  const periode = `25 ${new Date(
    new Date().setMonth(new Date().getMonth() - 1)
  ).toLocaleDateString("id-ID", {
    month: "long",
    year: "numeric",
  })}
    - 26 ${new Date().toLocaleDateString("id-ID", {
      month: "long",
      year: "numeric",
    })}
    `;

  useEffect(() => {
    fetch("/api/user/employee", {
      headers: {
        Authorization: "Bearer " + getCookie("token"),
      },
    }).then((res) => {
      res.json().then((a) => {
        setData(a.employee);
        fetch("/api/payroll/user/single/" + params?.id, {
          headers: {
            Authorization: "Bearer " + getCookie("token"),
          },
        }).then((res) => {
          res.json().then((c) => {
            setPayroll(c.data);
            setLoading(false);
          });
        });
      });
    });
  }, [getCookie]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="DK min-h-screen flex flex-col max-h-screen">
      <Navbar />
      <header className="flex flex-col mx-[76px] my-[10px]">
        <h1 className="text-2xl font-bold">Rincian Gaji Bulan Ini</h1>
        <p>Periode: {periode}</p>
      </header>
      <main className="flex grow flex-col bg-white rounded-xl mx-[76px] my-[42px]">
        <div className="py-8 px-12 title text-xl font-bold">
          <FontAwesomeIcon icon="money-bill" /> Gaji
        </div>
        <hr />
        <div className="data flex flex-col py-8 px-12 gap-4">
          <div className="item grid grid-cols-6">
            <div className="font-bold">Nama Lengkap</div>
            <div className="col-span-2">{data.name}</div>
          </div>
          <div className="item grid grid-cols-6">
            <div className="font-bold">Jabatan</div>
            <div className="col-span-2">{data.department.details}</div>
          </div>
          <div className="item grid grid-cols-6">
            <div className="font-bold">Status Kepegawaian</div>
            <div className="col-span-2">{data.employment_type}</div>
          </div>
          <div className="item grid grid-cols-6">
            <div className="font-bold">Bulan</div>
            <div className="col-span-2">
              {new Date(
                new Date().setMonth(payroll.month - 1)
              ).toLocaleDateString("id-ID", {
                month: "long",
              })}
            </div>
          </div>
          <hr />
          <h1 className="text-lg font-bold">Pendapatan</h1>
          {payroll.status === "pending" ? (
            <div className="text-lg ">
              Gaji anda sedang dalam proses penghitungan, mohon ditunggu...
            </div>
          ) : (
            <div>tes</div>
          )}
        </div>
      </main>
    </div>
  );
}
