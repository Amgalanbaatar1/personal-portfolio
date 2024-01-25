import { Header } from "../components/HeaderComponents/Header";
import { Chip } from "../components/Chip";
import { About } from "../components/AboutComponents/About";
import { Hero } from "@/components/HeaderComponents/Hero";
import { Experience, Upwork, UpworkL } from "@/components/ExperienceComp/Experience";
import { Skillicon } from "@/components/SkillsComponents/Skill";
import { Work } from "@/components/Workcomponents/Work";

export default function Home() {
  return (
    <div className="bg-[#F9FAFB]">
      <Header />
      <Hero />
      <div className="flex justify-center">
        <Chip label={"About Me"} />
      </div>
      <About />
      <Skillicon />
      <Experience />
      <Work />
    </div>
  );
}
