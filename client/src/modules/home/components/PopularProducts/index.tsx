import { Image } from "@chakra-ui/react";
import Card from "components/Cards/Card";
import { useState } from "react";

type Props = {};

const popularOptions = [
  {
    label: "Smart Watch",
    images: "watch",
  },
  {
    label: "Speaker",
    images: "speaker",
  },
  {
    label: "Laptops",
    images: "laptop",
  },
];
const popularProducts = {
  "Smart Watch": ["acc", "speaker", "laptop", "homeapp", "watch"],
  Speaker: ["homeapp", "watch", "camera", "tv", "laptop"],
  Laptops: ["tv", "camera", "watch", "laptop", "homeapp"],
};

const PopularProducts = (props: Props) => {
  const [currentProduct, setCurrentProduct] = useState("Smart Watch");
  const handleCurrentProduct = (label: string) => {
    setCurrentProduct(label);
  };

  return (
    <section id="popular-products" className="container my-10 px-3 md:px-0">
      <h1 className="text-2xl font-semibold mb-10">Our Popular Products</h1>
      <div className="grid grid-cols-6 gap-3 ">
        <div className="flex shadow-md rounded-md pl-4 py-6 xl:col-span-1 md:col-span-2 col-span-3 flex-col bg-white gap-y-5">
          {popularOptions.map((item, index) => (
            <li
              key={index}
              onClick={() => handleCurrentProduct(item.label)}
              className="flex  cursor-pointer items-center gap-x-2"
            >
              <div className="!w-10 !h-10  border rounded-md border-slate-300 overflow-hidden ">
                <Image
                  src={`images/${item.images}.jpg`}
                  className="!w-full !h-full !object-cover "
                />
              </div>
              <h3
                className={`whitespace-nowrap transition ${
                  currentProduct === item.label
                    ? "text-dark-accent-1 font-semibold"
                    : "text-muted-accent-1"
                } text-sm `}
              >
                {" "}
                {item.label}{" "}
              </h3>
            </li>
          ))}
        </div>

        {popularProducts?.[
          currentProduct as "Smart Watch" | "Speaker" | "Laptops"
        ].map((item, idx) => (
          <Card item={item} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
