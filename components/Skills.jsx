import { JavaIcon } from "./icons/icon-javscript";
import { ReactIcon } from "./icons/ReactIcon";
import { TypeScripticon } from "./icons/TypeScripticon";
import { NextJsIcon } from "./icons/NextjsIcon";
import { NodejsIcon } from "./icons/NodejsIcon";
import { ExpressJsIcon } from "./icons/ExpressJSicon";
import { NestJsIcon } from "./icons/NestJsIcon";
import { SocketioIcon } from "./icons/SocketIO";

export function Skills() {
  return (
    <div className=" max-xl:px-4 max-xl:py-16  xl:px-20 py-24 lg:flex container mx-auto border justify-center  gap-[280px]  ">
      <p className="flex justify-center text-center">The skills, tools and technologies I am really good at:</p>
      <div className="flex flex-col gap-10">
        <div className="flex items-center  justify-center gap-20">
          <JavaIcon />
          <TypeScripticon />
          <ReactIcon />
        </div>
        <div className="flex items-center  justify-center gap-20 ">
          <NextJsIcon />
          <NodejsIcon />
          <ExpressJsIcon />
        </div>
        <div className="flex items-center  justify-center gap-20">
          <NestJsIcon />
          <SocketioIcon />
          <img src="/images/iconPost.png" alt="Post" />
        </div>
        <div className="flex  justify-center gap-20 ">
          <img src="/images/mongodicon.png" alt="MongodDIcon" />
          <img src="/images/sassicon.png" alt="Sass" />
          <img style={{ width: 64, height: 64 }} src="/images/tailwindcssicon.png" alt="Tailwind" />
        </div>
        <div className="flex items-center  justify-center gap-20">
          <img src="/images/figmaicon.png" alt="FigmaIcon" />
          <img src="/images/cypressicon.png" alt="Cypressicon" />
          <img src="/images/storybookicon.png" alt="StoryBookIcon" />
        </div>
      </div>
    </div>
  );
}
