import { Image } from "@chakra-ui/react";
import { Slider } from "components";
import { configSectionThree } from "modules/home/pages/Home/constant";
import { SwiperSlide } from "swiper/react";
import { memo } from "react";
const BrandVendor = () => {
  return (
    <div className="shadow-md rounded-lg bg-white drop-shadow-md border border-slate-300 max-w-[390px]  sm:container mx-auto   sm:block  py-2   my-10 ">
      <Slider className="mx-auto " config={configSectionThree}>
        {[...Array(8).keys()].map((item, idx) => (
          <SwiperSlide key={idx} className="">
            <Image
              src={`images/brand-0${++item}.png`}
              className="mx-auto  h-auto w-auto   text-center "
            />
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
};
export default memo(BrandVendor);
