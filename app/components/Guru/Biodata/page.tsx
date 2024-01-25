"use client";
import React, { useState } from "react";
import css from "./bio.module.css";
import Image from "next/image";
import Bio from "../DetailBio/page";
import Experiance from "../Exp/page";
import Task from "../Task/page";
import Study from "../Study/page";
import Certificate from "../Certificate/page";

import { Fade } from "react-awesome-reveal";

export default function Page({ data, certi }: { data: any; certi: any }) {
  const [currentSection, setCurrentSection] = useState(1);
  const sections = [
    {
      id: 1,
      card: (
        <div className={css.card} onClick={() => setCurrentSection(1)}>
          <Image src={"/bio.png"} width={64} height={64} alt="" />
          <p>Biodata</p>
        </div>
      ),
      content: (
        // <Fade  delay={1e3} cascade={tru} damping={1e-1}>
        <Bio data={data} />
        // </Fade
      ),
    },
    {
      id: 2,
      card: (
        <div className={css.card} onClick={() => setCurrentSection(2)}>
          <Image src={"/exp.png"} width={64} height={64} alt="" />
          <p>Pengalaman</p>
        </div>
      ),
      content: <Experiance data={data} />,
    },
    {
      id: 3,
      card: (
        <div className={css.card} onClick={() => setCurrentSection(3)}>
          <Image src={"/task.png"} width={64} height={64} alt="" />
          <p>Tugas</p>
        </div>
      ),
      content: <Task />,
    },
    {
      id: 4,
      card: (
        <div className={css.card} onClick={() => setCurrentSection(4)}>
          <Image src={"/study.png"} width={64} height={64} alt="" />
          <p>Pendidikan</p>
        </div>
      ),
      content: <Study data={data} />,
    },
    {
      id: 5,
      card: (
        <div className={css.card} onClick={() => setCurrentSection(5)}>
          <Image src={"/report.png"} width={64} height={64} alt="" />
          <p>Sertifikat</p>
        </div>
      ),
      content: <Certificate data={certi} />,
    },
  ];
  return (
    <div className={css.MainContainer}>
      <div className={css.Container}>
        <div className={css.CardBox}>
          {sections.map((data, key) => {
            return data.card;
          })}
        </div>
        {sections.map((data, key) => {
          if (currentSection == data.id) return data.content;
        })}
      </div>
    </div>
  );
}
