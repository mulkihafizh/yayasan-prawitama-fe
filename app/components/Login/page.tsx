"use client";
import React from "react";
import { useState } from "react";
import css from "./login.module.css";
import Image from "next/image";
import { setCookie } from "cookies-next";

export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State untuk nentuin pass di tampilin apa engga


  const login = async () => {
    await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setCookie("token", data.token, {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
          });
          setCookie("role", data.user.role, {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
          });
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
                width={18}
                height={18}
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
            <div className={css.inputContainer}>
              <Image
            src={"/input-icon2.png"}
            width={20}
            height={20}
            alt="img"
            style={{ position: "absolute", left: "20px", top: "22px" }}
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            name=""
            placeholder="Enter your password"
          />
          <div className={css.eyeIcon} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <Image src={"/eye-open.svg"} width={24} height={22} alt="eye-open" />
            ) : (
              <Image src={"/eye-close.svg"} width={24} height={22} alt="eye-close" />
            )}
          </div>
        </div>
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
