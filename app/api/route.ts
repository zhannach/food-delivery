import { NextResponse } from "next/server";
import shops from './shops.json';

export async function GET(request: Request) {
  request.headers.set("Access-Control-Allow-Origin", "*");
  request.headers.set("Access-Control-Allow-Methods", "POST");
  request.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return NextResponse.json(shops);
}
