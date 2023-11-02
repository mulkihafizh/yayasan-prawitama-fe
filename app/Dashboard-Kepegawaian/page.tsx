import React from "react";
import Navbar from "../components/Navbar-Dashboard/page";
import Header from "../components/Kepegawaian/Header-Kepegawaian/page";
import JumlahPegawai from "../components/Kepegawaian/Pegawai-Kepegawaian/page";
import ListPegawai from "../components/Kepegawaian/ListPegawai/page";

export default function page() {
  return (
    <div className="DK">
      <Navbar />
      <Header />
      <JumlahPegawai />
      <ListPegawai />
    </div>
  );
}
