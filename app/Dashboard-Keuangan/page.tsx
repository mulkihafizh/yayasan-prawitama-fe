import React from "react";
import Navbar from "../components/Navbar-Dashboard/page";
import Header from "../components/Keuangan/Header-Keuangan/page";
import JumlahPegawai from "../components/Keuangan/Pegawai-Keuangan/page"
import CardGaji from "../components/Keuangan/CardGaji/page"
import ListGaji from "../components/Keuangan/ListGaji/page"

export default function page() {
  return (
    <div className="DK">
      <Navbar />
      <Header />
      <JumlahPegawai />
      <CardGaji />
      <ListGaji />
    </div>
  );
}
