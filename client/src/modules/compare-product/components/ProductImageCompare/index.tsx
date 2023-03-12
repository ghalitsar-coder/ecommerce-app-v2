import { Image } from "@chakra-ui/react";
import { AiFillEye } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";

const ProductImage = ({ image }: { image: string }) => {
  return (
    <div className="relative h-44 group mb-3">
      <Image
        src={`images/${image}`}
        className={"w-full h-full object-contain  "}
      />
      <div className="absolute inset-0 basic__transition   group-hover:bg-black/75 rounded-lg ">
        <ul className="flex items-center  h-full  place-content-center gap-x-3 md:gap-x-5 ">
          {[
            <FaShoppingCart className="fill-orange-500 basic__transition text-lg  " />,
            <AiFillEye className="fill-orange-500 scale-110 basic__transition  " />,
            <MdOutlineFavorite className="fill-orange-500 basic__transition text-lg  " />,
            <BiTrash className="fill-orange-500 basic__transition text-lg  " />,
          ].map((item, idx) => (
            <li
              className="  basic__transition group-hover:delay-100  grid place-items-center w-fit opacity-0 group-hover:opacity-100"
              key={idx}
            >
              <button
                onClick={() => alert(idx)}
                className="basic__transition w-fit  rounded-full hover:bg-orange-300 p-2.5 "
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductImage;
