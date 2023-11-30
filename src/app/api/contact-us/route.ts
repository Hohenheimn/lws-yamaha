import { NextResponse, NextRequest } from "next/server";

import api from "@/utils/api";

export const POST = async (req: NextRequest) => {
  const res = await api.post("/contact-us");
  const data = await res.data;
  return NextResponse.json(data);
};
