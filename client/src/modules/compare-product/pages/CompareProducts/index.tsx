import { Image } from "@chakra-ui/react";
import {
  ProductDetailCompare,
  ProductImageCompare,
} from "modules/compare-product/components";
import { arrOfCompareProducts, CompareProduct } from "./constant";

type Props = {};

const CompareProducts = (props: Props) => {
  return (
    <div className="container md:px-0 px-3 mt-20 mb-40">
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 ">
        {arrOfCompareProducts?.map((item, idx) => (
          <ProductCompare key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CompareProducts;
const ProductCompare = ({ item }: { item: CompareProduct }) => {
  return (
    <div className="rounded-lg p-3 basic__border shadow-lg">
      <ProductImageCompare image={item.image} />
      <ProductDetailCompare item={item} />
    </div>
  );
};
