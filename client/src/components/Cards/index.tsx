import { products } from "constants";
import Card from "./Card";

type Props = {
  parentClass?: string;
  childClass?: string;
}

const Cards = ({ childClass = "", parentClass = "" }: Props) => {
  return (
    <div className={`grid  gap-5 ${parentClass} `}>
      {products?.map((item, idx) => (
        <Card key={idx} item={item} className={`${childClass}`} />
      ))}
    </div>
  );
};

export default Cards;
