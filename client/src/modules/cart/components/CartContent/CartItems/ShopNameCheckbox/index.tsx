import { Checkbox } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";

type Props = {
  setCheckedItems(value: boolean[]): void;
  allChecked: boolean;
  isIndeterminate: boolean;
  shop: string;
  location: string;
  idx: number;
};

const ShopNameCheckbox = ({
  allChecked,
  isIndeterminate,
  setCheckedItems,
  shop,
  location,
  idx,
}: Props) => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname.startsWith("/checkout") && (
        <p className="font-semibold my-4">Pesanan {++idx} </p>
      )}
      <div className="flex items-center gap-x-3">
        {!pathname.startsWith("/checkout") && (
          <Checkbox
            size="lg"
            colorScheme="orange"
            isChecked={allChecked}
            isIndeterminate={isIndeterminate}
            onChange={(e) =>
              setCheckedItems([e.target.checked, e.target.checked])
            }
          />
        )}

        <div className="">
          <h3 className="font-semibold">{shop}</h3>
          <h5 className="text-xs text-slate-400"> {location} </h5>
        </div>
      </div>
    </>
  );
};

export default ShopNameCheckbox;
