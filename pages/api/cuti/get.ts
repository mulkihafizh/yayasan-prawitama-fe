import type { NextApiRequest, NextApiResponse } from "next";
import { getCuti } from "@/app/lib/cuti/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = req.headers.authorization?.split(" ")[1];
  const cuti = await getCuti();
  if (cuti.error) return res.status(500).json(cuti);
  return res.status(200).json(cuti);
}
