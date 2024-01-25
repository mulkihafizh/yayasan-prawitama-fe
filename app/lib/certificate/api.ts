import { getCookie } from "cookies-next";

const API_URL = process.env.NEXT_PUBLIC_API_ENDPOINT as string;
const path = "certificate";
const token = getCookie("token");

export const getUserCertificate = async (id: string) => {
  const response = await fetch(`${API_URL}${path}/user/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
