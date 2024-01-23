import { Chip } from "../Chip";

export function Experience() {
  return (
    <div className=" lg:flex container mx-auto  bg-[#F9FAFB] py-5 px-4 lg:flex-col ">
      <div className="flex justify-center mb-4">
        <Chip label={"Experience"} />
      </div>
      <p className="text-center mb-5">Here is a quick summary of my most recent experiences:</p>
      <div className=" bg-white w-80 h-96 rounded-xl m-auto p-8  shadow-2xl lg:w-[896px] lg:h-[288px] ">
        <img style={{ marginBottom: 10 }} src="/images/upwork.png" />
        <h3 className="mb-4 lg:hidden">Nov 2021 - Present</h3>
        <div className="lg:flex flex-col lg:w-[384px] lg:h-[224px] lg:mx-auto my-auto ">
          <b className="mb-4">Sr. Frontend Developer</b>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
          <li>Sed quis justo ac magna.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </div>
      </div>
    </div>
  );
}

export function Upwork() {
  return (
    <div className=" lg:flex container mx-auto  bg-[#F9FAFB] px-4 lg:flex-col ">
      <div className=" bg-white w-80 h-96 rounded-xl m-auto p-8  shadow-2xl lg:w-[896px] lg:h-[288px] ">
        <img style={{ marginBottom: 10 }} src="/images/upwork.png" />
        <h3 className="mb-4 lg:hidden">Nov 2021 - Present</h3>
        <div className="lg:flex flex-col lg:w-[384px] lg:h-[224px] lg:mx-auto my-auto ">
          <b className="mb-4">Sr. Frontend Developer</b>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
          <li>Sed quis justo ac magna.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </div>
      </div>
    </div>
  );
}

export function UpworkL() {
  return (
    <div className=" lg:flex container mx-auto  bg-[#F9FAFB] py-5 px-4 lg:flex-col  mt-none">
      <div className=" bg-white w-80 h-96 rounded-xl m-auto p-8  shadow-2xl lg:w-[896px] lg:h-[288px] ">
        <img style={{ marginBottom: 10 }} src="/images/upwork.png" />
        <h3 className="mb-4 lg:hidden">Nov 2021 - Present</h3>
        <div className="lg:flex flex-col lg:w-[384px] lg:h-[224px] lg:mx-auto my-auto ">
          <b className="mb-4">Sr. Frontend Developer</b>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
          <li>Sed quis justo ac magna.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </div>
      </div>
    </div>
  );
}
