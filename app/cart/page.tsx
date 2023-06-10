"use client";
import CartEmpty from "@/components/Cart/CartEmpty";
import CartList from "@/components/Cart/CartList";
import Form from "@/components/Cart/Form";
import { MemoizedShopsMap } from "@/components/ShopsMap";
import SubTotal from "@/components/Cart/SubTotal";
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
          <section className="flex flex-col justify-between mb-10">
            <Form />
            <MemoizedShopsMap />
          </section>
          <CartList />
          <SubTotal />
        </>
      ) : (
        <CartEmpty />
      )}
    </section>
  );
};

export default Cart;
