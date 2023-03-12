import { ViewCompareProducts } from "modules/compare-product/pages";
import React from "react";

type Props = {};

const CompareProducts = (props: Props) => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return <ViewCompareProducts />;
};

export default CompareProducts;
