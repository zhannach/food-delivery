"use client";
import React from "react";
import { ShopType } from "@/types/shops";
import { useDispatch } from "react-redux";
import { setId } from "@/redux/slices/shopSlice";


type ShopProps = {
  shop: ShopType,
  callback?: () => void

}
const Shop = ({ shop: {avatar, name, id}, callback }: ShopProps) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setId(id))
    if(callback) callback()
  }
  return (
    <li
      onClick={handleClick}
      className="h-12 bg-white rounded-3xl text-black text-xl p-2 cursor-pointer hover:bg-slate-200 xl:h-14"
    >
      <img src={avatar} className="w-8 inline-block"></img>
      <span className="ml-3 text-ml">{name}</span>
    </li>
  );
};

export default Shop;
