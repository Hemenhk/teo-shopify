import { hashPassword } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import Auth, { AuthDocument } from "@/schema/adminAuthSchema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connectToDatabase();
  try {
      type NewType = AuthDocument;

    const data: NewType = await req.json();

    const { email, password } = data;

    const hashedPassword: string = await hashPassword(password);
    const admin = await Auth.create({ email, password: hashedPassword });

    console.log("Admin Created:", admin);
    return NextResponse.json({
      status: 201,
      success: true,
      data: admin,
    });
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json({
      status: 400,
      body: {
        success: false,
        error: error.message,
      },
    });
  }
}