import { NextResponse, NextRequest } from "next/server";

import api from "@/utils/api";

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const q = searchParams.get("q");
  const page = searchParams.get("page");

  const res = await api.get("/search", {
    params: {
      q,
      page,
    },
  });

  const data = await res.data;
  return NextResponse.json(data);
};
