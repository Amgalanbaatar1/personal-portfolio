import { menuItems } from "@/components/Data/menuItems";
import { Logo } from "../components/icons/Logo";
import { Menu } from "../components/icons/Menu";
import { Mainmenu } from "@/components/Data/Mainmenu";
export function Header() {
  return (
    <div className="border-2 flex justify-between px-20 py-4  container mx-auto  max-md:p-4 ">
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

export function HeaderItems() {
  return (
    <div className=" lg:flex container mx-auto border border-red-400   ">
      <div className=" my-10 order-2 flex items-center justify-center ">
        <img src="/images/profile.png" alt="profile" />
      </div>
      <div className=" order-1 lg:w-[70%] border py-24 px-20 ">
        <h2 className="  lg:w-[70%] font-sans font-bold text-6xl"> Hi, I’m Sagar 👋</h2>
        <p className="mt-2 text-base text font-normal decoration-gray-600 font-sans  flex justify-center items-center lg:w-[85%]">
          I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and
          responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.
        </p>
        <div className="my-12">
          <div className="flex gap-2">
            <img src="/images/iconloc.png" alt="Icon" />
            <p>Ahmedabad, India</p>
          </div>
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-green-600 rounded-lg mt-2  ml-2"></div>
            <p>Available for new projects</p>
          </div>
        </div>

        <div className="flex gap-1">
          <img src="/images/git.png" alt="Giticon " />
          <img src="/images/twitter.png" alt="Twitter " />
          <img src="/images/figma.png" alt="Figma " />
        </div>
      </div>
    </div>
  );
}
