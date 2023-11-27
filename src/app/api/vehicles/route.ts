import { NextResponse, NextRequest } from "next/server";

import api from "@/utils/api";

export const GET = async (req: NextRequest) => {
  const vehicleIds = req.nextUrl.searchParams.get("vehicleIds");

  const res = await api.get("/vehicles", {
    params: {
      ...(vehicleIds && { vehicleIds }),
    },
  });
  const data = await res.data;
  return NextResponse.json(data);
};
