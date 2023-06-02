export interface ShopType {
  id: string;
  avatar: string;
  name: string;
}

export interface ShopInfo {
  menu: Dish[],
  id: string,
  restaurantId: string
}

export interface Dish {
  title: string;
  img: string;
  description: string;
  price: string;
}