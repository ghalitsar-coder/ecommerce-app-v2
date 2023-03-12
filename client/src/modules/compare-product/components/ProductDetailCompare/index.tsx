import {
  CompareProduct,
  renderDetail,
} from "modules/compare-product/pages/CompareProducts/constant";
import { useRandomColors } from "utils/useRandomColors";
import React, { Fragment } from "react";

const ProductDetail = ({ item }: { item: CompareProduct }) => {
  const { arrOfColors } = useRandomColors({ colorSize: 3 });

  return (
    <div className="">
      <h3 className="text-sm font-semibold   text-slate-600 mb-5">
        {item.title}
      </h3>
      <h3 className="text-sm font-semibold   text-slate-600 mb-5">
        {item.price}
      </h3>
      <ul className="grid gap-y-3  ">
        {Object.keys(item.detailProduct)?.map((key, i) => (
          <Fragment key={`${key}-${i}`}>
            <li className="flex justify-between  ">
              <h3 className="font-semibold text-sm capitalize   "> {key} </h3>
              {renderDetail(
                key,
                item.detailProduct[key as keyof typeof item.detailProduct],
                arrOfColors
              )}
            </li>
            <div className="border-b"></div>
          </Fragment>
        ))}
      </ul>
    </div>
  );
};
export default ProductDetail;
