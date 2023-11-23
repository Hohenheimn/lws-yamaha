import { NextResponse, NextRequest } from "next/server";

import api from "@/utils/api";

export const GET = async (req: NextRequest) => {
  const url = new URL(req.url);
  const subCategoryId = url.searchParams.get("subCategoryId");
  const res = await api.get("/menu", {
    params: {
      ...(subCategoryId && { subCategoryId }),
    },
  });
  const data = await res.data;
  return NextResponse.json(data);
};
