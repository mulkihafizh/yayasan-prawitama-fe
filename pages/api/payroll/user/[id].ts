import type { NextApiRequest, NextApiResponse } from "next";
import { getPayrollByEmployeeId } from "@/app/lib/payroll/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const payroll = await getPayrollByEmployeeId(req.query.id as string);
    if (payroll.error) return res.status(500).json(payroll);
    return res.status(200).json(payroll);
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
