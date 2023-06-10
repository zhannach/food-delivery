"use client";
import React, { useState } from "react";
import { Dish } from "@/types/shops";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/redux/slices/cartSlice";
import { RootState } from "@/redux/store";
import Modal from "../Portal/Modal";

const Item = ({ title, img, description, price, shopId, id }: Dish) => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector(
    (state: RootState) => state.cartItems.cartItems
  );
  const dispatch = useDispatch();
  const handleClick = () => {
    if (cartItems.length > 0) {
      if (cartItems[0].shopId === shopId) {
        dispatch(addItem({ id, title, img, description, price, shopId }));
      } else {
        setIsOpen(true);
        setTimeout(() => {
          setIsOpen(false);
        }, 1500);
      }
    } else {
      dispatch(addItem({ id, title, img, description, price, shopId }));
    }
  };
  return (
    <>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          message={[
            "You cannot add products from different stores in one order.",
            "Please, complete the current order.",
          ]}
        />
      )}
      <div className="flex flex-col max-h-80 gap-2 basis-1/2 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
        <img
          className="object-cover rounded-t-lg h-full w-1/2"
          src={img}
          alt={title}
        />
        <div className="flex flex-col h-full w-full justify-between p-4 leading-normal">
          <div className="basis 2/3 w-full">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <p className="mb-3 font-normal text-lg h-26 text-gray-700">
              {description}
            </p>
            <p className="font-bold text-xl">{price}</p>
          </div>
          <button
            onClick={handleClick}
            className="shadow-[2px_2px_15px_rgba(0,0,0,0.15)] text-black font-bold text-xl h-16 self-end w-20 rounded-xl hover:bg-slate-200"
            type="button"
          >
            {cartItems.find((item) => item.title === title) ? "In Cart" : "Add"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
