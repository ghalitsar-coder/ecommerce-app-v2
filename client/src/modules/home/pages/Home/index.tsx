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
function formatNpwp(value) {
  if (typeof value === "string") {
    return value.replace(
      /(\d{2})(\d{3})(\d{3})(\d{1})(\d{3})(\d{3})/,
      "$1.$2.$3.$4-$5.$6"
    );
  }
}
type Props = {};

const Home = (props: Props) => {
   const [formattedValue, setFormattedValue] = useState('');

  const formatNpwp = (value) => {
    if (typeof value === 'string') {
      return value
        .replace(/[^\d]/g, '') // Remove non-numeric characters
        .replace(/^(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,1})(\d{0,3})(\d{0,3})$/, (match, p1, p2, p3, p4, p5, p6) => {
          let formatted = '';

          if (p1) {
            formatted += p1;
            if (p1.length === 2) {
              formatted += '.';
            }
          }

          if (p2) {
            formatted += p2;
            if (p2.length === 3) {
              formatted += '.';
            }
          }

          if (p3) {
            formatted += p3;
            if (p3.length === 3) {
              formatted += '.';
            }
          }

          if (p4) {
            formatted += p4;
            if (p4.length === 1) {
              formatted += '-';
            }
          }

          if (p5) {
            formatted += p5;
            if (p5.length === 3) {
              formatted += '.';
            }
          }

          if (p6) {
            formatted += p6;
          }

          return formatted;
        }); // Format the input
    }
  }

  const handleChange = (event) => {
    const rawValue = event.target.value;
    const formatted = formatNpwp(rawValue);

    setFormattedValue(formatted);
  }
  return (
    <section id="home" className="flex flex-col  gap-y-4">
      {/* <MainSale />
      <div className=" !bg-gray-accent-2  px-3">
        <Excellence />
        <CategoryItems />
      </div>
      <BrandVendor />
      <Blogs />
      <FeaturedCollection />
      <SpecialProducts />
      <PopularProducts />
      <FamousProducts /> */}
      <div className="container grid place-items-center my-10">
        <label htmlFor="npwp">NPWP:</label>
        <input
        type="text"
        id="npwp"
        onChange={handleChange}
        value={formattedValue}
      />
      </div>
    </section>
  );
};

export default Home;
