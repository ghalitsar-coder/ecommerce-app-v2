import { Checkbox, Image } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import { constructImageUrl } from "utils/hooks";

type Props = {
  checkedItems: boolean[];
  setCheckedItems: (value: boolean[]) => void;
  i: number;
  item: { [key: string]: any };
};

const ItemProducts = ({ checkedItems, setCheckedItems, i, item }: Props) => {
  const { pathname } = useLocation();

  return (
    <div className="flex items-center gap-x-3  ">
      {!pathname.startsWith("/checkout") && (
        <Checkbox
          size="lg"
          colorScheme="orange"
          isChecked={checkedItems[i]}
          onChange={(e) => setCheckedItems([e.target.checked, checkedItems[i]])}
        />
      )}
      <div className="  w-full">
        <div className="flex items-center gap-x-2.5">
          <div className="!w-[70px] !h-[70px] rounded-lg overflow-hidden border ">
            <Image
              src={`${constructImageUrl(item?.productDocuments?.[0]?.url)}`}
              className="!w-full !h-full  !object-fill"
            />
          </div>
          <div className="flex flex-col   gap-y-1.5 justify-between text-sm ">
            <h3> {item?.productName} </h3>
            <h3 className="text-red-400"> Sisa {++i} </h3>
            <h3 className="font-bold">
              Rp {parseInt(item?.price, 10).toLocaleString("id-ID")}{" "}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemProducts;
