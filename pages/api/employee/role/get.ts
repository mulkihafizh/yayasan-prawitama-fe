import type { NextApiRequest, NextApiResponse } from "next";
import { getEmployeeRole } from "@/app/lib/employee/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = req.headers.authorization?.split(" ")[1];
  const employees = await getEmployeeRole(token);
  if (employees.error) return res.status(500).json(employees);
  return res.status(200).json(employees);
}
