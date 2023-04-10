import { Checkbox, Image } from "@chakra-ui/react";
import Note from "modules/our-store/components/DetailQuantityAndNote/Note";
import Quantity from "modules/our-store/components/DetailQuantityAndNote/Quantity";
import React, { useRef, useState } from "react";
import { BiChevronRight, BiTrash } from "react-icons/bi";
import { constructImageUrl } from "utils/hooks";
import ShopNameCheckbox from "./ShopNameCheckbox";
import CartItemProducts from "./CartItemProducts";
import { useLocation } from "react-router-dom";

function CartItems({ data }: { data: { [key: string]: any[] } }) {
  const [checkedItems, setCheckedItems] = React.useState([false, false]);
  const [quantity, setQuantity] = React.useState(1);
  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;
  const { pathname } = useLocation();
  const containerRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {Object.keys(data)?.map((shop, idx, arr) => (
        <React.Fragment key={idx}>
          {!idx && pathname.startsWith("/checkout") && (
            <div className="border-b-[6px]  border-slate-200/75"></div>
          )}
          <ShopNameCheckbox
            allChecked={allChecked}
            idx={idx}
            isIndeterminate={isIndeterminate}
            setCheckedItems={setCheckedItems}
            shop={shop}
            location={
              data?.[shop]?.at(-1)?.storeLocation || "Location not found"
            }
          />
          {pathname.startsWith("/checkout") ? (
            <div className="flex  justify-between">
              <CartItemProducts
                data={data}
                setCheckedItems={setCheckedItems}
                checkedItems={checkedItems}
                shop={shop}
              />
              <div className="h-fit">
                <h3 className="text-xs font-semibold mb-1">Pilih Durasi</h3>
                <div
                  className="relative w-[300px] bg-orange-400  py-1.5 rounded-lg flex items-center justify-center group  "
                  tabIndex={0}
                  onClick={() => setIsOpen((prev) => !prev)}
                  onBlur={() => setIsOpen(false)}
                >
                  <h3 className="text-center text-white font-bold  ">
                    Pengiriman
                  </h3>
                  <BiChevronRight
                    className={`justify-end flex absolute right-5 ${
                      isOpen ? " rotate-90" : ""
                    } basic__transition `}
                    color="#fff"
                    size={"1.3em"}
                  />
                  <div className={`absolute top-full w-full bg-red-100 ${isOpen?"opacity-100" :"opacity-0 pointer-events-none "}  `}>
                    <h1>Helo world</h1>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <CartItemProducts
              data={data}
              setCheckedItems={setCheckedItems}
              checkedItems={checkedItems}
              shop={shop}
            />
          )}
          {idx === arr.length - 1 && <div className="border-b my-3 "></div>}

          {pathname.startsWith("/checkout") && (
            <div className="border-b-[6px] my-3 border-slate-200/75"></div>
          )}
        </React.Fragment>
      ))}
    </>
  );
}

export default CartItems;
