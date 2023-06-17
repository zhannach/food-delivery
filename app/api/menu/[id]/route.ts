import { NextResponse } from "next/server";
import menu from './menu.json';

export async function GET(request: Request, {params} : {params: {id: string}}) {
  const id = params.id
    request.headers.set("Access-Control-Allow-Origin", "*");
    request.headers.set("Access-Control-Allow-Methods", "POST");
    request.headers.set("Access-Control-Allow-Headers", "Content-Type");
    const shopMenu = menu.find((el) => el.restaurantId === id)
    return NextResponse.json(shopMenu);
  }