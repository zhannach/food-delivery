"use client";

import { writeUserData } from "@/helpers/writeData";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Modal from "./Portal/Modal";
import { useRouter } from 'next/navigation';

const SubTotal = () => {
  const [isOpen, setIsOpen] = useState(false);
  let [message, setMessage] = useState('');
  const router = useRouter();
  const {  reset } = useForm();
  const { cartItems: products, totalPrice } = useSelector(
    (state: RootState) => state.cartItems
  );
  const { id, email, name, address, phone } = useSelector(
    (state: RootState) => state.user
  );
  const handleCreateOrder = () => {
    if (!email || !address || !phone ) {
      setMessage("Please, fill the form.");
    } else {
      writeUserData({
        id,
        customer: {
          email,
          name,
          address,
          phone,
        },
        items: products,
        totalPrice,
      });
      setMessage("Thank you for your order. Your order is already being prepared.");
      setTimeout(() => {
        reset();
        router.push('/');
    }, 1000);
    }
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false)
      if (message.includes("Thank you")) router.push('/');
    }, 1000)
  };

  return (
    <div className="self-start mt-24 w-52 h-full rounded-lg border bg-white p-6 shadow-md">
      {isOpen && <Modal message={message} />}
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <div className="">
          <p className="mb-1 text-lg font-bold">{totalPrice} UAH</p>
        </div>
      </div>
      <button
        onClick={handleCreateOrder}
        className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
      >
        ORDER
      </button>
    </div>
  );
};

export default SubTotal;
