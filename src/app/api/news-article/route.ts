import { NextResponse, NextRequest } from "next/server";

import api from "@/utils/api";

export const GET = async (req: NextRequest) => {
  const url = new URL(req.url);
  const newsIds = url.searchParams.get("newsIds");
  const res = await api.get("/news-articles", {
    params: {
      ...(newsIds && { newsIds }),
    },
  });
  const data = await res.data;
  return NextResponse.json(data);
};
