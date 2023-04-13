import { ViewCart } from "modules/cart/pages";
import React from "react";

type Props = {};

const Cart = (props: Props) => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return <ViewCart />;
};

export default Cart;
