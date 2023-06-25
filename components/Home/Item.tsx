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
      <div className="flex flex-col pt-4 w-11/12  mx-2 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl md:pt-2 lg:basis-3/5 xl:basis-3/5">
        <img
          className="object-cover w-2/4 h-auto rounded-t-lg md:h-full 2xl:max-w-1/2 "
          src={img}
          alt={title}
        />
        <div className="flex flex-col h-auto basis-1/2 p-2 leading-normal sm:p-4 sm:justify-between">
          <div className="w-full basis-2/3 ">
            <h5 className="mb-2 text-xl text-black font-bold tracking-tight text-gray-900 lg:text-2xl">
              {title}
            </h5>
            <p className="mb-3 basis-2/3 font-normal text-sm h-26 text-gray-700 lg:text-lg">
              {description}
            </p>
            <p className="font-bold text-base lg:text-2xl">{price}</p>
          </div>
          <button
            onClick={handleClick}
            className="shadow-[2px_2px_15px_rgba(0,0,0,0.15)] text-black font-bold text-base h-12 self-end w-16 rounded-xl hover:bg-slate-200 xl:w-20 xl:h-16 md:text-xl md:h-12 md:w-14 sm:h-10 sm:w-12"
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
