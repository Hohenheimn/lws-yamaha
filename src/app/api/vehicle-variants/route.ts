import { NextResponse, NextRequest } from "next/server";
import api from "@/utils/api";

type ParamsType = {
  searchParams: {
    vehicleId: string;
  };
};

export const GET = async (req: NextRequest, { searchParams }: any) => {
  const vehicleId = req.nextUrl.searchParams.get("vehicleId");

  const res = await api.get("/vehicle-variants", {
    params: {
      ...(vehicleId && { vehicleId }),
    },
  });
  const data = await res.data;
  return NextResponse.json(data);
};
