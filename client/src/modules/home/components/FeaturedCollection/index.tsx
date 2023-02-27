import Cards from "components/Cards";
import Card from "components/Cards/Card";
import React from "react";

type Props = {};

const LatestProduct = (props: Props) => {
  return (
    <section id="Cards" className="container overflow-hidden p-2 my-10">
      <h1 className="mb-5 font-semibold text-2xl  ">Featured Collection</h1>
      <div className="grid  grid-cols-6 gap-4 ">
        {["tv", "camera", "acc", "speaker", "laptop", "homeapp"].map(
          (item, idx) => (
            <Card item={item} key={idx} />
          )
        )}
      </div>
    </section>
  );
};

export default LatestProduct;
