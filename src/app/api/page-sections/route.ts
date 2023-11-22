import { NextResponse, NextRequest } from "next/server";

import api from "@/utils/api";

export const GET = async (req: NextRequest) => {
  const url = new URL(req.url);
  const pageId = url.searchParams.get("pageId");
  const res = await api.get("/page-sections", {
    params: {
      ...(pageId && { pageId }),
    },
  });
  const data = await res.data;
  return NextResponse.json(data);
};
