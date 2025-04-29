import React from "react";
import FaqItem from "./FaqItem";

const data = [
  {
    title: "AI-Powered Consulting",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
      ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.`,
  },
  {
    title: "Process Optimization & Automation",
    content:
      "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
  },
  {
    title: "Strategic Advisory",
    content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.`,
  },
  {
    title: "Capacity Building",
    content: <p>Current version is <strong>1.2.1</strong></p>,
  },
];

function CoreServices() {
  return (
    <div className="w-full flex flex-col bg-white py-[50px]">
      <div className="flex flex-col items-center justify-center mb-[50px] lg:mb-[110px]">
        <h1 className="text-[54px] font-semibold">Core Services</h1>
        <span className="text-[24px] font-light text-center md:!text-left text-[#585858]">
          Your Partner for Transformative Growth
        </span>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center px-[20px] md:px-[100px] gap-[40px] lg:gap-[229px]">
        <img src="/assets/core-services.png" alt="core services" />
        <div className="w-full max-w-[500px]">
          {data.map((item, index) => (
            <FaqItem key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoreServices;
