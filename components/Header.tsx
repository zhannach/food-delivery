import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-24 h-screen shadow-[2px_2px_15px_rgba(0,0,0,0.15)]">
      <nav className="py-5 pl-2 text-white text-2xl font-bold flex flex-col gap-5">
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
        <button className="hover:text-slate-600">
          <Image
            src="/image/map.png"
            alt="shopping cart"
            className="m-auto"  
            width={64}
            height={60}
          />
        </button>
      </nav>
    </header>
  );
};

export default Header;
