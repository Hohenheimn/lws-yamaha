import { NextResponse, NextRequest } from "next/server";
import api from "@/utils/api";

export const GET = async (req: NextRequest) => {
  const vehicleId = req.nextUrl.searchParams.get("vehicleId");
  const limit = req.nextUrl.searchParams.get("limit");

  const res = await api.get("/product-variants", {
    params: {
      ...(vehicleId && { vehicleId }),
      ...(limit && { limit }),
    },
  });
  const data = await res.data;
  return NextResponse.json(data);
};
