import { NextResponse, NextRequest } from "next/server";

import api from "@/utils/api";

export const GET = async (req: NextRequest) => {
  const url = new URL(req.url);
  const slug = url.pathname.replace("/api/pages", "");
  const res = await api.get(`/pages${slug}`);
  const data = await res.data;
  return NextResponse.json(data);
};
