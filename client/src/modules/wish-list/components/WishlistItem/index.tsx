import { Cards } from "components";
import { childGridUp, parentGridUp } from "constants";
import React from "react";
import HeaderWishlistItem from "./HeaderWishlistItem";

type Props = {};

const WishlistItem = (props: Props) => {
  return (
    <div className="lg:col-span-9 col-span-12 gap-y-5 flex flex-col">
      <HeaderWishlistItem />
      <Cards parentClass={parentGridUp} childClass={childGridUp} />
    </div>
  );
};

export default WishlistItem;
