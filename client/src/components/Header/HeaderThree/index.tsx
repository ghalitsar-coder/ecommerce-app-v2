import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { HiChevronDown } from "react-icons/hi";
import { thirdHeader } from "../constants";
import { CgMenuGridO } from "react-icons/cg";
import { Link } from "react-router-dom";

const HeaderThree = () => {
  return (
    <div className="bg-dark-accent-2   px-3 md:px-0  py-2 flex justify-center ">
      <div className="container flex items-center z-[9999999]  gap-x-5 ">
        <Menu>
          <MenuButton className="BUTTON">
            <div className="!flex  !items-center gap-x-2">
              <span className="w-fit  ">
                <CgMenuGridO />
              </span>
              <div className="text-sm  w-[180px]   cursor-pointer relative   flex items-center justify-between ">
                <h1 className="whitespace-nowrap pointer-events-none ">
                  {" "}
                  Shop Categories
                </h1>
                <HiChevronDown />
              </div>
            </div>
          </MenuButton>

          <MenuList className="!text-dark-accent-2    divide-y">
            <MenuItem className="!bg-transparent !text-dark-accent-2 text-sm hover:!bg-orange-accent-2  hover:!text-white">
              Electronics
            </MenuItem>
            <MenuItem className="!bg-transparent !text-dark-accent-2 text-sm hover:!bg-orange-accent-2  hover:!text-white">
              Groceries
            </MenuItem>
            <MenuItem className="!bg-transparent !text-dark-accent-2 text-sm hover:!bg-orange-accent-2  hover:!text-white">
              Health
            </MenuItem>
          </MenuList>
        </Menu>
        <div className="h-full w-[1px] bg-slate-100/60" />
        <ul className="flex items-center gap-x-2 text-xs ">
          {thirdHeader?.map((item, idx) => (
            <li key={idx}>
              <Link to={`/${item.path}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default HeaderThree;
