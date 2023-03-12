import {
  CurrentFilter,
  Filter,
} from "modules/our-store/pages/OurStore/constant";
import React from "react";

type Props = {} & Filter;

const arr = [
  { label: "laptop", value: "laptop" },
  { label: "smartphone", value: "smartphone" },
  { label: "tablet", value: "tablet" },
  { label: "headphones", value: "headphones" },
  { label: "smartwatch", value: "smartwatch" },
  { label: "camera", value: "camera" },
  { label: "gaming console", value: "gaming console" },
  { label: "printer", value: "printer" },
];

const ProductTags = ({ handleFilter, currentFilter }: Props) => {
  return (
    <div className="p-4 mb-5 shadow-md rounded-lg border border-slate-200/50 ">
      <h1 className="font-semibold mb-4">ProductTags</h1>
      <ul className="flex flex-wrap gap-3">
        {arr?.map((item) => (
          <li
            key={item.label}
            className={`${
              currentFilter?.["tags"]?.includes(item)
                ? "text-orange-400 bg-orange-200"
                : "text-slate-500 bg-slate-200"
            } basic__transition cursor-pointer rounded-lg px-2 py-1`}
            onClick={handleFilter("tags", item, true)}
          >
            <h3 className="capitalize text-sm  font-semibold ">{item.label}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductTags;
