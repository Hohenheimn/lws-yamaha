import { NextResponse, NextRequest } from "next/server";

import api from "@/utils/api";

export const GET = async (req: NextRequest) => {
  const url = new URL(req.url);
  const vehicleIds = url.searchParams.get("vehicleIds");
  const res = await api.get("/vehicles", {
    params: {
      ...(vehicleIds && { vehicleIds }),
    },
  });
  const data = await res.data;
  return NextResponse.json(data);
};
