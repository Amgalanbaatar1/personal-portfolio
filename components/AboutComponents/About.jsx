export function About() {
  return (
    <div className="lg:flex ">
      <div className=" max-xl:px-4 max-xl:py-8  xl:px-20 py-24 lg:flex container mx-auto   justify-center  gap-[280px]  bg-gray-50">
        <div className="max-lg:  flex items-center justify-center  ">
          <img style={{ height: 480, width: 400 }} src="/images/Sagar.png" alt="Sagar" />
        </div>

        <div className="text-gray-600 lg:w-[40%]">
          <h2 className=" lg:w-[70%] font-sans font-bold text-2xl  text-gray-900">Curious about me? Here you have it:</h2>
          <p className="mb-4 ">
            I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital
            products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
          </p>
          <p className="mb-4 ">
            I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the
            way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs,
            Tailwindcss, Supabase and much more.
          </p>
          <p className="mb-4 ">I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>
          <p className="mb-4 ">
            When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow
            me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
          </p>
          <p className="mb-4 ">Finally, some quick bits about me.</p>
          <div className="flex gap-6">
            <div className="flex flex-col gap-4">
              <li>B.E. in Computer Engineering</li>
              <li>Full time freelancer</li>
            </div>
            <div className="flex flex-col gap-4">
              <li>Avid learner</li>
              <li>Aspiring indie hacker</li>
            </div>
          </div>
          <p className="mt-5">One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</p>
        </div>
      </div>
    </div>
  );
}
