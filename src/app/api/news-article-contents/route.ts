import { NextResponse, NextRequest } from "next/server";

import api from "@/utils/api";

export const GET = async (req: NextRequest) => {
  const url = new URL(req.url);
  const newsArticleId = url.searchParams.get("newsArticleId");
  const res = await api.get("/news-article-contents", {
    params: {
      ...(newsArticleId && { newsArticleId }),
    },
  });
  const data = await res.data;
  return NextResponse.json(data);
};
