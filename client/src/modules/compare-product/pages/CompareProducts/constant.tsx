import { Color } from "modules/our-store/components/Colors";
import React from "react";

export type CompareProduct = {
  image: string;
  title: string;
  price: string;
  detailProduct: {
    brand: string;
    type: string;
    sku: string;
    availability: string;
    color: string;
    size: string[];
  };
};
export const arrOfCompareProducts: CompareProduct[] = [
  {
    image: "acc.jpg",
    title: "Gonor T1 7.0 12GB RAM 512 OM 8 inch with Wi-Fi+5G Tablet",
    price: "$100.00",
    detailProduct: {
      brand: "Havells",
      type: "Tablet Computers",
      sku: "SKU0323",
      availability: "In Stock",
      color: "",
      size: ["s", "m", "l"],
    },
  },
  {
    image: "headphone.jpg",
    title: "Gonor T1 7.0 12GB RAM 512 OM 8 inch with Wi-Fi+5G Tablet",
    price: "$320.00",
    detailProduct: {
      brand: "Havells",
      type: "Tablet Computers",
      sku: "SKU0323",
      availability: "In Stock",
      color: "",
      size: ["s", "m", "l"],
    },
  },
  {
    image: "tab.jpg",
    title: "Gonor T1 7.0 12GB RAM 512 OM 8 inch with Wi-Fi+5G Tablet",
    price: "$510.00",
    detailProduct: {
      brand: "Havells",
      type: "Tablet Computers",
      sku: "SKU0323",
      availability: "In Stock",
      color: "",
      size: ["s", "m", "l"],
    },
  },
  {
    image: "camera.jpg",
    title: "Gonor T1 7.0 12GB RAM 512 OM 8 inch with Wi-Fi+5G Tablet",
    price: "$230.00",
    detailProduct: {
      brand: "Havells",
      type: "Tablet Computers",
      sku: "SKU0323",
      availability: "In Stock",
      color: "",
      size: ["s", "m", "l"],
    },
  },
  {
    image: "tab1.jpg",
    title: "Gonor T1 7.0 12GB RAM 512 OM 8 inch with Wi-Fi+5G Tablet",
    price: "$152.00",
    detailProduct: {
      brand: "Havells",
      type: "Tablet Computers",
      sku: "SKU0323",
      availability: "In Stock",
      color: "",
      size: ["s", "m", "l"],
    },
  },
  {
    image: "watch.jpg",
    title: "Gonor T1 7.0 12GB RAM 512 OM 8 inch with Wi-Fi+5G Tablet",
    price: "$111.00",
    detailProduct: {
      brand: "Havells",
      type: "Tablet Computers",
      sku: "SKU0323",
      availability: "In Stock",
      color: "",
      size: ["s", "m", "l"],
    },
  },
  {
    image: "tv.jpg",
    title: "Gonor T1 7.0 12GB RAM 512 OM 8 inch with Wi-Fi+5G Tablet",
    price: "$123.00",
    detailProduct: {
      brand: "Havells",
      type: "Tablet Computers",
      sku: "SKU0323",
      availability: "In Stock",
      color: "",
      size: ["s", "m", "l"],
    },
  },
  {
    image: "homeapp.jpg",
    title: "Gonor T1 7.0 12GB RAM 512 OM 8 inch with Wi-Fi+5G Tablet",
    price: "$760.00",
    detailProduct: {
      brand: "Havells",
      type: "Tablet Computers",
      sku: "SKU0323",
      availability: "In Stock",
      color: "",
      size: ["s", "m", "l"],
    },
  },
];
export const renderDetail = (key: string, value: any, arrOfColors: Color[]) => {
  let str;
  switch (key) {
    case "color":
      str = (
        <div className="flex gap-2 flex-wrap">
          {arrOfColors?.map((item: Color) => (
            <div
              style={{
                backgroundColor: item.value,
              }}
              key={item.label}
              // onClick={handleFilter("color", item)}
              className={`w-5 h-5 hover:shadow-md basic__transition    rounded-full`}
            ></div>
          ))}
        </div>
      );
      break;

    case "size":
      str = (
        <div className="flex gap-2 flex-wrap">
          {value?.map((item: string) => (
            <h5 className="font-semibold text-sm uppercase  "> {item} </h5>
          ))}
        </div>
      );
      break;

    default:
      str = (
        <h3 className="font-semibold text-sm text-slate-500 "> {value} </h3>
      );
      break;
  }
  return str;
};
