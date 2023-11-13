"use client";
import React from "react";
import { useEffect } from "react";
import { deleteCookie } from "cookies-next";

export default function page() {
  useEffect(() => {
    fetch("/api/user/logout", {
      method: "GET",
    }).then((res) => {
      if (res.ok) {
        deleteCookie("token");
        deleteCookie("role");
        window.location.href = "/";
      }
    });
  });
  return <></>;
}
