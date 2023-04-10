import React, { useState, ChangeEvent } from "react";
import { IconButton } from "@chakra-ui/react";
import { BiMinus, BiPlus } from "react-icons/bi";
type Props = {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  withoutStock?: boolean;
};

const Quantity = ({ quantity, setQuantity, withoutStock = false }: Props) => {
  const [stock, setStock] = useState(35);
  const handleQuantity = (type: "decrease" | "increase") => {
    if (type === "decrease") {
      setQuantity((prev) => (prev > 1 ? --prev : 1));
    } else {
      setQuantity((prev) => prev + 1);
    }
  };
  return (
    <div className="flex items-center gap-x-3 flex-wrap gap-y-2 ">
      <div className="flex items-center justify-between w-[160px] p-1.5 rounded-lg basic__border ">
        <IconButton
          icon={<BiMinus />}
          size={"xs"}
          aria-label="decrease"
          onClick={() => handleQuantity("decrease")}
        />
        <span>{quantity}</span>
        <IconButton
          icon={<BiPlus />}
          size={"xs"}
          onClick={() => handleQuantity("increase")}
          aria-label="increase"
        />
      </div>
      {!withoutStock && (
        <h3 className="text-sm">
          Stok Total:{" "}
          <span
            className={`font-semibold ${stock <= 10 ? "text-red-500" : ""} `}
          >
            {stock <= 10 && "Sisa"} {stock}
          </span>
        </h3>
      )}
    </div>
  );
};

export default Quantity;
