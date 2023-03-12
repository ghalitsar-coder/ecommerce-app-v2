import { Image } from "@chakra-ui/react";
import { Slider } from "components";
import { configSectionOne, sliderData } from "modules/home/pages/Home/constant";
import { SwiperSlide } from "swiper/react";
import React, { memo } from "react";

const MainSale = () => {
  return (
    <div className="bg-white !z-0 pb-4">
      <div className="container !z-0 grid md:grid-cols-4 px-3 md:px-0  gap-3  md:grid-flow-row    mt-10 ">
        <div className=" col-span-2  !z-0 rounded-lg overflow-hidden   row-span-2 relative">
          <Slider config={configSectionOne}>
            {sliderData.slice(0, 2)?.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div>
                  <Image src={item?.imageSource} />
                  <div className="absolute inset-0 flex flex-col justify-center   items-start ">
                    <div className=" pl-5 grid gap-y-5 ">
                      <h3 className="md:text-base   text-sm font-semibold text-dark-accent-3 uppercase ">
                        {item?.slogan}
                      </h3>
                      <h1 className="lg:text-[38px] sm:text-3xl text-4xl xl:text-5xl font-bold text-dark-accent-1 ">
                        {item?.title}
                      </h1>
                      <div className="text-sm text-dark-accent-1 ">
                        <p>{item?.text}</p>
                        <p>{item?.subtext}</p>
                      </div>
                      <button className="rounded-full mt-3 w-fit px-5 !text-xs lg:text-sm py-2 bg-dark-accent-3 uppercase text-white ">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Slider>
        </div>

        {sliderData.slice(2).map((item, idx) => (
          <div
            key={idx}
            className="col-span-1  rounded-lg overflow-hidden    relative "
          >
            <Image src={item?.imageSource} />
            <div className="absolute inset-0">
              <div className=" h-full pl-2  sm:pl-5 flex flex-col gap-y-1  justify-center items-start ">
                <h3 className="text-base font-semibold text-orange-accent-1  uppercase ">
                  {item.slogan}
                </h3>
                <h1 className=" text-lg md:text-sm sm:text-lg font-bold text-dark-accent-1 ">
                  {item?.title}
                </h1>
                <div className=" md:text-xs lg:text-sm  sm:text-sm text-xs text-dark-accent-1 ">
                  <p>{item.text}</p>
                  <p>{item?.subtext}</p>
                </div>
                {/* <button className="rounded-full mt-3 w-fit px-3 text-xs py-1   bg-dark-accent-3 uppercase text-white ">
                Buy Now
              </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default memo(MainSale);
