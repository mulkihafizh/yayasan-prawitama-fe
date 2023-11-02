import React from "react";
import css from "./bio.module.css";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
// import Zoom from 'react-reveal/Zoom';

export default function page({ data }: any) {
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
            <span>Nama Lengkap</span>{" "}
            {data.name != null ? (
              data.name
            ) : (
              <span className="min-w-[60px]  text-2xl animate-colorChange !text-transparent  ml-1 rounded-2xl ">
                Name Placeholder
              </span>
            )}
          </p>
          <p>
            <span>Jenis Kelamin</span>{" "}
            {data.gender != null ? (
              data.gender
            ) : (
              <span className="min-w-[60px]  text-2xl animate-colorChange !text-transparent  ml-1 rounded-2xl ">
                Name Placeholder
              </span>
            )}
          </p>
          <p>
            <span>NIP</span>{" "}
            {data.id_pegawai != null ? (
              data.id_pegawai
            ) : (
              <span className="min-w-[60px]  text-2xl animate-colorChange !text-transparent  ml-1 rounded-2xl ">
                Name Placeholder
              </span>
            )}
          </p>
          <p>
            <span>NIK</span>{" "}
            {data.nik != null ? (
              data.nik
            ) : (
              <span className="min-w-[60px]  text-2xl animate-colorChange !text-transparent  ml-1 rounded-2xl ">
                Name Placeholder
              </span>
            )}
          </p>
          <p>
            <span>NUPTK</span>{" "}
            {data.reg_number != null ? (
              data.reg_number
            ) : (
              <span className="min-w-[60px]  text-2xl animate-colorChange !text-transparent  ml-1 rounded-2xl ">
                Name Placeholder
              </span>
            )}
          </p>
          <p>
            <span>Tempat Lahir</span>{" "}
            {data.birth_place != null ? (
              data.birth_place
            ) : (
              <span className="min-w-[60px]  text-2xl animate-colorChange !text-transparent  ml-1 rounded-2xl ">
                Name Placeholder
              </span>
            )}
          </p>
          <p>
            <span>Tanggal Lahir</span>{" "}
            {data.birth_date != null ? (
              new Date(data.birth_date).toLocaleString("id-ID", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            ) : (
              <span className="min-w-[60px]  text-2xl animate-colorChange !text-transparent  ml-1 rounded-2xl ">
                Name Placeholder
              </span>
            )}
          </p>
          <p>
            <span>Agama</span>{" "}
            {data.religion != null ? (
              data.religion
            ) : (
              <span className="min-w-[60px]  text-2xl animate-colorChange !text-transparent  ml-1 rounded-2xl ">
                Name Placeholder
              </span>
            )}
          </p>
          <p>
            <span>No HP</span>{" "}
            {data.phone_number != null ? (
              data.phone_number
            ) : (
              <span className="min-w-[60px]  text-2xl animate-colorChange !text-transparent  ml-1 rounded-2xl ">
                Name Placeholder
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
