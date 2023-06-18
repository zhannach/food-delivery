import { ShopType } from "@/types/shops";
import Shop from "./Shop";
import { headers } from "next/headers";
import BurgerMenu from "./BurgerMenu";

async function getRestaurants(host: string): Promise<ShopType[]> {
  const res = await fetch(
    `http://${host}/api/`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Shops(): Promise<JSX.Element> {
  const host = headers().get("host") as string;
  const restaurants = await getRestaurants(host);
  return (
    <section className="my-12 w-full 2xl:w-11/12">
      <div className="flex justify-between relative px-8">
        <h3 className="font-bold text-5xl">Menu</h3>
        <ul className="hidden basis-2/3 flex-wrap gap-4 font-medium sm:flex">
          {restaurants.map((shop: ShopType) => {
            return <Shop key={shop.id} shop={shop} />;
          })}
        </ul>
        <BurgerMenu restaurants={restaurants}/>
      </div>
    </section>
  );
}
