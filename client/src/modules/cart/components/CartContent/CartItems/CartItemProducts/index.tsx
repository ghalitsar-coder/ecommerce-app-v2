import React from "react";
import ItemProducts from "./ItemProducts";
import ItemProductActions from "./ItemProductActions";
import { useLocation } from "react-router-dom";

type Props = {
  data: any;
  shop: string;
  checkedItems: boolean[];
  setCheckedItems: (value: boolean[]) => void;
};

const CartItemProducts = ({
  data,
  shop,
  checkedItems,
  setCheckedItems,
}: Props) => {
  const {pathname} = useLocation();
  return (
    <ul className="grid gap-y-6 [&>li:first-child]:mt-3  ">
      {data?.[shop]?.map((item, i) => (
        <React.Fragment key={i}>
          <li>
            <ItemProducts
              checkedItems={checkedItems}
              setCheckedItems={setCheckedItems}
              i={i}
              item={item}
            />
            {!pathname.startsWith("/checkout") && (
              <ItemProductActions />
            )}
          </li>
         
        </React.Fragment>
      ))}
    </ul>
  );
};

export default CartItemProducts;
