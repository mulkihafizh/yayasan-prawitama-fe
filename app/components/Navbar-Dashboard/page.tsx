"use strict";
import React from "react";
import { useState } from "react";
import css from "./nav.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faArrowRightFromBracket,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faArrowRightFromBracket, faXmark);
config.autoAddCss = false;

export default function page() {
  const [logout, setLogout] = useState(false);

  const capitalize = (s: string) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const path = usePathname()?.split("/");
  function toggleLogout() {
    setLogout(!logout);
    console.log(logout);
  }

  function logoutElement() {
    return (
      <div className="absolute top-0 right-0 p-4 rounded-xl  bg-white z-50">
        <div className="flex flex-col items-center justify-center h-full"></div>
        <div className="text-xl font-bold text-gray-800">Are you sure?</div>
        <div className="flex gap-3 mt-4">
          <button className="bg-red-500 text-white px-6 py-2 rounded-md">
            <Link href={"/logout"}>Logout</Link>
          </button>
          <button
            className="bg-gray-300 text-gray-800 px-6 py-2 rounded-md"
            onClick={() => setLogout(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

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
        <div className="routes flex gap-1 text-[#0560fd] font-semibold">
          {path?.map((i: any, index: number) => {
            if (index > 0) {
              return (
                <>
                  <Link
                    href={
                      index === 1 ? `/${i}` : `${usePathname()?.toString()}`
                    }
                  >
                    {index !== path.length - 1
                      ? `${capitalize(i)}`
                      : capitalize(i)}
                  </Link>
                  {index !== path.length - 1 ? (
                    <span className="text-black">|</span>
                  ) : null}
                </>
              );
            }
          })}
        </div>
      </div>
      <div className={"relative z-50 " + css.notif}>
        <FontAwesomeIcon
          className="cursor-pointer text-red-600 text-2xl"
          icon="arrow-right-from-bracket"
          onClick={() => toggleLogout()}
        />
        {logout ? logoutElement() : null}
      </div>
    </div>
  );
}
