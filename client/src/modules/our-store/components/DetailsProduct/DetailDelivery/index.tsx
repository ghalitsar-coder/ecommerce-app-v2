import { Badge } from "@chakra-ui/react";
import React from "react";
import { BsTruck } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

type Props = {};

const DetailDelivery = (props: Props) => {
  return (
    <div className="border-b  pb-4">
      <h1 className="font-bold text-lg mb-2.5">Pengiriman</h1>
      <div className="grid gap-3.5">
        <div className="flex items-center gap-x-2">
          <IoLocationOutline fontSize={"1.2em"} />
          <h3 className="text-sm">
            Dikirim dari <span className="font-bold "> Jakarta Pusat</span>
          </h3>
        </div>
        <div className="flex   gap-x-2">
          <BsTruck fontSize={"1.2em"} />
          <div className="text-sm">
            <h3 className="mb-1">Ongkir Reguler 15 rb - 17,7 rb</h3>
            <h3 className="text-slate-400">Estimasi tiba 15 - 20 Mar</h3>
          </div>
        </div>
        <div className="flex justify-between  items-center">
          <h3 className="text-sm">
            Kurir lainnya:{" "}
            <Badge className="!capitalize !text-slate-500">Instan</Badge>
          </h3>
          <h3 className="text-orange-400 font-semibold text-sm cursor-pointer">
            Lihat Pilihan Kurir
          </h3>
        </div>
      </div>
    </div>
  );
};

export default DetailDelivery;
