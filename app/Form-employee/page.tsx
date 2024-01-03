"use client";
import React from "react";
import { useState, useEffect } from "react";
import css from "./employee.module.css";
import Loading from "../components/Loading/page";

export default function page() {
  const [department, setDepartment] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const [data, setData] = useState({
    address: {},
    children: [],
    work_history: [],
    education_history: [],
  } as any);
  const [jumlahP, setJP] = useState(1);
  const [jumlahE, setJE] = useState(1);
  const [jumlahAnak, setJA] = useState(0);
  const [isMarried, setMarried] = useState(false);
  let pekerjaan = [];
  let anak = [];
  let education = [];
  let departmentData = [];

  useEffect(() => {
    async function getDepartment() {
      const res = await fetch("/api/department/get");
      const data = await res.json();
      setDepartment(data.data);
      setLoading(false);
    }
    getDepartment();
  }, []);

  const submitData = async () => {
    const res = await fetch("/api/employee/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(res);
  };

  for (let i = 0; i < jumlahAnak; i++) {
    anak.push(
      <>
        <div className={"!items-end " + css.AdjustRow}>
          <div className={css.Label}>
            <label>Nama Anak ke-{i + 1}</label>
            <input
              type="text"
              placeholder="Nama Anak"
              id={"anak" + i}
              onChange={() => {
                const value = (
                  document.getElementById("anak" + i) as HTMLInputElement
                ).value;
                setData((prevData: any) => {
                  const updatedChildren = [...prevData.children];
                  updatedChildren[i] = {
                    ...updatedChildren[i],
                    name: value,
                  };
                  return { ...prevData, children: updatedChildren };
                });
              }}
            ></input>
          </div>
          <div className={css.Label}>
            <label>Tanggal Lahir</label>
            <input
              type="date"
              placeholder="Tanggal Lahir"
              id={"bda" + i}
              onChange={() => {
                const value = (
                  document.getElementById("bda" + i) as HTMLInputElement
                ).value;
                setData((prevData: any) => {
                  const updatedChildren = [...prevData.children];
                  updatedChildren[i] = {
                    ...updatedChildren[i],
                    birth_date: value,
                  };
                  return { ...prevData, children: updatedChildren };
                });
              }}
            ></input>
          </div>
        </div>
        <div className={"!items-end " + css.AdjustRow}>
          <div className={css.Label}>
            <label>Tempat Lahir</label>
            <input
              type="text"
              placeholder="Tempat Lahir"
              id={"bpa" + i}
              onChange={() => {
                const value = (
                  document.getElementById("bpa" + i) as HTMLInputElement
                ).value;
                setData((prevData: any) => {
                  const updatedChildren = [...prevData.children];
                  updatedChildren[i] = {
                    ...updatedChildren[i],
                    birth_place: value,
                  };
                  return { ...prevData, children: updatedChildren };
                });
              }}
            ></input>
          </div>
          <div className={css.Label}>
            <label>Jenis Kelamin</label>
            <select
              name=""
              id={"ajk" + i}
              onChange={() => {
                const value = (
                  document.getElementById("ajk" + i) as HTMLInputElement
                ).value;
                setData((prevData: any) => {
                  const updatedChildren = [...prevData.children];
                  updatedChildren[i] = {
                    ...updatedChildren[i],
                    gender: value,
                  };
                  return { ...prevData, children: updatedChildren };
                });
              }}
            >
              <option value="" hidden selected>
                ---Pilih Jenis Kelamin---
              </option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>
        </div>
      </>
    );
  }

  for (let i = 0; i < jumlahP; i++) {
    pekerjaan.push(
      <>
        <div className={"!items-end " + css.AdjustRow}>
          <div className={css.Label}>
            <label>Riwayat Ke-{i + 1}</label>
            <label>Nama Perusahaan</label>
            <input
              type="text"
              id={"wh" + i}
              placeholder="Nama Perusahaan"
              onChange={() => {
                const value = (
                  document.getElementById("wh" + i) as HTMLInputElement
                ).value;
                setData((prevData: any) => {
                  const prevWH = [...prevData.work_history];
                  prevWH[i] = {
                    ...prevWH[i],
                    company_name: value,
                  };
                  return { ...prevData, work_history: prevWH };
                });
              }}
            ></input>
          </div>
          <div className={css.Label}>
            <label>Posisi</label>
            <input
              type="text"
              placeholder="Posisi"
              id={"wp" + i}
              onChange={() => {
                const value = (
                  document.getElementById("wp" + i) as HTMLInputElement
                ).value;
                setData((prevData: any) => {
                  const prevWH = [...prevData.work_history];
                  prevWH[i] = {
                    ...prevWH[i],
                    position: value,
                  };
                  return { ...prevData, work_history: prevWH };
                });
              }}
            ></input>
          </div>
        </div>
        <div className={"!items-end " + css.AdjustRow}>
          <div className={css.Label}>
            <label>Tanggal Mulai</label>
            <input
              type="date"
              placeholder="Nama Perusahaan"
              id={"ws" + i}
              onChange={() => {
                const value = (
                  document.getElementById("ws" + i) as HTMLInputElement
                ).value;
                setData((prevData: any) => {
                  const prevWH = [...prevData.work_history];
                  prevWH[i] = {
                    ...prevWH[i],
                    start_date: value,
                  };
                  return { ...prevData, work_history: prevWH };
                });
              }}
            ></input>
          </div>
          <div className={css.Label}>
            <label>Tanggal Selesai</label>
            <input
              type="date"
              placeholder="Posisi"
              id={"we" + i}
              onChange={() => {
                const value = (
                  document.getElementById("we" + i) as HTMLInputElement
                ).value;
                setData((prevData: any) => {
                  const prevWH = [...prevData.work_history];
                  prevWH[i] = {
                    ...prevWH[i],
                    end_date: value,
                  };
                  return { ...prevData, work_history: prevWH };
                });
              }}
            ></input>
          </div>
        </div>
      </>
    );
  }

  for (let i = 0; i < jumlahE; i++) {
    education.push(
      <>
        <div className={"!items-end " + css.AdjustRow}>
          <div className={css.Label}>
            <label>Riwayat Ke-{i + 1}</label>
            <label>Nama Sekolah</label>
            <input
              type="text"
              id={"eh" + i}
              placeholder="Nama Perusahaan"
              onChange={() => {
                const value = (
                  document.getElementById("eh" + i) as HTMLInputElement
                ).value;
                setData((prevData: any) => {
                  const prevEH = [...prevData.education_history];
                  prevEH[i] = {
                    ...prevEH[i],
                    school_name: value,
                  };
                  return { ...prevData, education_history: prevEH };
                });
              }}
            ></input>
          </div>
          <div className={css.Label}>
            <label>Jurusan</label>
            <input
              type="text"
              placeholder="Jurusan"
              id={"mj" + i}
              onChange={() => {
                const value = (
                  document.getElementById("mj" + i) as HTMLInputElement
                ).value;
                setData((prevData: any) => {
                  const prevEH = [...prevData.education_history];
                  prevEH[i] = {
                    ...prevEH[i],
                    major: value,
                  };
                  return { ...prevData, education_history: prevEH };
                });
              }}
            ></input>
          </div>
        </div>
        <div className={"!items-end " + css.AdjustRow}>
          <div className={css.Label}>
            <label>Tanggal Mulai</label>
            <input
              type="date"
              placeholder="Nama Perusahaan"
              id={"es" + i}
              onChange={() => {
                const value = (
                  document.getElementById("es" + i) as HTMLInputElement
                ).value;
                setData((prevData: any) => {
                  const prevEH = [...prevData.education_history];
                  prevEH[i] = {
                    ...prevEH[i],
                    start_date: value,
                  };
                  return { ...prevData, education_history: prevEH };
                });
              }}
            ></input>
          </div>
          <div className={css.Label}>
            <label>Tanggal Selesai</label>
            <input
              type="date"
              placeholder="Posisi"
              id={"ee" + i}
              onChange={() => {
                const value = (
                  document.getElementById("ee" + i) as HTMLInputElement
                ).value;
                setData((prevData: any) => {
                  const prevEH = [...prevData.education_history];
                  prevEH[i] = {
                    ...prevEH[i],
                    end_date: value,
                  };
                  return { ...prevData, education_history: prevEH };
                });
              }}
            ></input>
          </div>
        </div>
      </>
    );
  }

  for (let i = 0; i < department.length; i++) {
    departmentData.push(
      <option value={department[i]["details"]}>
        {department[i]["details"]}
      </option>
    );
  }

  if (isLoading)
    return (
      <>
        <Loading />
      </>
    );

  return (
    <>
      <div className={css.header}>
        <h1>Form Create Employee</h1>
      </div>

      <div className={css.Container}>
        <div className={css.form}>
          <div className={css.AdjustRow}>
            <div className={css.Label}>
              <label>Email</label>
              <input
                type="text"
                placeholder="Email"
                id="email"
                onChange={() => {
                  const value = (
                    document.getElementById("email") as HTMLInputElement
                  ).value;
                  setData({ ...data, email: value });
                }}
              ></input>
            </div>
            <div className={css.Label}>
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                onChange={() => {
                  const value = (
                    document.getElementById("password") as HTMLInputElement
                  ).value;
                  setData({ ...data, password: value });
                }}
              ></input>
            </div>
            <div className={css.Label}>
              <label>Nama Lengkap</label>
              <input
                type="text"
                placeholder="Nam Lengkap"
                id="name"
                onChange={() => {
                  const value = (
                    document.getElementById("name") as HTMLInputElement
                  ).value;
                  setData({ ...data, name: value });
                }}
              ></input>
            </div>
          </div>

          <div className={css.AdjustRow}>
            <div className={css.Label}>
              <label>ID</label>
              <input
                type="text"
                placeholder="ID Pegawai"
                id="id"
                onChange={() => {
                  const value = (
                    document.getElementById("id") as HTMLInputElement
                  ).value;
                  setData({ ...data, id_pegawai: value });
                }}
              ></input>
            </div>
            <div className={css.Label}>
              <label>Reg Number</label>
              <input
                type="text"
                placeholder="Registrasi Number"
                id="reg"
                onChange={() => {
                  const value = (
                    document.getElementById("reg") as HTMLInputElement
                  ).value;
                  setData({ ...data, reg_number: value });
                }}
              ></input>
            </div>
            <div className={css.Label}>
              <label>Certi Number</label>
              <input
                type="text"
                placeholder="Certificate Number"
                id="certi"
                onChange={() => {
                  const value = (
                    document.getElementById("certi") as HTMLInputElement
                  ).value;
                  setData({ ...data, certi_number: value });
                }}
              ></input>
            </div>
          </div>

          <div className={css.AdjustRow}>
            <div className={css.Label}>
              <label>NIK</label>
              <input
                type="text"
                placeholder="NIK Pegawai"
                id="nik"
                onChange={() => {
                  const value = (
                    document.getElementById("nik") as HTMLInputElement
                  ).value;
                  setData({ ...data, nik: value });
                }}
              ></input>
            </div>
            <div className={css.Label}>
              <label>Religion</label>
              <select
                id="religion"
                onChange={() => {
                  const value = (
                    document.getElementById("religion") as HTMLInputElement
                  ).value;
                  setData({ ...data, religion: value });
                }}
              >
                <option hidden selected value="">
                  Agama
                </option>
                <option value={"Islam"}>Islam</option>
                <option value={"Kristen Protestan"}>Kristen Protestan</option>
                <option value={"Kristen Katolik"}>Kristen Katolik</option>
                <option value={"Buddha"}>Buddha</option>
                <option value={"Hindu"}>Hindu</option>
                <option value={"Konghucu"}>Konghucu</option>
              </select>
            </div>
            <div className={css.Label}>
              <label>Birth Date</label>
              <input
                type="date"
                id="bday"
                onChange={() => {
                  const value = (
                    document.getElementById("bday") as HTMLInputElement
                  ).value;
                  setData({ ...data, birth_date: value });
                }}
              ></input>
            </div>
          </div>

          <div className={css.AdjustRow}>
            <div className={css.Label}>
              <label>Birth Place</label>
              <input
                type="text"
                placeholder="Tempat Lahir"
                id="bplace"
                onChange={() => {
                  const value = (
                    document.getElementById("bplace") as HTMLInputElement
                  ).value;
                  setData({ ...data, birth_place: value });
                }}
              ></input>
            </div>
            <div className={css.Label}>
              <label>Phone Number</label>
              <input
                type="text"
                placeholder="Phone Number"
                id="ph"
                onChange={() => {
                  const value = (
                    document.getElementById("ph") as HTMLInputElement
                  ).value;
                  setData({ ...data, phone_number: value });
                }}
              ></input>
            </div>
            <div className={css.Label}>
              <label>Start Working</label>
              <input
                type="date"
                id="sw"
                onChange={() => {
                  const value = (
                    document.getElementById("sw") as HTMLInputElement
                  ).value;
                  setData({ ...data, duty_start_date: value });
                }}
              ></input>
            </div>
          </div>

          <div className={css.AdjustRow}>
            <div className={css.Label}>
              <label>SK</label>
              <input
                type="text"
                placeholder="Sk Number"
                id="sk"
                onChange={() => {
                  const value = (
                    document.getElementById("sk") as HTMLInputElement
                  ).value;
                  setData({ ...data, sk_number: value });
                }}
              ></input>
            </div>
            <div className={css.Label}>
              <label>Graduation Date</label>
              <input
                type="date"
                id="grad"
                onChange={() => {
                  const value = (
                    document.getElementById("grad") as HTMLInputElement
                  ).value;
                  setData({ ...data, graduation_date: value });
                }}
              ></input>
            </div>
            <div className={css.Label}>
              <label>Blood Type</label>
              <select
                id="bt"
                onChange={() => {
                  const value = (
                    document.getElementById("bt") as HTMLInputElement
                  ).value;
                  setData({ ...data, blood_type: value });
                }}
              >
                <option value={""} hidden>
                  Blood Type
                </option>
                <option value={"A"}>A</option>
                <option value={"B"}>B</option>
                <option value={"O"}>O</option>
                <option value={"AB"}>AB</option>
              </select>
            </div>
          </div>

          <div className={css.AdjustRow}>
            <div className={css.Label}>
              <label>Department</label>
              <select
                name=""
                id="dpt"
                onChange={() => {
                  const value = (
                    document.getElementById("dpt") as HTMLInputElement
                  ).value;
                  setData((prevData: any) => {
                    const updatedDpt = {
                      ...prevData.department,
                      name: value,
                    };
                    return { ...prevData, department: updatedDpt };
                  });
                }}
              >
                <option value="" hidden selected>
                  Pilih Department
                </option>
                <option value="Staff">Staff</option>
                <option value="Guru">Guru</option>
              </select>
            </div>
            <div className={css.Label}>
              <label>Posisi</label>
              <select
                name=""
                id="pss"
                onChange={() => {
                  const value = (
                    document.getElementById("pss") as HTMLInputElement
                  ).value;
                  setData((prevData: any) => {
                    const updatedDpt = {
                      ...prevData.department,
                      description: value,
                    };
                    return { ...prevData, department: updatedDpt };
                  });
                }}
              >
                <option value="" hidden selected>
                  Pilih Posisi
                </option>
                {departmentData}
              </select>
            </div>
            <div className={css.Label}>
              <label>Employment Type</label>
              <select
                id="et"
                onChange={() => {
                  const value = (
                    document.getElementById("et") as HTMLInputElement
                  ).value;
                  setData({ ...data, employment_type: value });
                }}
              >
                <option hidden>Employment Type</option>
                <option value={"Permanent"}>Permanent</option>
                <option value={"Contract"}>Contract</option>
              </select>
            </div>
          </div>

          <div className={css.AdjustRow}>
            <div className={"-mb-20 " + css.Label}>
              <h1 className="text-xl ">Alamat</h1>
            </div>
            <div className={css.Label}></div>
            <div
              className={
                "self-center justify-self-center !items-center !justify-center " +
                css.Label
              }
            ></div>
          </div>

          <div className={css.AdjustRow}>
            <div className={css.Label}>
              <label>Provinsi</label>
              <input
                type="text"
                placeholder="Provinsi"
                id="prov"
                onChange={() => {
                  const value = (
                    document.getElementById("prov") as HTMLInputElement
                  ).value;
                  setData((prevData: any) => {
                    const updatedAddress = {
                      ...prevData.address,
                      province: value,
                    };
                    return { ...prevData, address: updatedAddress };
                  });
                }}
              ></input>
            </div>

            <div className={css.Label}>
              <label>Nama Kota</label>
              <input
                type="text"
                placeholder="Nama Kota"
                id="city"
                onChange={() => {
                  const value = (
                    document.getElementById("city") as HTMLInputElement
                  ).value;
                  setData((prevData: any) => {
                    const updatedAddress = {
                      ...prevData.address,
                      city: value,
                    };
                    return { ...prevData, address: updatedAddress };
                  });
                }}
              ></input>
            </div>
            <div className={css.Label}>
              <label>Nama Jalan</label>
              <input
                type="text"
                placeholder="Nama Jalan"
                id="add"
                onChange={() => {
                  const value = (
                    document.getElementById("add") as HTMLInputElement
                  ).value;
                  setData((prevData: any) => {
                    const updatedAddress = {
                      ...prevData.address,
                      street: value,
                    };
                    return { ...prevData, address: updatedAddress };
                  });
                }}
              ></input>
            </div>
          </div>

          <div className={css.AdjustRow}>
            <div className={css.Label}>
              <label>Kode Pos</label>
              <input
                type="text"
                placeholder="Kode Pos"
                id="zip"
                onChange={() => {
                  const value = (
                    document.getElementById("zip") as HTMLInputElement
                  ).value;
                  setData((prevData: any) => {
                    const updatedAddress = {
                      ...prevData.address,
                      zip_code: value,
                    };
                    return { ...prevData, address: updatedAddress };
                  });
                }}
              ></input>
            </div>
            <div className={css.Label}></div>
            <div className={css.Label}></div>
          </div>
          <div className={css.AdjustRow}>
            <div className={css.Label}>
              <h1 className="text-xl ">Riwayat Pendidikan</h1>
            </div>
            <div className={css.Label}></div>
            <div
              className={
                "self-center justify-self-center !items-center !justify-center " +
                css.Label
              }
            >
              <div className={css.buttons}>
                <button
                  className={css.create}
                  onClick={() => setJE(jumlahP + 1)}
                >
                  Tambah
                </button>
              </div>
            </div>
          </div>

          {education}

          <div className={css.AdjustRow}>
            <div className={css.Label}>
              <h1 className="text-xl ">Riwayat Pekerjaan</h1>
            </div>
            <div className={css.Label}></div>
            <div
              className={
                "self-center justify-self-center !items-center !justify-center " +
                css.Label
              }
            >
              <div className={css.buttons}>
                <button
                  className={css.create}
                  onClick={() => setJP(jumlahP + 1)}
                >
                  Tambah
                </button>
              </div>
            </div>
          </div>

          {pekerjaan}

          <div className={"-mb-12 " + css.AdjustRow}>
            <div className={css.Label}>
              <h1 className="text-xl ">Pasangan</h1>
            </div>
            <div className={css.Label}></div>
            <div className={css.Label}></div>
          </div>

          <div className={css.AdjustRow}>
            <div className={css.Label}>
              <label>Status Pernikahan</label>
              <select
                name="marriage"
                id="marriage"
                onChange={() => {
                  const value = (
                    document.getElementById("marriage") as HTMLInputElement
                  ).value;
                  if (value === "true") {
                    setMarried(true);
                    setData({ ...data, is_married: true });
                  } else if (value === "false") {
                    setMarried(false);
                    setData({ ...data, is_married: false });
                  }
                }}
              >
                <option value="unselect" hidden selected>
                  Pilih Status
                </option>
                <option value="true">Menikah</option>
                <option value="false">
                  Tidak (Belum, Cerai, Meninggal Dunia)
                </option>
              </select>
            </div>
            <div className={css.Label}>
              {isMarried ? (
                <>
                  <label>Nama Pasangan</label>
                  <input type="text" placeholder="Nama Pasangan"></input>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className={"-mb-12 " + css.AdjustRow}>
            <div className={css.Label}>
              <h1 className="text-xl ">Jumlah Anak</h1>
            </div>
            <div className={css.Label}></div>
            <div className={css.Label}></div>
          </div>

          <div className={css.AdjustRow}>
            <div className={css.Label}>
              <label>Jumlah Anak</label>
              <input
                id="anak"
                type="number"
                onChange={() => {
                  const value = (
                    document.getElementById("anak") as HTMLInputElement
                  ).value;
                  setJA(parseInt(value));
                }}
                placeholder="Jumlah Anak"
                min={0}
              ></input>
            </div>
            <div className={css.Label}></div>
          </div>
          {anak}
          <div className={css.AdjustRow}>
            <div className={css.buttons}>
              <button className={css.cancel}>Cancel</button>
              <button
                className={css.create}
                onClick={() => {
                  submitData();
                }}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
