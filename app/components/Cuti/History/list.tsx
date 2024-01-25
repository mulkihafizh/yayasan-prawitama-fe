import React from "react";
import Image from "next/image";

export default function list({ cuti }: { cuti: any }) {
  return (
    <div className="flex flex-col gap-5 px-8">
      {cuti !== undefined && cuti! == null && Object.keys(cuti).length > 0 ? (
        cuti.map((i: any, index: number) => {
          return (
            <div
              className="bg-[#D2DFFF] flex flex-col gap-12  rounded-2xl px-8 py-4"
              key={index}
            >
              <header className="flex gap-4 items-center">
                <Image
                  src={"/cuti-lahir.png"}
                  alt="Cuti Melahirkan"
                  width={50}
                  height={50}
                />
                <h3 className="font-bold text-[#0050CC]">
                  {new Date(i.date).toLocaleDateString("id-ID", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                </h3>
              </header>
              <div className="details grow flex flex-col gap-4">
                <div className="grid grid-cols-5">
                  <h4 className="col-span-2">Jumlah Cuti</h4>
                  <h4 className="col-span-3">1 Hari</h4>
                </div>
                <div className="grid grid-cols-5">
                  <h4 className="col-span-2">Jenis Cuti</h4>
                  <h4 className="col-span-3">Cuti {i.type}</h4>
                </div>
                <div className="grid grid-cols-5">
                  <h4 className="col-span-2">Keterangan</h4>
                  <h4 className="col-span-3">{i.reason}</h4>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h4 className="text-xl font-bold text-center">
          Tidak ada History Cuti
        </h4>
      )}
    </div>
  );
}
