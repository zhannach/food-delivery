"use client";
import React from "react";
import { ShopType } from "@/types/shops";
import { useDispatch } from "react-redux";
import { setId } from "@/redux/slices/shopSlice";

const Shop = ({ id, name, avatar }: ShopType) => {
  const dispatch = useDispatch();
  return (
    <li
      onClick={() => dispatch(setId(id))}
      className="h-14 bg-white rounded-3xl text-black text-2xl p-2 cursor-pointer hover:bg-slate-200"
    >
      <img src={avatar} className="w-8 inline-block"></img>
      <span className="ml-3 text-ml">{name}</span>
    </li>
  );
};

export default Shop;
