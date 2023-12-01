import { NextResponse, NextRequest } from "next/server";

import api from "@/utils/api";

type ParamsType = {
  params: {
    id: string;
  };
};

export const GET = async (req: NextRequest, { params }: ParamsType) => {
  const res = await api.get(`/news-articles/${params.id}`);
  const data = await res.data;
  return NextResponse.json(data);
};
