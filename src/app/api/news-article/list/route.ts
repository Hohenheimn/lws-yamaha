import { NextResponse, NextRequest } from "next/server";

import api from "@/utils/api";

export const GET = async (req: NextRequest) => {
  const url = new URL(req.url);
  const category = url.searchParams.get("category");
  const limit = url.searchParams.get("limit");
  const page = url.searchParams.get("page");
  const res = await api.get("/news-articles/list", {
    params: {
      ...(category && { category }),
      ...(limit && { limit }),
      ...(page && { page }),
    },
  });
  const data = await res.data;
  return NextResponse.json(data);
};
