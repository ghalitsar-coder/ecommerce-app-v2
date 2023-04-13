import React, { Fragment } from "react";
import StarsReview from "./StarsReview";
import axios from "axios";
import {
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { AiFillLike, AiOutlinePlus } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { GoKebabVertical } from "react-icons/go";
import { ReviewImageProps } from "./constants";
import { FilterSelect } from "components";
import Stars from "components/Stars";
import { BiChevronDown } from "react-icons/bi";
type Props = {};

const list = ["Terbaru", "Rating Tertinggi", "Rating Terendah"];

const reviews = [
  {
    name: "Abdul",
    profileImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    rating: 5,
    review:
      "Gravida iaculis quis accumsan commodo scelerisque faucibus consectetur imperdiet interdum donec lacus tincidunt per augue risus venenatis vivamus nisl vel senectus cursus euismod ridiculus nascetur mus tempus parturient convallis libero id ligula fames dui bibendum arcu lobortis volutpat tortor cras eu ullamcorper class curae a suspendisse lectus vulputate est sem morbi torquent luctus",
  },
  {
    name: "stanislas",
    profileImage: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg",
    rating: 4,
    review: "ini mantep si",
    images: true,
  },
];

const Reviews = (props: Props) => {
  const [images, setImages] = React.useState<ReviewImageProps[] | []>([]);
  const [currentFilter, setCurrentFilter] = React.useState<string>("");
  const [showFilter, setShowFilter] = React.useState<boolean>(false);
  const filterRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const getImages = async () => {
      try {
        const response = await axios.get(
          "https://picsum.photos/v2/list?page=2&limit=10"
        );
        setImages(response.data);
      } catch (err) {
        console.log(`THIS IS   err:`, err);
      }
    };
    getImages();
  }, []);
  return (
    <div className="">
      <h1 className="text-lg font-semibold mb-5">ULASAN PEMBELI</h1>
      <div className="grid lg:grid-cols-7 sm:grid-cols-2 grid-cols-1 gap-10 ">
        <StarsReview />
        <div className="col-span-3">
          <h1 className=" font-bold mb-2">FOTO & VIDEO PEMBELI</h1>
          <ul className="flex items-center gap-x-5  ">
            {images?.slice(0, 6)?.map((item, idx, arr) => (
              <li
                key={item.id}
                className="  rounded-xl overflow-hidden basic__transition hover:shadow-lg max-w-24 aspect-square "
              >
                {" "}
                {arr.length - 1 === idx ? (
                  <div className="relative cursor-pointer w-full h-full ">
                    <div className="absolute bg-black/75 inset-0  text-white grid place-items-center ">
                      <div className="flex items-center gap-x-[2px] ">
                        {" "}
                        <BsPlusLg size={".9em"} strokeWidth={".8"} />{" "}
                        <p className="font-semibold text-xl">4</p>
                      </div>
                    </div>
                    <Image
                      src={item?.download_url}
                      className="!w-full object-cover !h-full "
                    />
                  </div>
                ) : (
                  <Image
                    src={item?.download_url}
                    className="!w-full object-cover cursor-pointer !h-full "
                  />
                )}
              </li>
            ))}
          </ul>

          <div className="grid gap-y-2.5 mt-5">
            <h1 className="text-sm font-medium">ULASAN PILIHAN</h1>
            <div className="flex items-center mb-10 justify-between">
              <p className="text-xs">Menampilkan 10 dari 79 ulasan</p>
              <FilterSelect
                setShowFilter={setShowFilter}
                setCurrentFilter={setCurrentFilter}
                currentFilter={currentFilter}
                showFilter={showFilter}
                data={list}
                filterRef={filterRef}
              />
            </div>
            <ul className="grid gap-y-9">
              {reviews?.map((item, idx) => (
                <Fragment key={idx}>
                  <li>
                    <div className="flex mb-3 items-center justify-between">
                      <div className="flex items-center gap-x-2.5">
                        <Stars value={item.rating} />
                        <h3 className="text-sm text-gray-500">Hari ini</h3>
                      </div>
                      <Menu>
                        <MenuButton>
                          <GoKebabVertical />
                        </MenuButton>
                        <MenuList>
                          <p className="text-sm pl-2 hover:bg-slate-200 py-2 cursor-pointer">
                            Laporkan Ulasan
                          </p>
                        </MenuList>
                      </Menu>
                    </div>
                    <div className="flex mb-3 items-center gap-x-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden ">
                        {/* "https://images.tokopedia.net/img/cache/100-square/default_v3-usrnophoto.png.webp?ect=4g" */}
                        <Image
                          src={item?.profileImage}
                          className="!w-full !h-full object-cover "
                        />
                      </div>
                      <h3 className="font-bold  "> {item.name} </h3>
                    </div>
                    <p className="text-sm mb-6 text-slate-500">
                      {item?.review}
                    </p>
                    <div className="flex items-center justify-between ">
                      <button className="flex items-center gap-x-2">
                        <AiFillLike className="fill-slate-500" />
                        <h3 className="text-sm text-slate-500">Membantu</h3>
                      </button>

                      <button className="flex items-center gap-x-2">
                        <h3 className="text-sm text-slate-500">
                          Lihat Balasan
                        </h3>
                        <BiChevronDown className="fill-slate-500" />
                      </button>
                    </div>
                  </li>
                  <div className="border-b my-1"></div>
                </Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
