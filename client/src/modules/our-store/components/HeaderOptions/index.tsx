import React from "react";
import ReactSelect from "react-select";
import { AlignProps } from "../Products/constants";
import { arrOfAligns, options } from "./constant";
type Props = {
    currentAlign:AlignProps
    handleCurrentAlign(item:AlignProps):void
};


const HeaderOptions = ({currentAlign,handleCurrentAlign}: Props) => {
  return (
    <div className="p-2 pl-4 border-slate-200/75 border flex items-center justify-between  shadow-md rounded-lg mb-5 ">
      <div className="flex items-center gap-x-2 z-[1] ">
        <h2 className="text-sm font-semibold">Sort By: </h2>
        <ReactSelect
          className="scale-90"
          defaultValue={options[0]}
          options={options}
        />
      </div>
      <div className="flex items-center gap-x-2">
        <h4 className="text-sm  text-slate-400 ">21 Products</h4>
        <ul className="flex gap-x-2">
          {arrOfAligns.map((item, idx) => (
            <li
              key={idx}
              onClick={() => handleCurrentAlign(item)}
              className={`basic__transition cursor-pointer h-fit ${
                item.name === currentAlign.name
                  ? "bg-dark-accent-3 text-white"
                  : ""
              } p-1.5 rounded-md `}
            >
              <span>{item.icon}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeaderOptions;
