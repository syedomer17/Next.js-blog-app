import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();

    // Use NextResponse.json for proper JSON response
    return NextResponse.json(categories, { status: 200 });
  } catch (err) {
    console.error("Failed to fetch categories:", err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};
