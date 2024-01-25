import type { NextApiRequest, NextApiResponse } from "next";
import { createCuti } from "@/app/lib/cuti/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data = await req.body;
    const token = req.headers.authorization?.split(" ")[1];
    const cuti = await createCuti(data, token);
    if (cuti.status > 399) return res.status(cuti.status).json(cuti);
    return res.status(200).json(cuti);
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
