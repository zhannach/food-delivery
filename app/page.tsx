import Shops from "@/components/Shops";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      {/* @ts-expect-error server component */}
      <Shops />
      <div className="w-10/12 my-10 self-end items-center justify-between font-mono text-sm lg:flex">
      <Menu />
      </div>
    </main>
  );
}
