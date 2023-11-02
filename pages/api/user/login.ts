import type { NextApiRequest, NextApiResponse } from "next";
import { login } from "@/app/lib/user/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data = await JSON.parse(req.body);

    const employees = await login(data.email, data.password);
    if (employees.error) return res.status(500).json(employees);
    return res.status(200).json(employees);
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
