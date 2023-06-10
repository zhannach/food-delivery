import { ShopType } from "@/types/shops";
import Shop from "./Shop";

async function getRestaurants() {
  const res = await fetch(
    "https://647894c5362560649a2e0d8e.mockapi.io/restaurants",
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Shops(): Promise<JSX.Element> {
  const restaurants = await getRestaurants();
  return (
    <section className="my-12 w-11/12">
      <div className="flex justify-between">
        <h3 className="font-bold text-5xl">Our Menu</h3>
        <ul className="flex gap-4 font-medium">
          {restaurants.map((shop: ShopType) => {
            return <Shop key={shop.id} {...shop} />;
          })}
        </ul>
      </div>
    </section>
  );
}
