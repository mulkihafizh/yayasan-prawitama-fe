import React from "react";
import css from "./nav.module.css";
import Image from "next/image";

export default function page() {
  return (
    <div className={css.container}>
      <div className={css.teks}>
        <div className={css.title}>Dashboard</div>
        <div className={css.date}>
          <p>
            <span>Monday</span>, 9 October 2023
          </p>
        </div>
      </div>
      <div className={css.notif}>
        <Image src={"/notif.png"} width={30} height={30} alt="notif" />
        <Image src={"/set.png"} width={30} height={30} alt="notif" />
      </div>
    </div>
  );
}
