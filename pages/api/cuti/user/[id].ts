import type { NextApiRequest, NextApiResponse } from "next";
import { getUserCuti } from "@/app/lib/cuti/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const cuti = await getUserCuti(req.query.id as string);
    if (cuti.error) return res.status(500).json(cuti);
    return res.status(200).json(cuti);
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
