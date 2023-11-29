import { NextResponse, NextRequest } from "next/server";

import api from "@/utils/api";

export const GET = async (req: NextRequest) => {
  const type = req.nextUrl.searchParams.get("type");
  const includeSubCategories = req.nextUrl.searchParams.get(
    "includeSubCategories"
  );

  const res = await api.get("/categories", {
    params: {
      type,
      includeSubCategories,
    },
  });

  const data = await res.data;
  return NextResponse.json(data);
};
