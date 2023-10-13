import About from "./sections/about";
import Specializations from "./sections/specializations";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full">
      <About />
      <Specializations />
    </main>
  );
}
