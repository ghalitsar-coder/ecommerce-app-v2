import React from "react";
import { ViewWishList } from "modules/wish-list/pages";

const Wishlist = () => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return <ViewWishList />;
};

export default Wishlist;
