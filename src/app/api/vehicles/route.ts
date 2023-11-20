import { NextResponse, NextRequest } from "next/server";

import api from "@/utils/api";

export const GET = async (req: NextRequest) => {
  const url = new URL(req.url);
  const type = url.searchParams.get("type");
  const res = await api.get("/vehicles", {
    params: {
      ...(type && { type }),
    },
  });
  const data = await res.data;
  return NextResponse.json(data);
};
