import { NextResponse, NextRequest } from "next/server";
import api from "@/utils/api";

type PropsType = {
  params: {
    slugOrId: string;
  };
};

export const GET = async (req: NextRequest, { params }: PropsType) => {
  const slugOrId = params.slugOrId;
  const categorySlug = req.nextUrl.searchParams.get("categorySlug");

  const res = await api.get(
    `/products/${slugOrId}?categorySlug=${categorySlug}`
  );
  const data = await res.data;
  return NextResponse.json(data);
};
