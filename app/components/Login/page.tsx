"use client";
import React from "react";
import { useState } from "react";
import css from "./login.module.css";
import Image from "next/image";

export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          localStorage.setItem("token", data.token);
          if (data.user.role == "employee_admin") {
            window.location.href = "/Dashboard-Kepegawaian";
          } else if (data.user.role == "payroll_admin") {
            window.location.href = "/Dashboard-Keuangan";
          } else {
            window.location.href = "/Dashboard-Guru";
          }
        });
      } else {
        alert("Email atau Password Salah");
      }
    });
  };

  return (
    <div className={css.Parent}>
      <div className={css.left}>
        <div className={css.logo}>
          <Image src={"/logo.png"} width={50} height={50} alt="logo.img" />
        </div>
        <div className={css.teks}>
          <div className={css.title}>
            Platform Digital<br></br>Yayasan Prawitama
          </div>
          <div className={css.line}></div>

          <div className={css.desc}>
            <p>
              Platform digital khusus di Yayasan Prawitama dirancang untuk
              mengelola dengan efektif proses penggajian dan informasi staf
              sesuai dengan kebijakan yang berlaku.
            </p>
          </div>
        </div>
      </div>
      <div className={css.right}>
        <div className={css.adjustCenter}>
          <div className={css.title}>
            <h1>
              <span>Hello,</span>
            </h1>
            <h2>
              Welcome <span>Back!</span>
            </h2>
          </div>
          <div className={css.line}></div>
          <div className={css.form}>
            <div className={css.label}>
              <Image
                src={"/input-icon.png"}
                width={21}
                height={23}
                alt="img"
                style={{ position: "absolute", left: "20px", top: "15px" }}
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="email"
                placeholder="Enter your username or email"
              />
            </div>
            <div className={css.label}>
              <Image
                src={"/input-icon2.png"}
                width={24}
                height={22}
                alt="img"
                style={{ position: "absolute", left: "20px", top: "22px" }}
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name=""
                placeholder="enter your password"
              />
            </div>
            <div className={css.button}>
              <button type="submit" onClick={login}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
