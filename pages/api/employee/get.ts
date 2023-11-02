import type { NextApiRequest, NextApiResponse } from "next";
import { getEmployees } from "@/app/lib/employee/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const employees = await getEmployees();
  if (employees.error) return res.status(500).json(employees);
  return res.status(200).json(employees);
}
