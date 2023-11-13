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
            <span>
              {new Date().toLocaleDateString("id-ID", {
                weekday: "long",
              })}
            </span>
            ,{" "}
            {new Date().toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
      <div className={css.notif}>
        <Image src={"/notif.png"} width={27} height={27} alt="notif" />
        <Image src={"/set.png"} width={25} height={25} alt="notif" />
      </div>
    </div>
  );
}
