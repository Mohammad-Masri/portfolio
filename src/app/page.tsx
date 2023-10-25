import Header from "./sections/header";
import Education from "./sections/education";
import Experiences from "./sections/experiences";
import Specializations from "./sections/specializations";
import Summary from "./sections/summary";
import Contact from "./sections/contact";
import Footer from "./sections/footer";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 min-h-screen w-full">
      <Header />
      <Summary />
      <Education />
      <Specializations />
      <Experiences />
      <Contact />
      <Footer />
    </main>
  );
}
