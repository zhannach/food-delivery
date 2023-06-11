"use client";
import CartEmpty from "@/components/Cart/CartEmpty";
import CartList from "@/components/Cart/CartList";
import Form from "@/components/Cart/Form";
import SubTotal from "@/components/Cart/SubTotal";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector(
    (state: RootState) => state.cartItems.cartItems
  );
  return (
    <>
      {cartItems.length > 0 ? (
        <section className="flex p-20 ml-12 justify-between bg-[url('/image/dark-bagr.png')] bg-[length:300px_100%] bg-no-repeat bg-right bg-fixed">
          <section className="flex flex-col justify-between mb-10">
            <Form />
          </section >
          <CartList />
          <SubTotal />
        </section>
      ) : (
        <CartEmpty />
      )}
    </>
  );
};

export default Cart;
