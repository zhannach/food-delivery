export interface ShopType {
  id: string;
  avatar: string;
  name: string;
}

export interface ShopInfo {
  menu: Dish[];
  id: string;
  restaurantId: string;
}

export interface Dish {
  title: string;
  img: string;
  description: string;
  price: string;
  count?: number;
  shopId: string;
  id: string;
}

export interface User {
  name: string;
  email: string;
  phone: number;
  address: string;
}
