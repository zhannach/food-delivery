"use client";
import { ShopInfo } from "@/types/shops";
import React, { useEffect, useState } from "react";
import Item from "./Item";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Menu = () => {
  const id = useSelector((state: RootState) => state.shop.id);
  const [shop, setShop] = useState<ShopInfo>();
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const getShop = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/menu/${id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const shop = await response.json();
      setShop(shop);
    };
    getShop();
  }, [id]);

  return (
    <section className="flex flex-wrap justify-center gap-y-4 w-full">
      {shop &&
        shop.menu.map((dish, id) => {
          dish.shopId = shop.id;
          return <Item key={id} {...dish} />;
        })}
    </section>
  );
};

export default Menu;
