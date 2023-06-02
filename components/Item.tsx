"use client";
import React from "react";
import { Dish } from "@/types/shops";
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/slices/cartSlice";

const Item = ({ title, img, description, price }: Dish) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addItem({ title, img, description, price }));
  };
  return (
    <div className="flex p-2 flex-col basis-1/2 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={img}
        alt={title}
        height={200}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-lg text-gray-700">{description}</p>
        <p className="font-bold text-xl">{price}</p>
        <button
          onClick={handleClick}
          className="bg-slate-400 text-white font-bold text-xl h-8 self-end w-20 rounded-xl hover:bg-slate-500"
          type="button"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Item;
