import Blogs from "components/Blogs";
import {
  BrandVendor,
  CategoryItems,
  Excellence,
  FeaturedCollection,
  MainSale,
  PopularProducts,
  SpecialProducts,
  FamousProducts,
} from "modules/home/components";
import { useState } from "react";

const Home = () => {
  return (
    <section id="home" className="flex flex-col  gap-y-4">
      <MainSale />
      <div className=" !bg-gray-accent-2  px-3">
        <Excellence />
        <CategoryItems />
      </div>
      <BrandVendor />
      <Blogs title={"Our Latest Blogs"} />
      <FeaturedCollection />
      <SpecialProducts />
      <PopularProducts />
      <FamousProducts />
    </section>
  );
};

export default Home;
