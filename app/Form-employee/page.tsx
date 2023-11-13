import React from "react";
import css from "./employee.module.css";

export default function page() {
  return (
    <>
      <div className={css.header}>
        <h1>Form Create Employee</h1>
      </div>

      <div className={css.Container}>
        <form>
          <div className={css.AdjustRow}>
            <div className={css.Label}>
              <label>Email</label>
              <input type="text" placeholder="Email"></input>
            </div>
            <div className={css.Label}>
              <label>Password</label>
              <input type="password" placeholder="Password"></input>
            </div>
            <div className={css.Label}>
              <label>Name</label>
              <input type="text" placeholder="Name"></input>
            </div>
          </div>

          <div className={css.AdjustRow}>
            <div className={css.Label}>
              <label>ID</label>
              <input type="text" placeholder="ID Pegawai"></input>
            </div>
            <div className={css.Label}>
              <label>Reg Number</label>
              <input type="text" placeholder="Registrasi Number"></input>
            </div>
            <div className={css.Label}>
              <label>Certi Number</label>
              <input type="text" placeholder="Certificate Number"></input>
            </div>
          </div>

          <div className={css.AdjustRow}>
            <div className={css.Label}>
              <label>NIK</label>
              <input type="text" placeholder="NIK Pegawai"></input>
            </div>
            <div className={css.Label}>
              <label>Religion</label>
              <select>
                <option hidden>Agama</option>
                <option>Islam</option>
                <option>Kristen Protestan</option>
                <option>Kristen Katolik</option>
                <option>Buddha</option>
                <option>Hindu</option>
                <option>Konghucu</option>
              </select>
            </div>
            <div className={css.Label}>
              <label>Birth Date</label>
              <input type="date"></input>
            </div>
          </div>

          <div className={css.AdjustRow}>
            <div className={css.Label}>
              <label>Birth Place</label>
              <input type="text" placeholder="Tempat Lahir"></input>
            </div>
            <div className={css.Label}>
              <label>Age</label>
              <input type="text" placeholder="Usia"></input>
            </div>
            <div className={css.Label}>
              <label>Start Working</label>
              <input type="date"></input>
            </div>
          </div>

          <div className={css.AdjustRow}>
            <div className={css.Label}>
              <label>SK</label>
              <input type="text" placeholder="Sk Number"></input>
            </div>
            <div className={css.Label}>
              <label>Graduation Date</label>
              <input type="date"></input>
            </div>
            <div className={css.Label}>
              <label>Blood Type</label>
              <select>
                <option hidden>Blood Type</option>
                <option>A</option>
                <option>B</option>
                <option>O</option>
                <option>AB</option>
              </select>
            </div>
          </div>

          <div className={css.AdjustRow}>
            <div className={css.Label}>
              <label>Department</label>
              <input type="text" placeholder="Department Pegawai"></input>
            </div>
            <div className={css.Label}>
              <label>Employment Type</label>
              <select>
                <option hidden>Employment Type</option>
                <option>Permanent</option>
                <option>Contract</option>
              </select>
            </div>
            <div className={css.Label}>
              <label>Education History</label>
              <select>
                <option hidden>Education History</option>
                <option>SMA/SMK</option>
                <option>Kuliah</option>
              </select>
            </div>
          </div>

          <div className={css.AdjustRow}>
            <div className={css.Label}>
              <label>Work History</label>
              <input type="text" placeholder="Work History"></input>
            </div>
            <div className={css.Label}>
              <label>Address</label>
              <input type="text" placeholder="Address"></input>
            </div>
            <div className={css.Label}>
              <label>Phone Number</label>
              <input type="text" placeholder="Phone Number"></input>
            </div>
          </div>

          <div className={css.AdjustRow}>
            <div className={css.Label}>
              <label>Married</label>
              <select>
                <option hidden>No/Yes</option>
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            <div className={css.Label}>
              <label>Gender</label>
              <select>
                <option hidden>Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className={css.Label}>
              <label>Children</label>
              <div className={css.AdjustGender}>
                <div className={css.gender}>
                  <p>Male</p>
                  <input type="number" min="0" max="10"></input>
                </div>
                <div className={css.gender}>
                  <p>Female</p>
                  <input type="number" min="0" max="10"></input>
                </div>
              </div>
            </div>
          </div>

          <div className={css.AdjustRow}>
            <div className={css.buttons}>
                <button className={css.cancel}>Cancel</button>
                <button className={css.create}>Create</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
