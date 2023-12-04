import { NextResponse, NextRequest } from "next/server";

import api from "@/utils/api";

export const POST = async (request: NextRequest, response: NextResponse) => {
  const payload = await request.json();
  const res = await api.post("/contacts", payload);
  const data = await res.data;
  return NextResponse.json(data);
};
