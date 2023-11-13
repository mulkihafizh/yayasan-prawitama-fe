import type { NextApiRequest, NextApiResponse } from "next";
import { editEmployee } from "@/app/lib/employee/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PUT") {
    const data = await JSON.parse(req.body);
    const employee = await editEmployee(data, req.query.id as string);
    if (employee.error) return res.status(500).json(employee);
    return res.status(200).json(employee);
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
