"use client";
import React from "react";
import { RootState } from "@/redux/store";
import { Dish } from "@/types/shops";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";


const CartList = () => {
  const cartItems = useSelector((state: RootState) => state.cartItems.cartItems);
  return (
    <div className="h-screen basis-2/4 h-auto bg-gray-100 pt-8">
    <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
    <section className="mx-auto w-full pb-20 justify-center px-6">
    {cartItems.map((cartItem: Dish) => {
        return <CartItem key={cartItem.id} {...cartItem} />;
      })}
    </section>
    </div>
  );
};

export default CartList;
