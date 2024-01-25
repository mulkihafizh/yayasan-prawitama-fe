import type { NextApiRequest, NextApiResponse } from "next";
import { approveCuti } from "@/app/lib/cuti/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const cuti = await approveCuti(
      req.query.id as string,
      req.body.status as string
    );
    if (cuti.error) return res.status(500).json(cuti);
    return res.status(200).json(cuti);
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
