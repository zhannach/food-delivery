import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed w-full bg-slate-400 z-10 h-16">
      <nav className="p-5 text-white text-2xl font-bold flex gap-5">
        <Link href="/" className="hover:text-slate-600">Shop</Link>
        <span>|</span>
        <Link href="/cart" className="hover:text-slate-600">Shopping cart</Link>
      </nav>
    </header>
  );
};

export default Header;
