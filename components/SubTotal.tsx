'use client'

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const SubTotal = () => {
  const totalPrice = useSelector((state: RootState) => state.cartItems.totalPrice)
  return (
    <div className="self-start mt-24 w-52 h-full rounded-lg border bg-white p-6 shadow-md">
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <div className="">
          <p className="mb-1 text-lg font-bold">{totalPrice} UAH</p>
        </div>
      </div>
      <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
        ORDER
      </button>
    </div>
  );
};

export default SubTotal;
