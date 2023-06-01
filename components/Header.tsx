import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-slate-400 h-16">
      <nav className="p-5 text-white text-2xl font-bold flex gap-5">
        <Link href="/" className="hover:text-slate-600">Restaurants</Link>
        <span>|</span>
        <Link href="/cart" className="hover:text-slate-600">Food Cart</Link>
      </nav>
    </header>
  );
};

export default Header;
