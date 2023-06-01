"use client";
import React from "react";
import Image from "next/image";
import { ShopType } from "@/types/shops";

const Shop = ({ id, name, avatar }: ShopType) => {
  return (
    <li className="border-4 h-14 text-blue-800 text-2xl p-2 cursor-pointer hover:bg-slate-200">
      <span className="ml-3">{name}</span>
    </li>
  );
};

export default Shop;
