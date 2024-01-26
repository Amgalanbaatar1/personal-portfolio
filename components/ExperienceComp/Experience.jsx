import { Chip } from "../Chip";
// import { UpworkIcon } from "/images/upwork.png";

const experienceData = [
  {
    logo: "/images/icon/upwork.svg",
    position: "Sr. Frontend Developer",
    list: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
    date: "Nov 2021 - Present",
  },
  {
    logo: "/images/icon/upwork.svg",
    position: "Team Lead",
    list: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
    date: "Nov 2021 - Present",
  },
  {
    logo: "/images/icon/upwork.svg",
    position: "Full Stack Developer",
    list: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
    date: "Nov 2021 - Present",
  },
];

export const Experience = () => {
  return (
    <div>
      <div className="flex justify-center mb-4 ">
        <Chip label={"Experience"} />
      </div>
      <p className="text-center mb-5">Here is a quick summary of my most recent experiences:</p>
      {experienceData.map((experience, index) => (
        <ExperienceCard key={index} {...experience} />
      ))}
    </div>
  );
};

export function ExperienceCard(props) {
  const { logo, position, list, date } = props;

  return (
    <div className=" lg:flex container mx-auto  bg-[#F9FAFB] py-5 px-4 lg:flex-col dark:bg-[#111827] ">
      <div className=" bg-white w-80 h-96 rounded-xl m-auto p-8  shadow-2xl lg:w-[896px] lg:h-[288px] dark:bg-[#1F2937] ">
        <img style={{ marginBottom: 10 }} src={logo} />
        <h3 className="mb-4 lg:hidden">Nov 2021 - Present</h3>
        <div className="lg:flex flex-col lg:w-[384px] lg:h-[224px] lg:mx-auto my-auto ">
          <b className="mb-4 dark:text-[#F9FAFB] ">{position}</b>
          {list.map((item, index) => (
            <li className="dark:text-[#D1D5DB]" key={index}>
              {item}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
