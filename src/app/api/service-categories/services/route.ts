import { NextResponse, NextRequest } from "next/server";

import api from "@/utils/api";

export const GET = async (req: NextRequest) => {
  const res = await api.get("/service-categories/services");
  const data = await res.data;
  return NextResponse.json(data);
};
