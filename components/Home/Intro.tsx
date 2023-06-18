import Image from "next/image";
const Intro = () => {
  return (
    <section className="flex w-full rounded-3xl bg-dark bg-right justify-between">
      <section className="relative h-48 py-2 pl-3 flex flex-col lg:h-96 lg:px-12 md:py-9 sm:h-72 sm:px-6 ">
        <h1 className="text-white text-sm font-bold mb-1 xl:text-6xl lg:mb-10 lg:text-4xl sm:text-xl sm:mb-4">
          Make Your First Order
        </h1>
        <p className="text-white text-sm w-full overflow-hidden text-ellipsis lg:text-xl xl:text-2xl md:w-2/3 sm:text-lg sm:">
          Spend more time doing what you love – we’ll take care of tasty meals,
          fresh groceries and new flavours.
        </p>
        <button className="bg-orange-400 h-10 rounded-3xl text-white font-bold text-sm mt-4 hover:bg-orange-500 lg:mt-8 lg:h-16 lg:w-52 xl:mt-14 sm:text-2xl">
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
