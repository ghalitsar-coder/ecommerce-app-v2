import { Card } from "components";
import { AlignProps } from "../../modules/our-store/components/Products/constants";
import { useCallback } from "react";
import {
  parentGridDown,
  parentGridLeft,
  parentGridRight,
  parentGridUp,
  childGridDown,
  childGridLeft,
  childGridRight,
  childGridUp,
  products,
} from "constants";

type Props = {
  currentAlign: AlignProps;
};

const Cards = ({ currentAlign }: Props) => {
  const renderAlign = useCallback(
    (type: "parent" | "child") => {
      if (type === "parent") {
        let alignment;
        switch (currentAlign.name) {
          case "down":
            alignment = parentGridDown;
            break;
          case "left":
            alignment = parentGridLeft;
            break;
          case "right":
            alignment = parentGridRight;
            break;
          default:
            alignment = parentGridUp;
            break;
        }
        return alignment;
      }
      if (type === "child") {
        let alignment;
        switch (currentAlign.name) {
          case "down":
            alignment = childGridDown;
            break;
          case "left":
            alignment = childGridLeft;
            break;
          case "right":
            alignment = childGridRight;
            break;
          default:
            alignment = childGridUp;
            break;
        }
        return alignment;
      }
    },
    [currentAlign.name]
  );

  return (
    <div className={` h-fit grid  ${renderAlign("parent")} `}>
      {products.map((item, idx) => (
        <Card key={idx} item={item} className={`${renderAlign("child")}`} />
      ))}
    </div>
  );
};
export default Cards;
