import { Breadcrumb } from "components";

import { DetailsProduct, Thumbnail } from "modules/our-store/components";
import DetailQuantityAndNote from "modules/our-store/components/DetailQuantityAndNote";
import Reviews from "modules/our-store/components/Reviews";
import StarsReview from "modules/our-store/components/Reviews/StarsReview";

import { useParams } from "react-router-dom";

type Props = {};

const DetailProduct = (props: Props) => {
  const params = useParams();

  return (
    <section
      id="detail-product"
      className="min-h-screen my-7  container px-3 md:px-0"
    >
      <Breadcrumb />
      <div className="mt-5 grid lg:grid-cols-7 sm:grid-cols-2 grid-cols-1 gap-10 mb-10 ">
        <Thumbnail />
        <DetailsProduct />
        <DetailQuantityAndNote />
      </div>
      <Reviews />
    </section>
  );
};

export default DetailProduct;
