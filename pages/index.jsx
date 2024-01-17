import { Header } from "../pages/Header";
import { Chip } from "../componendss/icons/Chip";
export default function Home() {
  return (
    <div>
      <Header />
      <div className="px-4 sm:flex container mx-auto border border-red-400 py-[96px]">
        <div className="flex justify-center mt-10 order-2">
          <img src="/images/profile.png" alt="profile" />
        </div>
        <div className="mt-20 order-1 ">
          <h2 className="font-sans font-bold text-6xl"> Hi, I’m Sagar 👋</h2>
          <p className="mt-2 text-base text font-normal decoration-gray-600 font-sans  flex justify-center items-center">
            I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.
          </p>
          <div className="flex gap-2">
            <img src="/images/iconloc.png" alt="Icon" />
            <p>Ahmedabad, India</p>
          </div>
          <div className="border "></div>
          <Chip label={"About me"} />
          <Chip label={"Skills"} />
        </div>
      </div>
    </div>
  );
}
