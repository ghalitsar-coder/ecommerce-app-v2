import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { HiChevronDown } from "react-icons/hi";
import { thirdHeader } from "../constants";
import { CgMenuGridO } from "react-icons/cg";
import { Link } from "react-router-dom";

const HeaderThree = () => {
  return (
    <div className="bg-dark-accent-3   px-3 md:px-0  py-2 flex justify-center ">
      <div className="container flex items-center  gap-x-5 ">
        <div className="translate-y-[2px] z-[2]">
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

            <MenuList className=" rounded-xl overflow-hidden  shadow-md [&>ul>li]:text-white [&>ul>li]:text-sm [&>ul>li]:bg-dark-accent-1 [&>ul>li:hover]:text-orange-accent-3   !p-0  ">
              <ul className="flex flex-col text-dark [&>li]:pl-2 py-2 gap-y-3  text-xs bg-dark-accent-1 ">
                {thirdHeader?.map((item, idx) => (
                  <li key={idx}>
                    <Link to={`/${item.path}`}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </MenuList>
          </Menu>
        </div>

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
