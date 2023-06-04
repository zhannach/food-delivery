"use client";
import CartEmpty from "@/components/CartEmpty";
import CartList from "@/components/CartList";
import Form from "@/components/Form";
import SubTotal from "@/components/SubTotal";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector(
    (state: RootState) => state.cartItems.cartItems
  );
  return (
    <section className="flex p-20 h-full justify-between bg-gray-100">
      {cartItems.length > 0 ? (
        <>
          <Form />
          <CartList />
          <SubTotal />
        </>
      ) : 
        <CartEmpty />
      }
    </section>
  );
};

export default Cart;
