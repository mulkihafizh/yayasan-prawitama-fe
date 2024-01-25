import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function page({
  onClose,
  userId,
}: {
  onClose: any;
  userId: any;
}) {
  const handleClose = () => {
    onClose();
  };

  const handleAbsen = () => {
    fetch("/api/employee/absen", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: userId,
      }),
    }).then(() => {
      window.location.reload();
    });
  };
  return (
    <div className=" w-screen h-screen flex items-center justify-center top-0 left-0 fixed bg-black bg-opacity-60">
      <div className="modal min-w-[30%] bg-white pt-12 pb-6 px-6 rounded-xl relative">
        <span
          className="cursor-pointer absolute right-4 top-4"
          onClick={() => handleClose()}
        >
          <FontAwesomeIcon icon={["fas", "xmark"]} className=" text-2xl" />
        </span>
        <div className="flex flex-col gap-8">
          <div className="text flex flex-col">
            <h1 className="text-2xl font-bold">
              Absen Tanggal{" "}
              {new Date().toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}{" "}
            </h1>
            <p className="text-sm text-gray-500">
              Apakah anda yakin ingin absen?
            </p>
          </div>
          <div className="flex gap-4">
            <button
              className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4"
              onClick={() => handleAbsen()}
            >
              Absen
            </button>
            <button className="bg-red-500 text-white rounded-lg px-4 py-2 mt-4">
              Batal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
