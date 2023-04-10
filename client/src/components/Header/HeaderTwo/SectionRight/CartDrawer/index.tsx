import { useDisclosure } from "@chakra-ui/react";
import BasicDrawer from "components/BasicDrawer";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

type Props = {};

const CartDrawer = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <li onClick={onOpen} className="flex cursor-pointer items-center gap-x-2">
        <span>
          <AiOutlineShoppingCart />
        </span>
        <div className="text-xs">
          <p className="text-center bg-white rounded-xl w-fit px-1 mx-auto text-dark">
            0
          </p>
          $0.00
        </div>
      </li>
      <BasicDrawer
        title={"Keranjang"}
        isOpen={isOpen}
        onClose={onClose}
        btnRef={btnRef}
      >
        <div className="">
          <Link to={"/cart"}>
            <h1>Lihat Lebih banyak</h1>
          </Link>
        </div>
      </BasicDrawer>
    </>
  );
};

export default CartDrawer;
