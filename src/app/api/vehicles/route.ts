import { NextResponse, NextRequest } from "next/server";

import api from "@/utils/api";

export const GET = async (req: NextRequest) => {
<<<<<<< HEAD
  const categorySlug = req.nextUrl.searchParams.get("categorySlug");
=======
  const vehicleIds = req.nextUrl.searchParams.get("vehicleIds");
>>>>>>> a536e270692b5fb94a279877f1a142919d6ad159

  const res = await api.get("/vehicles", {
    params: {
      ...(vehicleIds && { vehicleIds }),
    },
  });
  const data = await res.data;
  return NextResponse.json(data);
};
