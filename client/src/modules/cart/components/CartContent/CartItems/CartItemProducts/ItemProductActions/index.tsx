import Note from "modules/our-store/components/DetailQuantityAndNote/Note";
import Quantity from "modules/our-store/components/DetailQuantityAndNote/Quantity";
import React from "react";
import { BiTrash } from "react-icons/bi";

type Props = {};

const ItemProductActions = (props: Props) => {
  const [quantity, setQuantity] = React.useState(1);
  return (
    <div className="flex pl-8 mt-5  items-center !w-full justify-between">
      <div className="flex-1 max-w-[300px] ">
        <Note />
        {/* Tulis Catatan  */}
      </div>
      <div className="flex items-center flex-1 justify-end flex-wrap gap-y-3    gap-x-10">
        <div className="flex items-center gap-x-3 justify-between ">
          <button className="text-sm text-slate-400">
            Pindahkan ke Wishlist
          </button>
          <span className="w-[1px] h-5 bg-slate-300 "></span>

          <BiTrash
            className="fill-orange-500 basic__transition text-lg cursor-pointer  "
            onClick={() => {}}
          />
        </div>
        <Quantity
          quantity={quantity}
          setQuantity={setQuantity}
          withoutStock={true}
        />
      </div>
    </div>
  );
};

export default ItemProductActions;
