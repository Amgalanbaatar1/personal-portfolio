import { Header } from "../components/HeaderComponents/Header";
import { Chip } from "../components/Chip";
import { About } from "../components/AboutComponents/About";
import { Hero } from "@/components/HeaderComponents/Hero";
import { Experience, Upwork, UpworkL } from "@/components/ExperienceComp/Experience";
import { Skillicon } from "@/components/SkillsComponents/Skill";
import { Work } from "@/components/Workcomponents/Work";
import { DesignedBy, Footer } from "@/components/Footercomponents/Footer";

export default function Home() {
  return (
    <div className="bg-[#F9FAFB] dark:bg-black">
      <Header />
      <Hero />
      <About />
      <Skillicon />
      <Experience />
      <Work />
      <Footer />
      <DesignedBy />
    </div>
  );
}
