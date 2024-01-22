export function Skill({ title }) {
  return (
    <div className="p-3 ">
      <img style={{ width: 68, height: 70 }} src={`/images/${title}.png`} alt="Icon" />
      <p>{title}</p>
    </div>
  );
}

export function Skillicon() {
  return (
    <div className="border-2 flex justify-between px-20 py-4  container mx-auto  max-md:p-4 flex-col">
      <p className="order-1 m-auto">The skills, tools and technologies I am really good at:</p>
      <div
        className="flex flex-wrap gap-8 items-center justify-center max-w-5xl  border
  container mx-auto order-2"
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
  );
}
