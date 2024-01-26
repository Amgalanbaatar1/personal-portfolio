import { menuItems } from "@/components/Data/menuItems";
import { Logo } from "../icons/Logo";
import { Menu } from "../icons/Menu";
import { Mainmenu } from "@/components/Data/Mainmenu";
import { ThemeChanger } from "../ThemeChanger";
export function Header() {
  return (
    <div className=" flex justify-between px-20 py-4  container mx-auto  max-md:p-4 dark:bg-[#030712] ">
      <Logo />
      <div className="flex md:hidden ">
        <Menu />
      </div>
      <div className="hidden md:flex list-none gap-5 dark:text-white text-xl ">
        <Mainmenu items={menuItems} />
        <ThemeChanger />
        <div className="border dark:bg-white bg-black  flex rounded-xl w-32 min-h-9 justify-center ali text-white  dark:text-black items-center">Download CV</div>
      </div>
    </div>
  );
}
