"use client";
import React from "react";
import { ShopType } from "@/types/shops";
import { useDispatch } from "react-redux";
import { setId } from "@/redux/slices/shopSlice";

const Shop = ({ id, name }: ShopType) => {
  const dispatch = useDispatch();
  return (
    <li
      onClick={() => dispatch(setId(id))}
      className="border-4 h-14 text-blue-800 text-2xl p-2 cursor-pointer hover:bg-slate-200"
    >
      <span className="ml-3">{name}</span>
    </li>
  );
};

export default Shop;
