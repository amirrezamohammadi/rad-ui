import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Showcase } from "@/components/showcase";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Showcase />
    </main>
  );
}

