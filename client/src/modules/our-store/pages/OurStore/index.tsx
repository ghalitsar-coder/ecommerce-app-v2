import Meta from "components/Meta";
import { CategoriesAndFilter, Products } from "modules/our-store/components";
import React from "react";

type Props = {};

const OurStore = (props: Props) => {
  const meta = React.useMemo(() => <Meta title="Our Store" />, []);

  return (
    <>
      {/* {meta} */}
      <div className="container my-10 px-3">
        <div className="grid grid-cols-12  gap-4 ">
          <CategoriesAndFilter />
          <Products />
        </div>
      </div>
    </>
  );
};

export default OurStore;
