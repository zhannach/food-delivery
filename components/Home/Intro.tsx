const Intro = () => {
  return (
    <section className="bg-zinc-900 w-full h-96 rounded-3xl py-9 px-12 flex flex-col bg-pizza bg-no-repeat bg-right">
      <h1 className="text-white text-5xl font-bold mb-10">Make Your First Order</h1>
      <p className="text-white text-xl w-1/3">
        Spend more time doing what you love – we’ll take care of tasty meals,
        fresh groceries and new flavours.
      </p>
      <button className="w-52 bg-orange-400 h-16 rounded-3xl text-white font-bold text-2xl mt-14 hover:bg-orange-500">Order now</button>
    </section>
  );
};

export default Intro;
