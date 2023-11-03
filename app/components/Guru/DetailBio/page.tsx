import React from "react";
import css from "./bio.module.css";
import Image from "next/image";
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
            {data != null &&
            data != undefined &&
            Object.keys(data).length > 0 ? (
              data.name
            ) : (
              <span className="min-w-[60px]  text-2xl animate-colorChange !text-transparent  ml-1 rounded-2xl ">
                Name Placeholder
              </span>
            )}
          </p>
          <p>
            <span>Jenis Kelamin</span>{" "}
            {data != null &&
            data != undefined &&
            Object.keys(data).length > 0 ? (
              data.gender
            ) : (
              <span className="min-w-[60px]  text-2xl animate-colorChange !text-transparent  ml-1 rounded-2xl ">
                Name Placeholder
              </span>
            )}
          </p>
          <p>
            <span>NIP</span>{" "}
            {data != null &&
            data != undefined &&
            Object.keys(data).length > 0 ? (
              data.id_pegawai
            ) : (
              <span className="min-w-[60px]  text-2xl animate-colorChange !text-transparent  ml-1 rounded-2xl ">
                Name Placeholder
              </span>
            )}
          </p>
          <p>
            <span>NIK</span>{" "}
            {data != null &&
            data != undefined &&
            Object.keys(data).length > 0 ? (
              data.nik
            ) : (
              <span className="min-w-[60px]  text-2xl animate-colorChange !text-transparent  ml-1 rounded-2xl ">
                Name Placeholder
              </span>
            )}
          </p>
          <p>
            <span>NUPTK</span>{" "}
            {data != null &&
            data != undefined &&
            Object.keys(data).length > 0 ? (
              data.reg_number
            ) : (
              <span className="min-w-[60px]  text-2xl animate-colorChange !text-transparent  ml-1 rounded-2xl ">
                Name Placeholder
              </span>
            )}
          </p>
          <p>
            <span>Tempat Lahir</span>{" "}
            {data != null &&
            data != undefined &&
            Object.keys(data).length > 0 ? (
              data.birth_place
            ) : (
              <span className="min-w-[60px]  text-2xl animate-colorChange !text-transparent  ml-1 rounded-2xl ">
                Name Placeholder
              </span>
            )}
          </p>
          <p>
            <span>Tanggal Lahir</span>{" "}
            {data != null &&
            data != undefined &&
            Object.keys(data).length > 0 ? (
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
            {data != null &&
            data != undefined &&
            Object.keys(data).length > 0 ? (
              data.religion
            ) : (
              <span className="min-w-[60px]  text-2xl animate-colorChange !text-transparent  ml-1 rounded-2xl ">
                Name Placeholder
              </span>
            )}
          </p>
          <p>
            <span>No HP</span>{" "}
            {data != null &&
            data != undefined &&
            Object.keys(data).length > 0 ? (
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
