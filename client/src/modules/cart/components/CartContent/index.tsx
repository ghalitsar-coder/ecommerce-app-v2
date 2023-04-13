import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import React from "react";
import { Datum, ProductList } from "types/cart";
import CartItems from "./CartItems";

type Props = {};

const getCartData = async () => {
  try {
    const token = `Bearer PN9NVKWH4mRCOxN4jELDgcZfrcZhU8X3`;
    return await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/api/v1/catalog/cart`,
      { headers: { Authorization: token } }
    );
  } catch (err) {
    console.log("THIS IS ERROR ->", err);
  }
};

const CartContent = (props: Props) => {
  const queryClient = useQueryClient();
  // Queries
  const { data } = useQuery({
    queryKey: ["cart-data-list"] as const,
    queryFn: getCartData,
    select: (res) => {
      const newData = res?.data?.data
        ?.map((item: Datum) => item?.productList)
        .flat(Infinity)
        .reduce((obj: { [key: string]: ProductList[] }, key: any) => {
          if (!obj?.[key?.storeName]) {
            obj[key?.storeName] = [key];
          } else {
            obj[key?.storeName].push(key);
          }
          return obj;
        }, {});

      return newData;
    },
  });

  const renderContentProducts = React.useMemo(() => {
    if (!Object.keys(data || {}).length) {
      return null;
    }
    return (
      <>
        <CartItems data={data} />
      </>
    );
  }, [data]);

  return renderContentProducts;
};

export default CartContent;
