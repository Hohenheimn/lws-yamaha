import { NextResponse, NextRequest } from "next/server";
import api from "@/utils/api";

type ParamsType = {
  params: {
    categorySlug: string;
  };
};

export const GET = async (req: NextRequest, { params }: ParamsType) => {
  const res = await api.get(`/categories/${params.categorySlug}`, {
    params: {
      type: "vehicle",
    },
  });
  const data = await res.data;
  return NextResponse.json(data);
};
