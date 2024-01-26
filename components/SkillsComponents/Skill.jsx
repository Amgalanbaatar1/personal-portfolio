import { Chip } from "../Chip";

export function Skill({ title }) {
  return (
    <div className="p-3  object-fit items-center flex flex-col">
      <img style={{ objectFit: "contain" }} src={`/images/${title}.png`} alt="Icon" />
      <p>{title}</p>
    </div>
  );
}

export function Skillicon() {
  return (
    <>
      <div className=" flex justify-between px-20 py-24  container mx-auto  max-md:p-4 flex-col dark:bg-[#030712] ">
        <div className="flex justify-center mb-4">
          <Chip label={"Skills"} />
        </div>
        <p className="order-1 mx-auto dark:text-[#D1D5DB] ">The skills, tools and technologies I am really good at:</p>
        <div
          className="flex flex-wrap gap-8 items-center justify-center max-w-5xl  
  container mx-auto order-2 p-1 dark:text-[#D1D5DB] "
        >
          <Skill title={"Javascript"} />
          <Skill title={"Typescript"} />
          <Skill title={"React"} />
          <Skill title={"Next.js"} />
          <Skill title={"Node.js"} />
          <Skill title={"Express"} />
          <Skill title={"Nest.js"} />
          <Skill title={"Socket.io"} />
          <Skill title={"PostgreSQL"} />
          <Skill title={"MongoDB"} />
          <Skill title={"Sass"} />
          <Skill title={"Tailwind"} />
          <Skill title={"Figma"} />
          <Skill title={"Cypress"} />
          <Skill title={"Storybook"} />
          <Skill title={"Git"} />
        </div>
      </div>
    </>
  );
}
