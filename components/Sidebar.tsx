import { Filter, Price, Tab } from "@/constant";
import React, { useState } from "react";
import Button from "./Button";
import FormField from "./FormField";

const Sidebar = () => {
  const [active, setActive] = useState("feed");
  return (
    <div className="w-[20%] h-screen bg-Bar overflow-y-scroll scrollbar flex flex-col items-center scrollbar-track-transparent scrollbar-thumb-Foundation">
      <div className="border-Foundation px-3 border-b-2 flex flex-col items-start py-6 space-y-9 mt-5">
        {Tab.map((item, i) => (
          <div
            onClick={() => setActive(item.active)}
            key={i}
            className="flex cursor-pointer items-center space-x-3"
          >
            <div
              className={`${
                active === item.active
                  ? "bg-green p-3 rounded-full text-[#ffffff]"
                  : "bg-slate-400/30 p-3 rounded-full"
              } text-white`}
            >
              <item.icon size={25} />
            </div>
            <span className={`${active === item.active ? "text-[#fff]" : "text-Foundation"} text-[18px] font-bold`}>{item.title}</span>
          </div>
        ))}
       <div className="flex flex-col space-y-4 items-center">
       <Button title="Create new listing"   />
       <Button title="Start a live call" isBorder={true}  />
       </div>
      </div>

    {/** filter */}
      <div className="flex flex-col items-start space-y-3 w-full px-4 mt-4">
        <span className="text-[24px] font-bold">Filter</span>
      <FormField title="" isCategory isHidden item={Filter} />
      <FormField title="" isCategory isHidden item={Price} />
      </div>
      <div></div>
    </div>
  );
};

export default Sidebar;
