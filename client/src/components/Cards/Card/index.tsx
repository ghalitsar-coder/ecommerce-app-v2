import { Badge, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillEye, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { MdFavorite, MdOutlineFavorite } from "react-icons/md";
import { BiGitCompare } from "react-icons/bi";
import Stars from "components/Stars";
import { useLocation } from "react-router-dom";

type Props = {
  item?: string;
  className?: string;
};

const Card = (props: Props) => {
  const { item, className } = props;
  const router = useLocation();
  console.log(`THIS IS   router:`, router);
  const [isFavourite, setIsFavourite] = useState(false);
  React.useEffect(() => {
    if (router.pathname.startsWith("/wishlist")) {
      setIsFavourite(true);
    }
  }, [router.pathname]);

  return (
    <div
      className={`bg-white  ${
        className ? `${className}` : "xl:col-span-1  md:col-span-2 col-span-3"
      } rounded-lg shadow-lg  basic__border `}
    >
      <div className="flex justify-between items-center py-2.5 p-2 ">
        <Badge className="!rounded-md !bg-orange-accent-3 ">30%</Badge>
        <button
          className="ml-auto "
          onClick={() => setIsFavourite((prev) => !prev)}
        >
          <MdFavorite
            className={` text-lg ${
              isFavourite ? "fill-red-600" : "fill-slate-400/80"
            }`}
          />
        </button>
      </div>
      <div className="h-40   relative group">
        <Image
          src={`images/${item}.jpg`}
          alt="image-product"
          className="w-full h-full object-contain"
        />
        <div className="absolute  cursor-pointer   basic__transition opacity-0 group-hover:opacity-100  grid justify-end items-center inset-0 bg-black/75">
          <ul className="grid   group  justify-evenly pr-1  h-[85%]    ">
            {[
              <FaShoppingCart className="fill-orange-500 basic__transition  " />,
              <AiFillEye className="fill-orange-500 basic__transition  " />,
              !isFavourite ? (
                <MdOutlineFavorite className="fill-orange-500 basic__transition  " />
              ) : null,
              <BiGitCompare className="fill-orange-500 basic__transition  " />,
            ]
              .filter(Boolean)
              .map((item, idx) => (
                <li
                  className=" translate-x-4 group-hover:translate-x-0 basic__transition group-hover:delay-100  grid place-items-center w-fit opacity-0 group-hover:opacity-100"
                  key={idx}
                >
                  <button
                    onClick={() => alert(idx)}
                    className="basic__transition w-fit p-1 rounded-full hover:bg-orange-200 [&:hover>svg]:fill-red-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className=" grid gap-y-3 px-3 py-5">
        <h3 className="text-red-400 font-semibold text-sm ">Sony</h3>
        <h2 className="text-slate-700 truncate ">
          Phasellus vel tempus ultricies conubia
        </h2>
        <Stars />
        <h3 className="font-semibold text-sm">$100.00</h3>
      </div>
    </div>
  );
};

export default Card;
