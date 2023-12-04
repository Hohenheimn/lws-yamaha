import { NextResponse, NextRequest } from "next/server";

import api from "@/utils/api";

export const POST = async (request: NextRequest, response: NextResponse) => {
  console.log("request:");
  console.log(request.body);
  const res = await api.post("/contact");
  const data = await res.data;
  return NextResponse.json(data);
};
