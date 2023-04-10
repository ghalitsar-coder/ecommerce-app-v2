import Button from "components/Button";
import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { TbDiscount2 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
type Props = {};

const ShoppingSummary = (props: Props) => {
  const navigate = useNavigate()
  return (
    <div className="lg:col-span-4 col-span-1">
      <div className="border rounded-lg">
        <div className="p-4">
          <div className="border cursor-pointer hover:bg-slate-100 basic__transition rounded-lg p-2.5 flex items-center  justify-between  ">
            <div className="flex  items-center gap-x-2">
              <TbDiscount2 className="shrink-0" size={"1.5em"} />
              <h3 className="font-semibold text-slate-500">
                Makin hemat pakai promo
              </h3>
            </div>
            <BiChevronRight className="shrink-0" size={"1.5em"} />
          </div>
        </div>
        <div className="border-b-4 border-slate-200"></div>
        <div className="p-4 grid gap-y-4">
          <h1 className="font-semibold">Ringkasan Belanja</h1>
          <div className="flex items-center justify-between text-slate-500 text-sm">
            <h3 className="">Total Harga (1 barang)</h3>
            <h3 className="">Rp7.410.000</h3>
          </div>
          <div className="border-b "></div>
          <div className="flex items-center justify-between   font-bold ">
            <h3 className="">Total Harga </h3>
            <h3 className="">Rp7.410.000</h3>
          </div>
          <Button buttonType="contained" onClick={() => navigate('/checkout')} color={"orange"}>
            Beli (1)
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingSummary;
