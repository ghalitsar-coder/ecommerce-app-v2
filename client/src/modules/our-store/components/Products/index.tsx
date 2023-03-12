import React from "react";

import Cards from "../../../../components/ResponsiveCards";
import HeaderOptions from "../HeaderOptions";
import { arrOfAligns } from "../HeaderOptions/constant";
import { AlignProps } from "./constants";

type Props = {};

const Products = (props: Props) => {
  const [currentAlign, setCurrentAlign] = React.useState<AlignProps>(
    arrOfAligns[0]
  );
  const handleCurrentAlign = (align: AlignProps) => {
    setCurrentAlign(align);
  };

  return (
    <div className="lg:col-span-9  col-span-12">
      <HeaderOptions
        currentAlign={currentAlign}
        handleCurrentAlign={handleCurrentAlign}
      />
      <Cards currentAlign={currentAlign} />
    </div>
  );
};

export default Products;
