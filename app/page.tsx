import Shops from "@/components/Home/Shops";
import Menu from "@/components/Home/Menu";
import Intro from "@/components/Home/Intro";

export default function Home() {
  return (
    <main className="flex ml-20 min-h-screen flex-col items-center justify-between p-16">
      <Intro />
      {/* @ts-expect-error server component */}
      <Shops />
      <div className="my-10 self-end items-center justify-between text-sm">
        <Menu />
      </div>
    </main>
  );
}
