import type { NextApiRequest, NextApiResponse } from "next";
import { getDepartment } from "../../../app/lib/employee/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const department = await getDepartment();
  if (department.error) return res.status(500).json(department);
  return res.status(200).json(department);
}
