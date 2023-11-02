const API_URL = process.env.NEXT_PUBLIC_API_ENDPOINT as string;
const path = "auth";

export const login = async (email: string, password: string) => {
  const response = await fetch(`${API_URL}${path}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
};

export const employeeData = async (token: string) => {
  const response = await fetch(`${API_URL}${path}/employee`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};
