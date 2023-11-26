import { NextResponse, NextRequest } from "next/server";
import api from "@/utils/api";

export const GET = async (req: NextRequest) => {
  const vehicleId = req.nextUrl.searchParams.get("vehicleId");

  const res = await api.get("/vehicle-specifications", {
    params: {
      ...(vehicleId && { vehicleId }),
      includes: "vehicleSpecificationItems",
    },
  });
  const data = await res.data;
  return NextResponse.json(data);
};
