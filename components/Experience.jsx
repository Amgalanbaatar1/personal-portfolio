import { Chip } from "./Chip";

export function Experience() {
  return (
    <div className=" lg:flex container mx-auto border border-red-400  bg-gray-50  ">
      <div className="flex justify-center ">
        <Chip label={"Experience"} />
      </div>
      <p>Here is a quick summary of my most recent experiences:</p>
      <div className="border bg-white w-80 h-96 rounded-xl m-auto p-8 ">
        <img style={{ marginBottom: 10 }} src="/images/upwork.png" />
        <h3>Nov 2021 - Present</h3>
        <b>Sr. Frontend Developer</b>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
        <li>Sed quis justo ac magna.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      </div>
    </div>
  );
}
