import Image from "next/image";
const Intro = () => {
  return (
    <section className="flex w-full rounded-3xl bg-dark bg-right justify-between">
      <section className="relative basis-2/3 h-96 py-9 px-12 flex flex-col">
        <h1 className="text-white text-6xl font-bold mb-10">
          Make Your First Order
        </h1>
        <p className="text-white text-2xl w-2/3">
          Spend more time doing what you love – we’ll take care of tasty meals,
          fresh groceries and new flavours.
        </p>
        <button className="w-52 bg-orange-400 h-16 rounded-3xl text-white font-bold text-2xl mt-14 hover:bg-orange-500">
          Order now
        </button>
      </section>
      <Image
          src="/image/pizza.png"
          className=""
          alt="vegetables"
          width={400}
          height={300}
        />
    </section>
  );
};

export default Intro;
