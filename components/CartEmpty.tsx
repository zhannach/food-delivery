const CartEmpty = () => {
  return (
    <section className="flex mx-auto my-20 gap-8 items-center h-full flex-col bg-gray-100">
     <h2 className="text-3xl font-bold">Cart is empty</h2>
     <p className="text-2xl">Looks like you haven&apos;t added anything to your cart yet.</p>
     <img className="mt-10" src="https://www.godinein.com/assets/frontend/default/images/empty-cart.png"></img>
    </section>
  );
};

export default CartEmpty;
