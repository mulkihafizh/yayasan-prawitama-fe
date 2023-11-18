const API_URL = process.env.NEXT_PUBLIC_API_ENDPOINT as string;
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

export const getEmployee = async (id: string) => {
  const response = await fetch(`${API_URL}${path}/employees/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const createEmployee = async (data: any) => {
  const response = await fetch(`${API_URL}${path}/employees`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const res = await response.json();
  return {
    status: response.status,
    ...res,
  };
};

export const editEmployee = async (data: any, id: string) => {
  const response = await fetch(`${API_URL}${path}/employees/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const res = await response.json();
  return {
    status: response.status,
    ...res,
  };
};

export const deleteEmployee = async (id: string) => {
  const response = await fetch(`${API_URL}${path}/employees/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const res = await response.json();
  return {
    status: response.status,
    ...res,
  };
};
