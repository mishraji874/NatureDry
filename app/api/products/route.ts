import type { NextRequest } from "next/server";
import { getCatalogProducts } from "@/lib/products";

const parseFilterNumber = (value: string | null): number | undefined => {
  if (!value || value.trim().length === 0) {
    return undefined;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : undefined;
};

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const rawCategory = searchParams.get("category");
    const minPrice = parseFilterNumber(searchParams.get("minPrice"));
    const maxPrice = parseFilterNumber(searchParams.get("maxPrice"));
    const limit = parseFilterNumber(searchParams.get("limit"));

    if (
      typeof minPrice === "number" &&
      typeof maxPrice === "number" &&
      minPrice > maxPrice
    ) {
      return Response.json(
        {
          error: "The minimum price cannot be greater than the maximum price.",
        },
        { status: 400 }
      );
    }

    const products = await getCatalogProducts({
      category: rawCategory && rawCategory !== "all" ? rawCategory : undefined,
      minPrice,
      maxPrice,
      limit: typeof limit === "number" && limit > 0 ? limit : undefined,
    });

    return Response.json({ products });
  } catch {
    return Response.json(
      {
        error: "Failed to load products.",
      },
      { status: 500 }
    );
  }
}
