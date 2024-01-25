import type { NextApiRequest, NextApiResponse } from "next";
import { attendence } from "@/app/lib/employee/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data = await req.body;
    const employee = await attendence(data);
    if (employee.status > 399)
      return res.status(employee.status).json(employee);
    return res.status(200).json(employee.data);
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
