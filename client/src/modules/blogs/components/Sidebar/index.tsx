import {
  categories,
  CurrentFilterProps,
  filterKeyProps,
  LabelValueProps,
} from "modules/our-store/pages/OurStore/constant";
import React, { useState } from "react";

type Props = {};

const Sidebar = (props: Props) => {
  const [currentFilter, setCurrentFilter] = useState<{ [key: string]: string }>(
    {
      categories: "",
    }
  );
  const handleFilter =
    (type: string, item: string, moreThanOneValues = false) =>
    () => {
      setCurrentFilter((prev) => ({
        ...prev,
        [type]: prev[type as filterKeyProps] === item ? "" : item,
      }));
    };
  return (
    <div className="lg:col-span-3   col-span-12  ">
      <div className=" rounded shadow-md p-2.5 ">
        <h1 className="mb-4 font-bold text-lg ">Find By Categories</h1>
        <ul className="  grid gap-y-3 ">
          {categories.map((item) => (
            <li key={item}>
              <button
                type="button"
                onClick={handleFilter("categories", item)}
                className={`basic__transition w-fit text-sm ${
                  currentFilter["categories"] === item ? " font-semibold" : ""
                }  text-slate-500  `}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
