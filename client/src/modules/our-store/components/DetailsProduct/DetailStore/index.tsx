import { Image } from "@chakra-ui/react";
import Button from "components/Button";
import Stars from "components/Stars";
import React from "react";
import { AiOutlineFieldTime } from "react-icons/ai";

type Props = {};

const DetailStore = (props: Props) => {
  return (
    <div className="border-y flex gap-x-1  py-3">
      <div className="w-10 h-10">
        <Image
          src={
            "https://images.tokopedia.net/img/cache/215-square/shops-1/2019/3/21/1157156/1157156_febbfce9-2348-4189-8345-c1d27d695bfe.jpg"
          }
          className="rounded-full"
        />
      </div>
      <div className="flex-1">
        <div className="flex justify-between  items-center gap-x-1">
          <div className="">
            <h1 className="font-bold truncate">Enter Komputer Official</h1>
            <div className="flex items-center gap-x-1">
              <span className="w-1 h-1 rounded-full bg-orange-400" />
              <h3 className="text-sm font-semibold text-orange-400">Online</h3>
            </div>
          </div>
          <Button
            text="Follow"
            buttonType="outlined"
            buttonClass="px-5 !py-1 !rounded-lg"
            color="orange"
          />
        </div>
        <div className="flex mt-1 items-center gap-x-3">
          <div className="flex gap-x-1 items-center text-xs text-slate-500">
            <Stars count={1} size={16} value={0} />
            <span className="font-semibold">4.9</span>
            <span className="truncate">rata - rata ulasan</span>
          </div>
          <div className="w-[1px] h-5 bg-slate-200" />
          <div className="flex gap-x-1 items-center text-xs text-slate-500">
            <AiOutlineFieldTime className="text-[17px]" />
            <span className="font-semibold whitespace-nowrap ">2 jam</span>
            <span className="truncate">pesanan diproses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailStore;
