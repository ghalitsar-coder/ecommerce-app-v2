import { Checkbox } from "@chakra-ui/react";
 
import {
  CurrentFilter,
  Filter,
  filterBy,
} from "modules/our-store/pages/OurStore/constant";
type Props = {} & Filter;

const Availability = ({ currentFilter, handleFilter }: Props) => {
  return (
    <>
      <h3 className="font-semibold capitalize ">{"Availability"} </h3>
      <ul className="  grid gap-y-3">
        {filterBy["availability"]?.map((checkBoxItem, i) => (
          <li className="" key={i}>
            <Checkbox
              colorScheme={"orange"}
              isChecked={currentFilter["availability"] === checkBoxItem.label}
              onChange={handleFilter("availability", checkBoxItem.label)}
            >
              <div className="!flex !items-center gap-x-2">
                <h5
                  className={`transition text-sm ${
                    currentFilter["availability"] === checkBoxItem.label
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
export default Availability;
