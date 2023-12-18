import { NextResponse, NextRequest } from "next/server";
import api from "@/utils/api";

type PropsType = {
  params: {
    slugOrId: string;
  };
};

export const GET = async (req: NextRequest, { params }: PropsType) => {
  const slugOrId = params.slugOrId;
  const limit = req.nextUrl.searchParams.get("limit");

  const res = await api.get(`/products/${slugOrId}/related?limit=${limit}`);
  const data = await res.data;
  return NextResponse.json(data);
};
