import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
} from "@chakra-ui/react";
import {
  categories,
  CurrentFilterProps,
  Filter,
  filterBy,
  filterKeyProps,
  LabelValueProps,
} from "modules/wish-list/pages/WishList/constants";
import { useState } from "react";

type Props = {
  className?:string
};

const Filter = ({className='lg:col-span-3 col-span-12 '}: Props) => {
  const [currentFilter, setCurrentFilter] = useState<
    Partial<CurrentFilterProps>
  >({
    categories: "",
    offers: [],
    stock: {},
  });

  const handleFilter =
    (type: string, item: LabelValueProps | string, moreThanOneValues = false) =>
    () => {
      if (moreThanOneValues) {
        const currentVal = { ...currentFilter };

        const isSizeExist =
          typeof item === "object" &&
          currentVal[type as "offers"]?.find((obj) => obj.label === item.label);
        if (isSizeExist) {
          currentVal[type as "offers"] = currentVal[type as "offers"]?.filter(
            (obj) => obj.label !== item.label
          );
          setCurrentFilter(currentVal);
        } else {
          currentVal[type as "offers"] = [
            ...(currentVal[type as "offers"] || []),
            typeof item === "string" ? { label: item, value: item } : item,
          ];
          setCurrentFilter(currentVal);
        }
      } else {
        setCurrentFilter((prev) => ({
          ...prev,
          [type]: prev[type as filterKeyProps] === item ? "" : item,
        }));
      }
    };
  return (
    <div className={`${className}`}>
      <h1 className="font-semibold  mb-9 ">Filter</h1>

      <Accordion
        className="rounded-lg bg-white shadow-lg basic__border overflow-hidden"
        defaultIndex={[0, 1, 2]}
        allowMultiple
      >
        <AccordionPenawaran
          currentFilter={currentFilter}
          handleFilter={handleFilter}
        />
        <AccordionStock
          currentFilter={currentFilter}
          handleFilter={handleFilter}
        />
        <AccordionCategories
          currentFilter={currentFilter}
          handleFilter={handleFilter}
        />
      </Accordion>
    </div>
  );
};

export default Filter;
const AccordionCategories = ({ currentFilter, handleFilter }: Filter) => {
  return (
    <AccordionItem borderBottom={0}>
      <AccordionButton>
        <Box as="span" flex="1" className="font-semibold" textAlign="left">
          Kategori
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel className="!p-0">
        <ul className=" py-3 grid gap-y-1.5 [&>li]:pl-4 ">
          {categories?.map((category, i) => (
            <li
              className={`hover:bg-slate-100/75 py-2 flex gap-x-2 items-center cursor-pointer ${
                currentFilter["categories" as keyof CurrentFilterProps] ===
                category
                  ? "border-orange-accent-3 border-l-4 "
                  : ""
              } `}
              key={i}
              onClick={handleFilter("categories", category)}
            >
              <h3
                onClick={(e) => {
                  e.stopPropagation();
                  handleFilter("categories", category)();
                }}
                className={`text-sm cursor-pointer basic__transition ${
                  currentFilter["categories" as keyof CurrentFilterProps] ===
                  category
                    ? "  font-semibold text-orange-accent-3 "
                    : ""
                } `}
              >
                {" "}
                {category}{" "}
              </h3>
            </li>
          ))}
        </ul>
      </AccordionPanel>
    </AccordionItem>
  );
};

const AccordionStock = ({ currentFilter, handleFilter }: Filter) => {
  return (
    <AccordionItem>
      <AccordionButton>
        <Box as="span" flex="1" className="font-semibold" textAlign="left">
          Stock
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel className="!p-0">
        <ul className=" py-3 grid gap-y-3 [&>li]:pl-4 ">
          {filterBy["stocks"]?.map((stock, i) => (
            <li
              className="hover:bg-slate-100/75 py-2 flex gap-x-2 items-center "
              key={i}
              onClick={handleFilter("stock", stock)}
            >
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  handleFilter("stock", stock)();
                }}
                className={`cursor-pointer basic__transition border-2  w-5 h-5 rounded-full ${
                  currentFilter["stock"]?.label === stock.label
                    ? "border-orange-accent-3 border-2 grid place-items-center font-semibold"
                    : ""
                }  `}
              >
                <div
                  className={` basic__transition  ${
                    currentFilter["stock"]?.label === stock.label
                      ? "bg-orange-accent-3  w-3 h-3 rounded-full  font-semibold"
                      : ""
                  }  `}
                ></div>
              </div>
              <h3
                onClick={(e) => {
                  e.stopPropagation();
                  handleFilter("stock", stock)();
                }}
                className={`text-sm cursor-pointer basic__transition ${
                  currentFilter["stock"]?.label === stock.label
                    ? "  font-semibold text-orange-accent-3 "
                    : ""
                } `}
              >
                {" "}
                {stock.label}{" "}
              </h3>
            </li>
          ))}
        </ul>
      </AccordionPanel>
    </AccordionItem>
  );
};
const AccordionPenawaran = ({ currentFilter, handleFilter }: Filter) => {
  return (
    <AccordionItem borderTop={0}>
      <AccordionButton>
        <Box as="span" flex="1" className="font-semibold" textAlign="left">
          Penawaran
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel className="!p-0">
        <ul className="  pb-1   grid gap-y-1.5 [&>li]:pl-4 items-center ">
          {filterBy["offers"]?.map((offer, i) => (
            <li
              className="hover:bg-slate-100/75 grid items-center   "
              key={i}
            >
              <Checkbox
                colorScheme={"orange"}
                isChecked={currentFilter["offers"]?.includes(offer)}
                onChange={handleFilter("offers", offer, true)}
              >
                <div className="flex items-center py-2 gap-x-2">
                  <h5
                    className={`transition text-sm ${
                      currentFilter["offers"]?.includes(offer)
                        ? " font-semibold"
                        : ""
                    }  text-slate-500  `}
                  >
                    {offer.label}
                  </h5>
                  <span className="text-xs translate-y-[1px] ">
                    ({Math.floor(17 / ++i)})
                  </span>
                </div>
              </Checkbox>
            </li>
          ))}
        </ul>
      </AccordionPanel>
    </AccordionItem>
  );
};
