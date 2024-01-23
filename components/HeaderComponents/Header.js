import { menuItems } from "@/components/Data/menuItems";
import { Logo } from "../icons/Logo";
import { Menu } from "../icons/Menu";
import { Mainmenu } from "@/components/Data/Mainmenu";
import { Hero } from "@/components/HeaderComponents/Hero";
export function Header() {
  return (
    <div className=" flex justify-between px-20 py-4  container mx-auto  max-md:p-4 ">
      <Logo />
      <div className="flex md:hidden ">
        <Menu />
      </div>
      <div className="hidden md:flex list-none gap-5">
        <Mainmenu items={menuItems} />
        <img className="w-9" src="/images/icon.png" alt="ModeIcon" />
        <div className="border bg-black  flex rounded-xl w-32 min-h-9 justify-center ali text-white items-center">Download CV</div>
      </div>
    </div>
  );
}
