import { Menuitems } from "@/componendss/icons/Menuitem";
import { Logo } from "../componendss/icons/Logo";
import { Menu } from "../componendss/icons/Menu";
export function Header() {
  const menuItems = [
    { label: " About", link: "/About" },
    { label: " Work", link: "/Work" },
    { label: " Testimonials", link: "/Testimonials" },
    { label: " Contact", link: "/Contact" },
  ];
  return (
    <div className="border-2 flex justify-between p-4  container mx-auto">
      <Logo />
      <div className="sm:flex md:hidden">
        <Menu />
      </div>
      <Menuitems />
      <div className="hidden md:flex list-none gap-5">
        <img className="w-9" src="/images/icon.png" alt="ModeIcon" />
        <div className="border bg-black  flex rounded-xl w-32 min-h-9 justify-center ali text-white items-center">Download CV</div>
      </div>
    </div>
  );
}
