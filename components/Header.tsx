import Link from "next/link";
import Image from "next/image";
import MapButton from "./MapButton";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-16 h-screen shadow-[2px_2px_15px_rgba(0,0,0,0.15)] md:w-24 sm:w-14 sm: ">
      <nav className="py-5 pl-2 text-white text-2xl font-bold flex flex-col gap-3  md:gap-5">
        <Link href="/" className="hover:text-slate-600">
          <Image src="/image/menu.svg" className="m-0" alt="menu" width={96} height={96} />
        </Link>
        <span></span>
        <Link href="/cart" className="hover:text-slate-600">
          <Image
            src="/image/cart.png"
            className="m-auto"
            alt="shopping cart"
            width={64}
            height={60}
          />
        </Link>
        <MapButton />
   
      </nav>
    </header>
  );
};

export default Header;
