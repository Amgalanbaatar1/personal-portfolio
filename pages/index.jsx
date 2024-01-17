import { Header } from "../pages/Header";
import { Chip } from "../componendss/icons/Chip";
export default function Home() {
  return (
    <div>
      <Header />
      <div className="px-4 lg:flex container mx-auto border border-red-400 py-[96px]">
        <div className="flex justify-center mt-10 order-2">
          <img style={{ boxShadow: "-1px 20px 0px 10px", color: "grey" }} src="/images/profile.png" alt="profile" />
        </div>
        <div className="mt-20 order-1 lg:w-[70%]">
          <h2 className=" lg:w-[70%] font-sans font-bold text-6xl"> Hi, I’m Sagar 👋</h2>
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

      <div className="flex justify-center">
        <Chip label={"About me"} />
      </div>
      <div className="lg:flex">
        <div className="px-4 lg:flex container mx-auto border  py-[96px] justify-center">
          <img className="object-cover" style={{ marginRight: "350px" }} src="/images/Sagar.png" alt="Sagar" />

          <div className="text-gray-600 lg:w-[40%]">
            <h2 className=" lg:w-[70%] font-sans font-bold text-2xl  text-gray-900">Curious about me? Here you have it:</h2>
            <p className="mb-5 ">
              I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of
              digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
            </p>
            <p className="mb-5 ">
              I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the
              way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript,
              Nestjs, Tailwindcss, Supabase and much more.
            </p>
            <p className="mb-5 ">I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>
            <p className="mb-5 ">
              When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow
              me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
            </p>
            <p className="mb-5 ">Finally, some quick bits about me.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
