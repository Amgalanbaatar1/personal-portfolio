import { Header } from "../pages/Header";
import { Chip } from "../components/Chip";
import { About } from "../components/About";
import { Hero } from "@/components/Hero";
import { Skills } from "../components/Skills";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="flex justify-center">
        <Chip label={"About Me"} />
      </div>
      <About />
      <div className="flex justify-center ">
        <Chip label={"Skills"} />
      </div>
      <Skills />
    </div>
  );
}
