import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";

type Props = {};

const Stars = (props: Props) => {
  return (
    <ReactStars
      count={5}
      onChange={(e) => {
        console.log("changed ->", e);
      }}
      size={24}
      edit={false}
      value={4}
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
