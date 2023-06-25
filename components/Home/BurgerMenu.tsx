"use client";

import { ShopType } from "@/types/shops";
import Shop from "./Shop";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type BurgerMenuProps = {
  restaurants: ShopType[];
};

const BurgerMenu = ({ restaurants }: BurgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null)

  useEffect(() => {

    const handleClickOuside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Element)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOuside)
    return (() => {
      document.removeEventListener('click', handleClickOuside)
    })
  }, [])

  return (
    <section ref={menuRef}>
      <button className="visible sm:invisible" onClick={(e) => setIsOpen(!isOpen)}>
        <Image src="/image/down-arrow.svg" width={44} height={40} alt='arrow-menu' />
      </button>
      <ul className={`${isOpen ? 'flex flex-col absolute w-11/12 animate right-2 top-14' : "hidden"} basis-2/3 bg-gray-300 py-1 rounded-xl flex-wrap gap-4 font-medium sm:invisible`}>
        {restaurants.map((shop: ShopType) => {
          return <Shop callback={() => setIsOpen(false)} key={shop.id} shop={shop} />;
        })}
      </ul>
    </section>
  );
};

export default BurgerMenu;
