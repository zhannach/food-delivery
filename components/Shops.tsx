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
    <aside className="fixed top-0 left-0 z-0 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
      <div className="h-full px-3 py-28 overflow-y-auto bg-gray-50">
        <ul className="space-y-2 font-medium">
          {restaurants.map((shop: ShopType) => {
            return <Shop key={shop.id} {...shop} />;
          })}
        </ul>
      </div>
    </aside>
  );
}
