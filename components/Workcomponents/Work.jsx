export function Work() {
  return (
    <div className="container mx-auto flex gap-5">
      <div className="p-12 flex-1">
        <img src="/images/Work.png" alt="Work " />
      </div>
      <WorkDetail />
    </div>
  );
}

const WorkDetail = () => {
  return (
    <div className="p-12 flex-1 flex flex-col gap-5  bg-[#F9FAFB] ">
      <h2>Fiskil</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
      </p>
      <Chips />
      <Btn />
    </div>
  );
};

import { Chip } from "../Chip";
const Chips = () => {
  return (
    <div className="flex gap-2">
      <Chip label={"React"} />
      <Chip label={"React"} />
      <Chip label={"React"} />
      <Chip label={"React"} />
      <Chip label={"React"} />
      <Chip label={"React"} />
      <Chip label={"React"} />
      <Chip label={"React"} />
    </div>
  );
};

const Btn = () => {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 19V25C24 25.5304 23.7893 26.0391 23.4142 26.4142C23.0391 26.7893 22.5304 27 22 27H11C10.4696 27 9.96086 26.7893 9.58579 26.4142C9.21071 26.0391 9 25.5304 9 25V14C9 13.4696 9.21071 12.9609 9.58579 12.5858C9.96086 12.2107 10.4696 12 11 12H17"
        stroke="#4B5563"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M21 9H27V15" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M16 20L27 9" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};
