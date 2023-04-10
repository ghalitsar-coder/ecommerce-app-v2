import React from "react";
import { CartContent, ShoppingSummary } from "modules/cart/components";
import { Checkbox } from "@chakra-ui/react";

type Props = {};


const Cart = (props: Props) => {
  // Access the client
 

  return (
    <section id="cart" className="container mt-10 mb-40 px-5">
      <div className="grid lg:grid-cols-12 gap-x-12 grid-cols-1  gap-y-10 ">
        <div className="lg:col-span-8 col-span-1 ">
          <h1 className="text-2xl font-bold mb-5">Keranjang</h1>
          <div className="flex items-center justify-between">
            <div className="">
              <Checkbox colorScheme={"orange"} size={"lg"} defaultChecked>
                <h3 className="text-sm"> Pilih Semua</h3>
              </Checkbox>
            </div>
            <h3 className="text-orange-400 font-bold  ">Hapus</h3>
          </div>
          <div className="border-b-4 border-slate-200 my-3"></div>
            <CartContent />
        </div>
        <ShoppingSummary />
      </div>
    </section>
  );
};

export default Cart;
