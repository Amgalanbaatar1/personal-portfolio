import { Header } from "../pages/Header";
import { Chip } from "../components/Chip";
import { About } from "../components/About";
import { Hero } from "@/components/Hero";

import { Experience } from "@/components/Experience";
import { Skillicon } from "@/components/Skill";
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
      <Skillicon />
      <Experience />
    </div>
  );
}
