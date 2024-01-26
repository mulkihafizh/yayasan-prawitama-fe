"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar-Dashboard/page";
import Main from "../../components/Cuti/Main/page";
import History from "../../components/Cuti/History/page";
import Loading from "../../components/Loading/page";
import { getCookie } from "cookies-next";
import { faCuttlefish } from "@fortawesome/free-brands-svg-icons";

export default function page() {
  const [data, setData] = useState([]);
  const [targetCuti, setTarget] = useState([]);
  const [cuti, setCuti] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const user: any = await fetch("/api/user/employee", {
        headers: {
          Authorization: "Bearer " + getCookie("token"),
        },
      }).then((res) => {
        res.json().then((data) => {
          setData(data.employee);
          targetCuti(data.employee._id);
          userCuti(data.employee._id);
          setLoading(false);
        });
      });

      const targetCuti = async (id: string) => {
        await fetch("/api/cuti/target/" + id, {
          headers: {
            Authorization: "Bearer " + getCookie("token"),
          },
        }).then((res) => {
          res.json().then((data) => {
            setTarget(data);
          });
        });
      };

      const userCuti = async (id: string) => {
        await fetch("/api/cuti/user/" + id, {
          headers: {
            Authorization: "Bearer " + getCookie("token"),
          },
        }).then((res) => {
          res.json().then((data) => {
            setCuti(data);
          });
        });
      };
    };
    fetchData();
  }, [getCookie]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-[#F4F4F4] w-screen min-h-screen pb-8">
      <Navbar />
      <div className=" w-screen grid grid-cols-12 px-[76px] gap-20">
        {data != null &&
        data != undefined &&
        targetCuti != null &&
        targetCuti != undefined &&
        cuti != null &&
        cuti != undefined &&
        Object.keys(data).length > 0 &&
        Object.keys(targetCuti).length > 0 &&
        Object.keys(cuti).length > 0 ? (
          <>
            {" "}
            <Main data={data} target={targetCuti} cuti={cuti} />
            <History cuti={cuti} />{" "}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
