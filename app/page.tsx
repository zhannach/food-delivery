import Shops from "@/components/Home/Shops";
import Menu from "@/components/Home/Menu";
import Intro from "@/components/Home/Intro";

export default function Home() {
  return (
    <main className="flex ml-16 min-h-screen flex-col items-center justify-between px-2 py-6 lg:p-16 md:p-8 sm:ml-20">
      <Intro />
      {/* @ts-expect-error server component */}
      <Shops />
      <Menu />
    </main>
  );
}
