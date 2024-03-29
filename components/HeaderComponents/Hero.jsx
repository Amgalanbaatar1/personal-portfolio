export function Hero() {
  return (
    <div className=" lg:flex container mx-auto dark:bg-[#030712]   ">
      <div className=" my-10 order-2 flex items-center justify-center ">
        <img src="/images/profile.png" alt="profile" />
      </div>
      <div className=" order-1 lg:w-[70%]  max-xl:px-5 max-xl:py-8  xl:py-24 px-20 ">
        <h2 className="  lg:w-[70%] font-sans font-bold text-6xl dark:text-[#F9FAFB]"> Hi, I’m Sagar 👋</h2>
        <p className="mt-2 text-base text font-normal decoration-gray-600 font-sans  flex justify-center items-center lg:w-[85%] dark:text-[#D1D5DB]">
          I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and
          responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.
        </p>
        <div className="my-12">
          <div className="flex gap-2">
            <img src="/images/iconloc.png" alt="Icon" />
            <p className="dark:text-[#D1D5DB]">Ahmedabad, India</p>
          </div>
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-green-600 rounded-lg mt-2  ml-2"></div>
            <p className="dark:text-[#D1D5DB]">Available for new projects</p>
          </div>
        </div>

        <div className="flex gap-1 ">
          <img src="/images/giticonp.png" alt="Giticon " />
          <img src="/images/twitter.png" alt="Twitter " />
          <img src="/images/figmas.png" alt="Figma " />
        </div>
      </div>
    </div>
  );
}
