import { Badge } from "@chakra-ui/react";
import Button from "components/Button";
import { ShoppingSummary } from "modules/cart/components";
import CheckoutContent from "modules/checkout/components/CheckoutContent";
import React from "react";

type Props = {};

const Checkout = (props: Props) => {
  return (
    <section id="checkout" className="container mt-10 mb-40 px-5">
      <div className="grid lg:grid-cols-12 gap-x-12 grid-cols-1  gap-y-10 ">
       <CheckoutContent />
        <ShoppingSummary />
      </div>
    </section>
  );
};

export default Checkout;
