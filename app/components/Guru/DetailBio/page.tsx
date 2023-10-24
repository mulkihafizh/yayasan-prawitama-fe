import React from "react";
import css from "./bio.module.css";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
// import Zoom from 'react-reveal/Zoom';

export default function page() {
  return (
    <div className={css.DetailContainer}>
      <div className={css.title}>
        <h3>Biodata</h3>
      </div>
      <div className={css.DetailBox}>
        <div className={css.line}>
          <div className={css.head}>
            <p>Identitas</p>
            <div className={css.edit}>
              <Image
                src={"/edit2.png"}
                width={32}
                height={32}
                alt="edit"
                // style={{
                //   position: "absolute",
                //   bottom: "20px",
                //   right: "68px",
                // }}
              />
              <Image
                src={"/up.png"}
                width={32}
                height={32}
                alt="up"
                // style={{
                //   position: "absolute",
                //   bottom: "20px",
                // }}
              />
            </div>
          </div>
          <div className={css.rectangles}></div>
        </div>
        <div className={css.detail}>
          <p>
            <span>Nama Lengkap</span> User
          </p>
          <p>
            <span>Jenis Kelamin</span> Laki
          </p>
          <p>
            <span>NIP</span> 12108755
          </p>
          <p>
            <span>NIK</span> 12108755
          </p>
          <p>
            <span>NUPTK</span> 12108755
          </p>
          <p>
            <span>Tempat Lahir</span> Belitung
          </p>
          <p>
            <span>Tanggal Lahir</span> 9 September 2006
          </p>
          <p>
            <span>Agama</span> Kristen Protestan
          </p>
          <p>
            <span>No HP</span>
          </p>
        </div>
      </div>
    </div>
  );
}
