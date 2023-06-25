import { ShopType } from "@/types/shops";
import Shop from "./Shop";
import BurgerMenu from "./BurgerMenu";

async function getRestaurants(): Promise<ShopType[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Shops(): Promise<JSX.Element> {
  const restaurants = await getRestaurants();

  return (
    <section className="my-12 w-full 2xl:w-11/12">
      <div className="flex relative px-8 justify-between">
        <h3 className="font-bold text-5xl">Menu</h3>
        <ul className="hidden basis-2/3 flex-wrap gap-4 font-medium sm:flex">
          {restaurants.map((shop: ShopType) => {
            return <Shop key={shop.id} shop={shop} />;
          })}
        </ul>
        <BurgerMenu restaurants={restaurants} />
      </div>
    </section>
  );
}
