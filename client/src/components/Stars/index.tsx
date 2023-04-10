import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";

type Props = {
  count?: number;
  value?: number;
  size?: number;
};

const Stars = ({ count = 5, value = 4, size = 19 }: Props) => {
  return (
    <ReactStars
      count={count}
      onChange={(e: any) => {
        console.log("changed ->", e);
      }}
      size={size}
      edit={false}
      value={value}
      a11y={true}
      isHalf={true}
      emptyIcon={<AiOutlineStar />}
      halfIcon={<BsStarHalf />}
      filledIcon={<AiFillStar />}
      activeColor="#ffd700"
    />
  );
};

export default Stars;
