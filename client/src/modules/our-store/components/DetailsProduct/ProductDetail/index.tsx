import React from "react";
import {
  DetailButtons,
  DetailDelivery,
  DetailDescription,
  DetailStore,
  DetailHeader,
  DetailOffers,
} from "modules/our-store/components";
import Button from "components/Button";
import { IoWarningOutline } from "react-icons/io5";
import { Image } from "@chakra-ui/react";

const arr = ["Detail", "Spesifikasi", "Info Penting"];
const arrOfColors = ["Hitam", "Putih", "Abu", "Merah"];
const arrOfSize = ["M", "L", "XL", "XXL", "XXXL"];

type VariantOptionProps = {
  currentData: string;
  title: string;
  setCurrentData(item: string): void;
  data: string[];
};

const ProductDetail = () => {
  const [currentDetail, setCurrentDetail] = React.useState(arr[0]);
  const [currentColor, setCurrentColor] = React.useState(arrOfColors[0]);
  const [currentSize, setCurrentSize] = React.useState(arrOfSize[0]);
  const renderDetailDesc = React.useMemo(() => {
    let comp;
    switch (currentDetail) {
      case arr[0]:
        comp = <DetailDescription />;
        break;
      case arr[1]:
        comp = <p> ini spesifikasi </p>;
        break;
      case arr[2]:
        comp = <p> ini info penting </p>;
        break;
      default:
        comp = "";
        break;
    }
    return comp;
  }, [currentDetail]);
  //   https://images.tokopedia.net/img/cache/900/VqbcmM/2022/5/23/d752acc7-335b-4089-ba07-4beb193a59fe.jpg
  return (
    <>
      <DetailHeader currentColor={currentColor} currentSize={currentSize} />
      <VariantOptions
        currentData={currentColor}
        data={arrOfColors}
        title={"Pilih warna:"}
        setCurrentData={setCurrentColor}
      />
      <VariantOptions
        currentData={currentSize}
        data={arrOfSize}
        title={"Pilih Ukuran Pakaian:"}
        setCurrentData={setCurrentSize}
      />
      <DetailButtons
        data={arr}
        currentDetail={currentDetail}
        setCurrentDetail={setCurrentDetail}
      />
      {renderDetailDesc}
      <DetailStore />
      <DetailDelivery />
      <DetailOffers />
      <div className="flex items-center justify-between">
        <h3 className="text-sm text-slate-600">
          Ada masalah dengan produk ini?{" "}
        </h3>
        <Button buttonClass="flex gap-x-1 items-center font-semibold text-sm">
          <IoWarningOutline />
          Laporkan
        </Button>
      </div>
    </>
  );
};
export default ProductDetail;

const VariantOptions = ({
  currentData,
  data,
  title,
  setCurrentData,
}: VariantOptionProps) => {
  return (
    <div className="border-t py-5">
      <div className="flex items-center mb-2 gap-x-2">
        <h1 className="font-bold">{title}</h1>
        <h4 className="text-slate-500 ">{currentData}</h4>
      </div>
      <ul className="flex items-center gap-2.5 flex-wrap">
        {data.map((item, idx) => (
          <li
            key={idx}
            onClick={() => setCurrentData(item)}
            className={`flex items-center gap-2 basic__transition cursor-pointer font-semibold  border rounded-lg px-3 py-2 ${
              item === currentData
                ? "border-orange-300  bg-orange-300/70 text-orange-400"
                : "text-slate-500"
            } `}
          >
            {title.includes("warna") && (
              <div className="!w-5 !h-5">
                <Image
                  src={
                    "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/5/23/d752acc7-335b-4089-ba07-4beb193a59fe.jpg"
                  }
                />
              </div>
            )}
            <h3 className="text-sm ">{item}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};
