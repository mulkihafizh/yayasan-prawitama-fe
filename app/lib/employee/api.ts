const API_URL = process.env.API_ENDPOINT as string;
const path = "employee";

export const getEmployees = async () => {
  const response = await fetch(`${API_URL}${path}/employees`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
