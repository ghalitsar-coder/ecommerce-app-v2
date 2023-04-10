import { ViewDetailProduct } from "modules/our-store/pages";
import React from "react";

type Props = {};

const DetailProduct = (props: Props) => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return <ViewDetailProduct />;
};

export default DetailProduct;
