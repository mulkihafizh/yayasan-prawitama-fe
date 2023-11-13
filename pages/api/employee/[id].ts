import type { NextApiRequest, NextApiResponse } from "next";
import { getEmployee } from "@/app/lib/employee/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const employee = await getEmployee(req.query.id as string);
  if (employee.error) return res.status(500).json(employee);
  return res.status(200).json(employee);
}