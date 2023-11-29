import { NextResponse, NextRequest } from "next/server";
import api from "@/utils/api";

export const GET = async (req: NextRequest) => {
  const subCategoryId = req.nextUrl.searchParams.get("subCategoryId");
  const includeVariants = req.nextUrl.searchParams.get("includeVariants");

  const res = await api.get("/products", {
    params: {
      subCategoryId,
      includeVariants,
    },
  });
  const data = await res.data;
  return NextResponse.json(data);
};
