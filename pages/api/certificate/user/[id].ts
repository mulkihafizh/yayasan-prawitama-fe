import type { NextApiRequest, NextApiResponse } from "next";
import { getUserCertificate } from "@/app/lib/certificate/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const employee = await getUserCertificate(req.query.id as string);
    if (employee.error) return res.status(500).json(employee);
    return res.status(200).json(employee);
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
