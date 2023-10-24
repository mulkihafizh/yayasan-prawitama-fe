import React from "react";
import Navbar from "../components/Navbar-Dashboard/page";
import Header from "../components/Guru/Header-Guru/page";
import Cuti from "../components/Guru/Cuti/page"
import Biodata from "../components/Guru/Biodata/page"

export default function page() {
  return (
    <div className="DK">
      <Navbar />
      <Header />
      <Cuti />
      <Biodata />
    </div>
  );
}
