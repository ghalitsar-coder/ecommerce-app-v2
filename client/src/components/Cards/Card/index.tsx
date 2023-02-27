import { Badge, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { MdFavorite, MdOutlineFavorite } from "react-icons/md";
import { BiGitCompare } from "react-icons/bi";
import ReactStars from "react-rating-stars-component";
import Stars from "components/Stars";

const Card = (props) => {
  const { item } = props;
  const [isFavourite, setIsFavourite] = useState(false);
  const ratingChanged = (star: number) => {
    console.log("THIS IS STAR ->", star);
  };
  return (
    <div className="bg-white rounded-md shadow-md xl:col-span-1  md:col-span-2 col-span-3 border border-slate-300/75">
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
        <div className="absolute  cursor-pointer  transition-all  duration-300 ease-in-out opacity-0 group-hover:opacity-100  grid justify-end items-center inset-0 bg-black/30">
          <ul className="grid   group  justify-evenly pr-1  h-[85%]    ">
            {[
              <FaShoppingCart className="fill-slate-600 basic__transition  " />,
              <MdOutlineFavorite className="fill-slate-600 basic__transition  " />,
              <BiGitCompare className="fill-slate-600 basic__transition  " />,
            ].map((item, idx) => (
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
        <h2 className="text-slate-700 ">
          Phasellus vel tempus ultricies conubia
        </h2>
        <Stars />
        <h3 className="font-semibold text-sm">$100.00</h3>
      </div>
    </div>
  );
};

export default Card;
