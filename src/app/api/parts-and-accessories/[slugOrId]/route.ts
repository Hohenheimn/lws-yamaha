import { NextResponse, NextRequest } from "next/server";
import api from "@/utils/api";

type PropsType = {
  params: {
    slugOrId: string;
  };
};

export const GET = async (req: NextRequest, { params }: PropsType) => {
  const slugOrId = params.slugOrId;

  const res = await api.get(`/products/${slugOrId}`);
  const data = await res.data;
  return NextResponse.json(data);
};
