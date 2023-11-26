import { NextResponse, NextRequest } from "next/server";
import api from "@/utils/api";

export const GET = async (req: NextRequest) => {
  const vehicleId = req.nextUrl.searchParams.get("vehicleId");

  const res = await api.get("/vehicle-features", {
    params: {
      ...(vehicleId && { vehicleId }),
    },
  });
  const data = await res.data;
  return NextResponse.json(data);
};
