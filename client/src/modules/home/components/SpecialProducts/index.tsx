import { Badge, Image, Progress } from "@chakra-ui/react";
import Stars from "components/Stars";
import { useState, useEffect } from "react";
import { BiGitCompare } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { MdFavorite, MdOutlineFavorite } from "react-icons/md";

type Props = {};

const SpecialProduct = (props: Props) => {
  return (
    <section id="special-product" className="container my-10 px-3 md:px-0">
      <h1 className="text-2xl font-semibold  mb-5">Special Product</h1>
      <div className="grid xl:grid-cols-3 gap-4 md:grid-cols-4">
        {["tv", "camera", "acc", "speaker", "laptop", "homeapp"].map(
          (item, idx) => (
            <div
              key={idx}
              className="xl:col-span-1 border border-slate-300/75 md:col-span-2 col-span-3 bg-white p-1 flex gap-x-2 rounded-md shadow-md "
            >
              <SpecialCard item={item} />
              <SpecialCardDetail />
            </div>
          )
        )}
      </div>
    </section>
  );
};

const SpecialCard = ({ item }: { item: string }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <div className="flex-1">
      <div className="flex justify-between items-center py-2 p-1 ">
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
      <div className="bg-blue-300 my-5    relative group">
        <Image
          src={`images/${item}.jpg`}
          alt="image-product"
          className="!w-full !h-full object-cover"
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
      <div className="flex justify-evenly items-center pl-3 pb-3 gap-x-2">
        {[1, 1].map((_, idx) => (
          <div
            key={+new Date() + idx}
            className=" w-1/3 h-1/3 overflow-hidden rounded-lg border border-slate-200  shadow-md "
          >
            <Image
              src={`images/${item}.jpg`}
              alt="product-img"
              className="!w-full !h-full object-cover "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const SpecialCardDetail = () => {
  const [remainingTime, setRemainingTime] = useState(3600);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(remainingTime - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [remainingTime]);

  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

  return (
    <div className="pt-5 pr-3 pb-3 flex-1 flex flex-col gap-y-6 ">
      <h3 className="text-red-400 text-sm font-semibold">Rolex XVVI</h3>
      <h2 className="font-semibold  "> Lorem ipsum dolor sit amet. </h2>
      <Stars />
      <div className="flex font-semibold text-sm items-center gap-x-2">
        <h3 className="  text-red-400 ">$62.00</h3>
        <h3 className="  line-through text-slate-300 ">$100.00</h3>
      </div>
      <div className="flex items-center gap-x-2">
        <h3 className="font-semibold text-sm ">214</h3>
        <h3 className="text-sm">Days</h3>
        <ul className="flex gap-x-3   ">
          {[hours, minutes, seconds].map((time, idx) => (
            <li key={idx} className="flex items-center gap-x-2" >
              <div className="h-7 w-7 shrink-0  rounded-full bg-red-400 text-white grid  place-items-center text-sm">
                <h4 className="m-auto">{time} </h4>
              </div>
              {idx !== 2 ? (
                <span className="w-[1px]   h-2/3 bg-slate-300" />
              ) : null}
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <h2 className="text-slate-400 text-xs mb-1">Products:200</h2>
        <Progress value={20} size="md" colorScheme="pink" />
      </div>
      <button className="bg-dark-accent-3 text-white capitalize px-3 py-1.5 w-fit rounded-full text-sm flex items-center gap-x-3 ">
        <span>
          <FaShoppingCart />
        </span>
        add to cart
      </button>
    </div>
  );
};

export default SpecialProduct;
