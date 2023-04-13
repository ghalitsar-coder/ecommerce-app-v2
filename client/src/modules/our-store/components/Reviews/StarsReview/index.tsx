import React from "react";
import Stars from "components/Stars";
import {
  Button,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Progress,
} from "@chakra-ui/react";
import {
  IoInformationCircle,
  IoInformationCircleOutline,
} from "react-icons/io5";
import { SectionFilter } from "modules/wish-list/components";
type Props = {};

const StarsReview = (props: Props) => {
  return (
    <div className="col-span-2  ">
      <div className="grid place-items-center ">
        <div className="flex items-center gap-x-4">
          <Stars count={1} value={1} size={40} />
          <div className="flex items-center gap-x-1">
            <h1 className="text-6xl ">5.0</h1>
            <h1 className="self-end -translate-y-2 text-gray-500 font-medium">
              /5.0
            </h1>
          </div>
        </div>
        <div className=" mb-5">
          <div className="flex items-center   w-full gap-x-1 ">
            <h3 className="text-xs font-semibold mb-2">
              100% pembeli merasa puas
            </h3>
            <Popover closeOnBlur trigger="hover">
              <PopoverTrigger>
                <p className="p-0 -translate-y-[2.5px] cursor-help !w-fit">
                  <IoInformationCircleOutline size={"1.1em"} />
                </p>
              </PopoverTrigger>
              <PopoverContent className="z-[3] !translate-y-2.5 text-dark  max-w-[250px]">
                <PopoverBody>
                  <p className="text-xs text-gray-500 text-center">
                    Dihitung dari jumlah rating positif (bintang 4 dan 5) dibagi
                    dengan total rating.
                  </p>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </div>
          <p className="text-xs text-center text-gray-500 ">
            120 rating • 78 ulasan
          </p>
        </div>
        <ul className=" grid gap-y-1 w-full">
          {[5, 4, 3, 2, 1].map((item, idx) => (
            <li className="flex items-center gap-x-2" key={idx}>
              <div className="flex items-center gap-x-1">
                <Stars count={1} value={1} size={19} />
                <h3 className="text-gray-500 text-md">{item}</h3>
              </div>
              <Progress
                size={"lg"}
                className="flex-1 [&>div]:bg-orange-300 rounded-full "
                value={Number(`${Number(item)}0`)}
                // colorScheme="orange"
              />
              <p className="w-8 mx-auto text-gray-500 text-sm text-center">
                {" "}
                {item * 10}{" "}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <SectionFilter className="mt-10" />
    </div>
  );
};

export default StarsReview;
