import { NextApiRequest } from "next";

import { NextResponse } from "next/server";

import api from "@/utils/api";

export const GET = async (req: NextApiRequest) => {
  const type = req.query.type;
  const res = await api.get(`/vehicles`, {
    params: {
      type: type,
    },
  });
  const data = await res.data;
  return NextResponse.json(data);
};
