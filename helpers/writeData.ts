import { app } from "@/firebase";
import { Dish } from "@/types/shops";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

export type OrderModel = {
  id?: string;
  customer: {
    name: string;
    email: string;
    phone: number;
    address: string;
  };
  items: Dish[];
  totalPrice: number;
};

export function writeUserData({ customer, items, totalPrice }: OrderModel) {
  try {
    const db = getFirestore(app);
    const ordersRef = collection(db, "orders");
    const orderRef = doc(ordersRef);
    const id = orderRef.id;
    setDoc(orderRef, {
      customer,
      items,
      totalPrice,
    })
      .then(() => {
        console.log(111, id);
      })
  } catch (err) {
    console.log(err);
  }
}
