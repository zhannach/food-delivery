"use client";
import React from "react";
import { RootState } from "@/redux/store";
import { Dish } from "@/types/shops";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";


const CartList = () => {
  const cartItems = useSelector((state: RootState) => state.cartItems.cartItems);
  return (
    <div className="h-screen basis-2/4 h-auto pt-10">
    <h1 className="mb-10 text-4xl font-bold">Order Menu</h1>
    <section className="mx-auto w-full pb-20 justify-center">
    {cartItems.map((cartItem: Dish) => {
        return <CartItem key={cartItem.id} {...cartItem} />;
      })}
    </section>
    </div>
  );
};

export default CartList;
