import React from "react";
import css from "./list.module.css";
import Image from "next/image";

export default function page({ Users }: any) {
  return (
    <div className={css.MainContainer}>
      <div className={"max-md:!grid-cols-1 " + css.head}>
        <div className={css.title}>List Karyawan</div>
        <div className={" md:col-span-2 grid grid-cols-3 " + css.buttons}>
          <input type="search" className="col-span-2 px-5" />
          <div className="button-group grid grid-cols-2 gap-4">
            <button className="justify-self-end">Search</button>
            <button className="justify-self-end flex !items-center justify-center">
              <Image src={"/export1.png"} width={50} height={50} alt="img" />
              Export
            </button>
          </div>
        </div>
      </div>
      <table>
        <tbody>
          <tr>
            <th>NIP</th>
            <th>Nama</th>
            <th>Status</th>
            <th>Jabatan</th>
            <th>Sisa Cuti</th>
            <th>Tenggat Kontrak</th>
            <th>Action</th>
          </tr>
          {Users != null &&
          Users != undefined &&
          Object.keys(Users).length > 0 ? (
            Users.map((user: any) => {
              return (
                <tr>
                  <td>{user.id_pegawai}</td>
                  <td>{user.name}</td>
                  <td>{user.department.name}</td>
                  <td>{user.department.description}</td>
                  <td>{user.days_off}</td>
                  <td>{user.tenggat || "-"}</td>
                  <td
                    style={{
                      borderRight: "1px solid #e5e5e5",
                    }}
                  >
                    <Image
                      src={"/edit.png"}
                      width={20}
                      height={20}
                      alt="edit"
                    />
                    <Image src={"/doc.png"} width={20} height={20} alt="docs" />
                  </td>
                </tr>
              );
            })
          ) : (
            <>
              <tr>
                <td>
                  <span className="min-w-[60px]  text-sm animate-colorChange text-transparent  ml-2 rounded-2xl ">
                    Name Placeholder
                  </span>
                </td>
                <td>
                  <span className="min-w-[60px]  text-sm animate-colorChange text-transparent  ml-2 rounded-2xl ">
                    Name Placeholder
                  </span>
                </td>
                <td>
                  <span className="min-w-[60px]  text-sm animate-colorChange text-transparent  ml-2 rounded-2xl ">
                    Name Placeholder
                  </span>
                </td>
                <td>
                  <span className="min-w-[60px]  text-sm animate-colorChange text-transparent  ml-2 rounded-2xl ">
                    Name Placeholder
                  </span>
                </td>
                <td>
                  <span className="min-w-[60px]  text-sm animate-colorChange text-transparent  ml-2 rounded-2xl ">
                    Name Placeholder
                  </span>
                </td>
                <td>
                  <span className="min-w-[60px]  text-sm animate-colorChange text-transparent  ml-2 rounded-2xl ">
                    Name Placeholder
                  </span>
                </td>

                <td
                  style={{
                    borderRight: "1px solid #e5e5e5",
                  }}
                >
                  <Image src={"/edit.png"} width={20} height={20} alt="edit" />
                  <Image src={"/doc.png"} width={20} height={20} alt="docs" />
                </td>
              </tr>
              <tr>
                <td>
                  <span className="min-w-[60px]  text-sm animate-colorChange text-transparent  ml-2 rounded-2xl ">
                    Name Placeholder
                  </span>
                </td>
                <td>
                  <span className="min-w-[60px]  text-sm animate-colorChange text-transparent  ml-2 rounded-2xl ">
                    Name Placeholder
                  </span>
                </td>
                <td>
                  <span className="min-w-[60px]  text-sm animate-colorChange text-transparent  ml-2 rounded-2xl ">
                    Name Placeholder
                  </span>
                </td>
                <td>
                  <span className="min-w-[60px]  text-sm animate-colorChange text-transparent  ml-2 rounded-2xl ">
                    Name Placeholder
                  </span>
                </td>
                <td>
                  <span className="min-w-[60px]  text-sm animate-colorChange text-transparent  ml-2 rounded-2xl ">
                    Name Placeholder
                  </span>
                </td>
                <td>
                  <span className="min-w-[60px]  text-sm animate-colorChange text-transparent  ml-2 rounded-2xl ">
                    Name Placeholder
                  </span>
                </td>

                <td
                  style={{
                    borderRight: "1px solid #e5e5e5",
                  }}
                >
                  <Image src={"/edit.png"} width={20} height={20} alt="edit" />
                  <Image src={"/doc.png"} width={20} height={20} alt="docs" />
                </td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
}
