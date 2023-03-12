import { Checkbox } from "@chakra-ui/react";
import { filterBy } from "modules/our-store/pages/OurStore/constant";
import React from "react";
type Props = {
  handleFilter: any;
  currentFilter: any;
};
const Sizes = ({ currentFilter, handleFilter }: Props) => {
  return (
    <>
      <h3 className="font-semibold capitalize ">Sizes </h3>
      <ul className="  grid gap-y-3">
        {filterBy["sizes"]?.map((checkBoxItem, i) => (
          <li className="" key={i}>
            <Checkbox
              colorScheme={"orange"}
              isChecked={currentFilter["sizes"]?.includes(checkBoxItem)}
              onChange={handleFilter("sizes", checkBoxItem, true)}
            >
              <div className="!flex !items-center gap-x-2">
                <h5
                  className={`transition text-sm ${
                    currentFilter["sizes"]?.label === checkBoxItem.label
                      ? " font-semibold"
                      : ""
                  }  text-slate-500  `}
                >
                  {checkBoxItem.label}
                </h5>
                <span className="text-xs translate-y-[1px] ">
                  ({Math.floor(17 / ++i)})
                </span>
              </div>
            </Checkbox>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Sizes;
