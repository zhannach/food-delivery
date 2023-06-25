import Image from "next/image";
const Intro = () => {
  return (
    <section className="flex w-full rounded-3xl bg-dark bg-right justify-between max-h-44 sm:max-h-96">
      <section className="relative basis-2/3 h-full py-2 pl-3 flex flex-col lg:pl-12 md:py-9 sm:pl-6">
        <h1 className="text-white text-sm font-bold mb-1 xl:text-6xl lg:mb-10 lg:text-4xl sm:text-xl sm:mb-4">
          Make Your First Order
        </h1>
        <p className="text-white text-sm w-full hidden lg:text-xl xl:text-2xl md:w-2/3 sm:text-lg min-[480px]:block">
          Spend more time doing what you love – we’ll take care of tasty meals,
          fresh groceries and new flavours.
        </p>
        <button className="bg-orange-400 h-10 w-full rounded-3xl text-white font-bold text-sm mt-4 hover:bg-orange-500 lg:mt-8 lg:h-16 lg:w-52 xl:mt-14 sm:text-2xl min-[480px]:w-1/2">
          Order now
        </button>
      </section>
      <Image
          src="/image/pizza.png"
          className="basis-1/3 w-100 sm:300"
          alt="vegetables"
          width={300}
          height={250}
          quality={65}
        />
    </section>
  );
};

export default Intro;
