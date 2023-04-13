import React, { useState, ChangeEvent } from "react";
import { FaPencilAlt } from "react-icons/fa";
import Quantity from "./Quantity";
import Note from "./Note";
import Button from "components/Button";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import {
  BsFillChatLeftTextFill,
  BsFillChatRightTextFill,
  BsFillShareFill,
} from "react-icons/bs";
type Props = {};
let data = [
  {
    title: "Chat",
    icon: <BsFillChatLeftTextFill fill="gray" />,
  },
  {
    title: "Wishlist",
    icon: <AiFillHeart fill="gray" />,
  },
  {
    title: "Share",
    icon: <BsFillShareFill fill="gray" />,
  },
];
const DetailQuantityAndNote = (props: Props) => {
  const [quantity, setQuantity] = useState(1);
  let price = 855000;
  return (
    <div className="lg:col-span-2 lg:sticky lg:top-52   rounded-xl basic__border p-5 h-fit ">
      <h1 className="font-bold mb-5 text-lg ">Atur jumlah dan catatan</h1>
      <div className="grid gap-y-4">
        <Quantity quantity={quantity} setQuantity={setQuantity} />
        <Note />
        <div className="flex justify-between items-center flex-wrap">
          <h3 className="text-gray-500">Subtotal</h3>
          <h3 className="font-bold text-xl ">
            {" "}
            Rp
            {parseInt(String(price * quantity), 10).toLocaleString(
              "id-ID"
            )}{" "}
          </h3>
        </div>
        <div className="flex items-center justify-between flex-wrap gap-3 ">
          {/* <Button /> */}
          <Button
            text="Beli Langsung"
            buttonType="outlined"
            buttonClass="px-3.5 !py-1.5 whitespace-nowrap flex-1 !rounded-lg"
            color="orange"
          />
          <Button
            buttonType="contained"
            buttonClass="px-3.5 !py-1.5 whitespace-nowrap flex-1 flex items-center gap-x-2 justify-center !rounded-lg"
            color="orange"
          >
            <AiOutlineShoppingCart />
            Keranjang
          </Button>
        </div>
        <ul className="flex items-center justify-between">
          {data?.map((item, idx) => (
            <React.Fragment key={idx}>
              <li
                onClick={() => {}}
                className="flex text-sm text-gray-500 cursor-pointer items-center gap-x-2"
              >
                {item.icon}
                <h3>{item.title}</h3>
              </li>
              {idx !== data?.length - 1 && (
                <div className="w-[1px] h-5 bg-gray-300"></div>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetailQuantityAndNote;
