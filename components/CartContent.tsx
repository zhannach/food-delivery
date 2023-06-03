import CartList from "@/components/CartList";
import Form from "@/components/Form";
import SubTotal from "@/components/SubTotal";

const CartContent = () => {
  return (
    <section className="flex p-20 h-full justify-between bg-gray-100">
      <Form />
      <CartList />
      <SubTotal />
    </section>
  );
};

export default CartContent;
