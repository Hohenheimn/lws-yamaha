import { NextResponse, NextRequest } from "next/server";
import api from "@/utils/api";

type ParamsType = {
  params: {
    vehicleSlug: string;
  };
};

export const GET = async (req: NextRequest, { params }: ParamsType) => {
  const res = await api.get(`/vehicles/${params.vehicleSlug}`, {
    params: {
      type: "vehicle",
    },
  });
  const data = await res.data;
  return NextResponse.json(data);
};
