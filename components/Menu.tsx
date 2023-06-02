"use client";
import { ShopInfo } from "@/types/shops";
import React, { useEffect, useState } from "react";
import Item from "./Item";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Menu = () => {
  const id = useSelector((state: RootState) => state.shop.id)
  const [shop, setShop] = useState<ShopInfo>();
  useEffect(() => {
    const getShop = async () => {
      const response = await fetch(
        `https://647894c5362560649a2e0d8e.mockapi.io/restaurants/${id}/menu`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const shop = await response.json();
      setShop(shop[0]);
    };
    getShop();
  }, [id]);

  return (
    <section className="flex flex-wrap justify-between gap-4">
      {shop &&
        shop.menu.map((dish, id) => {
          return <Item key={id} {...dish} />;
        })}
    </section>
  );
};

export default Menu;
