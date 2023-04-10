import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import Button from "components/Button";
import React from "react";
import { BiWallet } from "react-icons/bi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoQrCodeOutline } from "react-icons/io5";

type Props = {};

const DetailOffers = (props: Props) => {
  return (
    <>
      <DetailAnotherOffers
        title={"Penawaran Lainnya"}
        text={"Paylater & Cicilan"}
        desc={
          <p className="">
            Beli sekarang bayar nanti, mulai Rp269.330/bulan{" "}
            <span className="cursor-pointer text-orange-400 font-semibold ">
              {" "}
              Selengkapnya{" "}
            </span>{" "}
          </p>
        }
        icon={
          <BiWallet className="fill-orange-400 shrink-0 " size={"1.45em"} />
        }
      />
      <DetailAnotherOffers
        title={"Beli di aplikasi, makin banyak promo!"}
        desc={
          "Scan QR-nya untuk lihat barang ini di aplikasi Tokopedia. Bebas ongkir, lho~"
        }
        icon={
          <HiOutlineDevicePhoneMobile
            className="stroke-orange-400 shrink-0"
            size={"1.4em"}
          />
        }
        btn={
          <Button
            buttonClass="whitespace-nowrap !px-5 !py-2 !rounded-lg !h-fit !w-fit text-xs font-semibold text-slate-600 flex gap-x-2 items-center"
            color="gray"
            buttonType="outlined"
          >
            <IoQrCodeOutline size={"1.25em"} />
            Scan QR
          </Button>
        }
      />
    </>
  );
};

export default DetailOffers;
const DetailAnotherOffers = ({
  icon,
  title,
  text,
  desc,
  btn,
}: {
  text?: string;
  title?: string;
  desc?: ReactJSXElement | string;
  btn?: ReactJSXElement | string;
  icon: ReactJSXElement;
}) => {
  return (
    <div className="border-b pb-5">
      <h1 className="text-lg font-semibold mb-1.5">{title}</h1>
      <div className="flex gap-x-2.5">
        {icon}
        <div className="text-sm">
          {text && <h1 className="font-semibold">{text}</h1>}
          {typeof desc === "string" ? <p> {desc} </p> : desc}
        </div>
        {btn && btn}
      </div>
    </div>
  );
};
