import { Header } from "../pages/Header";
import { Chip } from "../components/Chip";
import { HeaderItems } from "../pages/Header";
import { MainItems } from "./MainItems";
export default function Home() {
  return (
    <div>
      <Header />
      <HeaderItems />
      <div className="flex justify-center">
        <Chip label={"About Me"} />
      </div>

      <MainItems />
      <div className="flex justify-center mt-40">
        <Chip label={"Skills"} />
      </div>
    </div>
  );
}
