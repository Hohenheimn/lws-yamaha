import { NextApiRequest } from "next";

import { NextResponse } from "next/server";

import api from "@/utils/api";

export const GET = async (req: NextApiRequest) => {
  const id = req.query.id;
  const res = await api.get(`/vehicles/${id}`);
  const data = await res.data;
  return NextResponse.json(data);
};
