import { ViewCheckout } from "modules/checkout/pages";
import React from "react";

type Props = {};

const Checkout = (props: Props) => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return <ViewCheckout />;
};

export default Checkout;
