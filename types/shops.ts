export interface ShopType {
  id: string;
  avatar: string;
  name: string;
}

export interface ShopInfo {
  menu: Dishes[],
  id: string,
  restaurantId: string
}

export interface Dishes {
  title: string;
  img: string;
  description: string;
  price: string;
}
