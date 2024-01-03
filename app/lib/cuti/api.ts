import { getCookie } from "cookies-next";

const API_URL = process.env.NEXT_PUBLIC_API_ENDPOINT as string;
const path = "cuti";
const token = getCookie("token");

export const getCuti = async () => {
  const response = await fetch(`${API_URL}${path}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const getTargetCuti = async (id: string) => {
  const response = await fetch(`${API_URL}${path}/target/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const getCutiById = async (id: string) => {
  const response = await fetch(`${API_URL}${path}/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

export const approveCuti = async (id: string) => {
  const response = await fetch(`${API_URL}${path}/approve/${id}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

export const rejectCuti = async (id: string) => {
  const response = await fetch(`${API_URL}${path}/reject/${id}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

export const createCuti = async (data: any) => {
  const response = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

export const approveCutiAdmin = async (id: string) => {
  const response = await fetch(`${API_URL}${path}/approve/admin/${id}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

export const deleteCuti = async (id: string) => {
  const response = await fetch(`${API_URL}${path}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
