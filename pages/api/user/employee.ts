import type { NextApiRequest, NextApiResponse } from "next";
import { employeeData } from "@/app/lib/user/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const token = req.headers.authorization?.split(" ")[1];
    const employees = await employeeData(token as string);
    if (employees.error) return res.status(500).json(employees);
    return res.status(200).json(employees);
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
