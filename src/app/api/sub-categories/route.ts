import { NextResponse, NextRequest } from "next/server";

import api from "@/utils/api";

export const GET = async (req: NextRequest) => {
  const categoryId = req.nextUrl.searchParams.get("categoryId");
  const limit = req.nextUrl.searchParams.get("limit");
  const tableType = req.nextUrl.searchParams.get("tableType");
  const include = req.nextUrl.searchParams.get("include");

  const res = await api.get("/sub-categories", {
    params: {
      categoryId,
      limit,
      tableType,
      include,
    },
  });
  const data = await res.data;
  return NextResponse.json(data);
};
