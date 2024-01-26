import { FiMail } from "react-icons/fi";
import { Chip } from "../Chip";
import { MdOutlineContentCopy } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { TbBrandGithub } from "react-icons/tb";
import { RxTwitterLogo } from "react-icons/rx";
import { FaFigma } from "react-icons/fa6";
export function Footer() {
  return (
    <div className=" flex lg:py-24 lg:px-20 container mx-auto  dark:bg-[#030712] max-md:p-4 borde  flex-col items-center justify-center ">
      <div className="px-8 flex flex-col items-center justify-center">
        <div className="flex justify-center mb-4">
          <Chip label={"Get in touch"} />
        </div>
        <p className="mb-12 text-gray-600 dark:text-[#D1D5DB]">What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
        <div className="flex text-2xl lg:text-3xl gap-2 items-center dark:text-[#D1D5DB]">
          <FiMail />
          <b className="text-xl mb-4 lg:text-4xl">reachsagarshah@gmail.com</b>
          <MdOutlineContentCopy />
        </div>

        <div className="flex text-2xl lg:text-3xl  gap-2 items-center mb-4 dark:text-[#D1D5DB]">
          <IoCallOutline />
          <b className=" text-xl lg:text-4xl">+91 8980500565</b>
          <MdOutlineContentCopy />
        </div>
        <p className="mb-4 text-gray-600 dark:text-[#D1D5DB]">You may also find me on these platforms!</p>
        <div className="flex text-2xl lg:text-3xl dark:text-[#D1D5DB]">
          <TbBrandGithub />
          <RxTwitterLogo />
          <FaFigma />
        </div>
      </div>
    </div>
  );
}
import { BiCopyright } from "react-icons/bi";
export function DesignedBy() {
  return (
    <div className=" flex justify-between px-20 py-4  container mx-auto  max-md:p-4 border dark:bg-[#030712]">
      <div className=" flex items-center justify-center mx-auto dark:text-[#D1D5DB]">
        <BiCopyright />
        <p>2023 | Designed and coded with ❤️️ by Sagar Shah</p>
      </div>
    </div>
  );
}
