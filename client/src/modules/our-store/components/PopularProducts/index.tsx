import { Image } from "@chakra-ui/react";
import Stars from "components/Stars";
import React from "react";

type Props = {};
const products = ["watch", "tv", "homeapp", "laptop"];

const PopularProducts = (props: Props) => {
  return (
    <div className="shadow-md rounded-lg p-4 border border-slate-200/50 ">
      <h1 className="font-semibold mb-4">Popular Products</h1>
      <div className="grid gap-y-6  ">
        {products.map((item, idx) => {
          return (
            <React.Fragment key={idx}>
              <div
                onClick={() => alert("going to detail " + item)}
                className="flex gap-x-2  cursor-pointer "
              >
                <div className="!w-20 !h-20  rounded-xl shrink-0 bg-red-100 ">
                  <Image
                    src={`images/${item}.jpg`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid gap-y-2">
                  <h3 className="font-semibold text-sm truncate">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur{" "}
                  </h3>
                  <span className="cursor-pointer ">
                    <Stars />
                  </span>

                  <h4 className="font-semibold">
                    ${parseInt("100", 10).toLocaleString("id-ID")}
                  </h4>
                </div>
              </div>
              {idx !== products.length - 1 && (
                <div className="border-b my-1 border-slate-300"></div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default PopularProducts;
