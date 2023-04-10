import ProductDetail from "./ProductDetail";

type Props = {};

const DetailsProduct = (props: Props) => {
  return (
    <div className="lg:col-span-3 rounded-xl grid gap-y-3  h-fit  ">
      <ProductDetail />
    </div>
  );
};

export default DetailsProduct;

