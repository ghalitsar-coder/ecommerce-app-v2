import Stars from "components/Stars";

type Props = {
  currentColor: string;
  currentSize: string;
};

const DetailHeader = ({ currentColor, currentSize }: Props) => {
  const renderDynamicVariant = () => {
    if (currentColor && currentSize) {
      return `- ${currentColor} , ${currentSize}`;
    } else if (currentColor || currentSize) {
      return `- ${currentColor || currentSize}`;
    }
    return "";
  };
  return (
    <div className="">
      <h1 className="text-xl font-semibold">
        VGA CARD POWERCOLOR RX 6750 XT RED DEVIL 12GB DDR6 Radeon 6750XT{" "}
        {renderDynamicVariant()}
      </h1>
      <div className="flex my-4 items-center gap-x-3 ">
        <div className="text-sm text-slate-500 flex gap-x-1">
          <h3>Terjual</h3>
          <span>4</span>
        </div>
        <div className="flex text-sm gap-x-1 items-center">
          <Stars count={1} />
          <span>5</span>
          <span>(1 rating)</span>
        </div>
      </div>
      <h1 className="text-4xl font-bold">Rp5.948.000</h1>
    </div>
  );
};
export default DetailHeader;
