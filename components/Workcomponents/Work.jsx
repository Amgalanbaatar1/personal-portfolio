export function Work(props) {
  const { image } = props;
  return (
    <div className="container mx-auto flex gap-5 flex-col  border py px-4 lg:py-24 lg:px-20 ">
      <div className="flex justify-center ">
        <Chip label={"work"} />
      </div>
      <p className="flex items-center justify-center">Some of the noteworthy projects I have built:</p>
      <div className="flex gap-10 border p-12 shadow-xl rounded-xl max-lg:flex-col ">
        <div className=" flex-1 w-[576px]   max-md:w-[300px]">
          <img src="/images/work.png" alt="Work " />
        </div>
        <WorkDetail />
      </div>
    </div>
  );
}

const WorkDetail = () => {
  return (
    <div className=" flex-1 flex gap-8  bg-white flex-col w-[576px] rounded-xl p-12   max-md:w-[300px] lg:items-center justify-center">
      <h2 className="text-grey-900 text-xl">Fiskil</h2>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
      </p>
      <Chips />
      <a href="">
        <img src="/images/icon/icon.svg" alt="Share btn" />
      </a>
    </div>
  );
};

import { Chip } from "../Chip";
const Chips = () => {
  return (
    <div className="flex gap-2 flex-wrap items-center justify-cen">
      <Chip label={"React"} />
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
