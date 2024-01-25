import { getCookie } from "cookies-next";

const API_URL = process.env.NEXT_PUBLIC_API_ENDPOINT as string;
const path = "payroll";
const token = getCookie("token");

export const getPayrollById = async (id: string) => {
  const response = await fetch(`${API_URL}${path}/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

export const getPayrollByEmployeeId = async (id: string) => {
  const response = await fetch(`${API_URL}${path}/employee/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
