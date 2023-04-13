import { Image } from "@chakra-ui/react";
import axios from "axios";
import { Breadcrumb, Slider } from "components";
import { configSectionThree } from "modules/home/pages/Home/constant";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
type Props = {};
type ImagesProps = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};
const Thumbnail = (props: Props) => {
  const [images, setImages] = React.useState<ImagesProps[] | undefined>();
  const [indexSelectedImage, setIndexSelectedImage] = useState<
    number | undefined
  >(0);
  const [currentIndexImage, setCurrentIndexImage] = React.useState<
    number | undefined
  >(0);

  React.useEffect(() => {
    const getImages = async () => {
      try {
        const response = await axios.get(
          "https://picsum.photos/v2/list?limit=10"
        );
        console.log(`THIS IS   response:`, response);
        setImages(response.data);
      } catch (err) {
        console.log(`THIS IS   err:`, err);
      }
    };
    getImages();
  }, []);

  return (
    <div className="lg:col-span-2  rounded-xl ">
      <div className="sticky top-52">
        <div className="  mb-4 ">
          <Image
            src={
              images?.[currentIndexImage!]?.download_url ??
              `https://picsum.photos/400/400.webp`
            }
            className="w-full h-full object-cover rounded-xl basic__transition aspect-square "
          />
        </div>
        <div className="">
          <Slider
            autoPlay={false}
            loop={false}
            config={{
              slidesPerView: 4,
              pagination: false,
              spaceBetween: 50,
            }}
            className={"py-3 px-1"}
          >
            {images?.map((item, idx) => (
              <SwiperSlide className=" cursor-pointer" key={idx}>
                <div className="aspect-square w-[67px] ">
                  <Image
                    onMouseOver={(e) => {
                      e.stopPropagation();
                      setCurrentIndexImage(idx);
                    }}
                    onMouseOut={(e) => {
                      e.stopPropagation();
                      setCurrentIndexImage(indexSelectedImage);
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIndexSelectedImage(idx);
                      setCurrentIndexImage(idx);
                    }}
                    src={item?.download_url}
                    className={`!w-full !h-full ring-4 ${
                      idx === currentIndexImage
                        ? "ring-orange-accent-3"
                        : "ring-transparent"
                    } !object-cover rounded-xl basic__transition`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
