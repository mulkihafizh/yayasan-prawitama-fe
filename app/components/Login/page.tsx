import React from "react";
import css from "./login.module.css";
import Image from "next/image";

export default function page() {
  return (
    <div className={css.Parent}>
      <div className={css.left}>
        <div className={css.logo}>
          <Image src={"/logo.png"} width={75} height={75} alt="logo.img" />
        </div>
        <div className={css.teks}>
          <div className={css.title}>Platform Digital Yayasan Prawitama</div>
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
            <h2>Welcome <span>Back!</span></h2>
          </div>
          <form>
            <div className={css.label}>
              <Image
                src={"/input-icon.png"}
                width={21}
                height={23}
                alt="img"
                style={{ position: "absolute", left: "30px", top: "25px" }}
              />
              <input
                type="teks"
                name="email"
                placeholder="Enter your username or email"
              />
            </div>
            <div className={css.label}>
              <Image
                src={"/input-icon2.png"}
                width={21}
                height={23}
                alt="img"
                style={{ position: "absolute", left: "30px", top: "28px" }}
              />
              <input
                type="password"
                name=""
                placeholder="Enter your password"
              />
            </div>
            <div className={css.button}>
                <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
