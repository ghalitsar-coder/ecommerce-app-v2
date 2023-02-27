import React, { Fragment, memo } from "react";
import { sectionTwoData } from "modules/home/pages/Home/constant";
import { Image } from "@chakra-ui/react";
const CategoryItems = () => {
  return (
    <div className="container bg-white rounded-lg shadow-md   my-14 p-1 ">
      <div className=" flex items-center   flex-wrap gap-y-3    justify-between py-1 md:px-0 ">
        {sectionTwoData?.sectionTwoPartTwo.slice(0, 5)?.map((item, idx) => (
          <Fragment key={idx}>
            <Category {...item} />
            {idx !== 4 && (
              <div className="xl:w-[1px] xl:bg-slate-200 xl:h-24 "></div>
            )}
          </Fragment>
        ))}
      </div>
      <div className="border-b border-slate-200 my-1 sm:my-0"></div>
      <div className=" flex items-center  flex-wrap gap-y-3   justify-between  md:px-0 py-1  ">
        {sectionTwoData?.sectionTwoPartTwo.slice(5)?.map((item, idx) => (
          <Fragment key={idx}>
            <Category {...item} />
            {idx !== 4 && (
              <div className="xl:w-[1px] xl:bg-slate-200 xl:h-24 "></div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default memo(CategoryItems);

const Category = ({
  imageSource,
  label,
  text,
  idx,
}: {
  imageSource: string;
  label: string;
  idx?: number;
  text: string;
}) => {
  return (
    <div className="flex items-center cursor-pointer  hover:-translate-y-2 hover:shadow-md transition-all duration-300 ease-in-out px-2 rounded-md   sm:w-[calc(33.3%_-_5px)]  md:w-[calc(25%_-_5px)]  lg:w-[calc(20%_-_5px)]  w-[calc(50%_-_5px)]  justify-between overflow-hidden  ">
      <div className="">
        <h3 className="font-semibold text-xs sm:text-sm xl:whitespace-nowrap ">
          {label}
        </h3>
        <h5 className="md:text-xs text-[10px] text-muted-accent-1">
          {text} items
        </h5>
      </div>
      <div className="w-20 h-20">
        <Image src={imageSource} className={"w-full h-full object-cover"} />
      </div>
    </div>
  );
};
