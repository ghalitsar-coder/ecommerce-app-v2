import { Checkbox } from "@chakra-ui/react";
import { Card } from "components";
import Meta from "components/Meta";
import {
  Availability,
  Colors,
  PopularProducts,
  Prices,
  ProductTags,
  ShopByCategories,
  Sizes,
} from "modules/our-store/components";
import {
  CurrentFilterProps,
  filterKeyProps,
  LabelValueProps,
} from "modules/our-store/pages/OurStore/constant";
import React, { useState } from "react";

type Props = {};

const CategoriesAndFilter = (props: Props) => {
  const [currentFilter, setCurrentFilter] = useState<CurrentFilterProps>({
    categories: "",
    availability: "",
    color: {},
    price: {
      min: "",
      max: "",
    },
    sizes: [],
    tags: [],
  });

  const handleFilter =
    (type: string, item: LabelValueProps | string, moreThanOneValues = false) =>
    () => {
      if (moreThanOneValues) {
        const currentVal = { ...currentFilter };

        const isSizeExist =
          typeof item === "object" &&
          currentVal[type as "sizes" | "tags"]?.find(
            (obj) => obj.label === item.label
          );
        if (isSizeExist) {
          currentVal[type as "sizes" | "tags"] = currentVal[
            type as "sizes" | "tags"
          ]?.filter((obj) => obj.label !== item.label);
          setCurrentFilter(currentVal);
        } else {
          currentVal[type as "sizes" | "tags"] = [
            ...(currentVal[type as "sizes" | "tags"] || []),
            typeof item === "string" ? { label: item, value: item } : item,
          ];
          setCurrentFilter(currentVal);
        }
      } else {
        setCurrentFilter((prev) => ({
          ...prev,
          [type]: prev[type as filterKeyProps] === item ? "" : item,
        }));
      }
    };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    let val = parseInt(value.replaceAll(".", ""), 10);
    if (val <= 0 || !val) {
      val = 0;
    }
    setCurrentFilter((prev) => ({
      ...prev,
      price: { ...prev.price, [name]: val },
    }));
  };

  return (
    <div className="lg:col-span-3    col-span-12  ">
      <ShopByCategories
        currentFilter={currentFilter}
        handleFilter={handleFilter}
      />
      <div className="rounded-lg shadow-md basic__border p-2.5 mb-4">
        <h1 className="mb-4 font-bold text-lg ">Filter By</h1>
        <div className="grid gap-y-5">
          <Availability
            currentFilter={currentFilter}
            handleFilter={handleFilter}
          />
          <Prices currentFilter={currentFilter} handleChange={handleChange} />
          <Colors handleFilter={handleFilter} currentFilter={currentFilter} />
          <Sizes handleFilter={handleFilter} currentFilter={currentFilter} />
        </div>
      </div>
      <ProductTags handleFilter={handleFilter} currentFilter={currentFilter} />
      <PopularProducts />
    </div>
  );
};

export default CategoriesAndFilter;
