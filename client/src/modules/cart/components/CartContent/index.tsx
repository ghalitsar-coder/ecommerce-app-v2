import { Checkbox, Image, Stack } from "@chakra-ui/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Note from "modules/our-store/components/DetailQuantityAndNote/Note";
import Quantity from "modules/our-store/components/DetailQuantityAndNote/Quantity";
import React from "react";
import { BiTrash } from "react-icons/bi";
import { constructImageUrl } from "utils/hooks";
import CartItems from "./CartItems";

type Props = {};

const getCartData = async () => {
  try {
    const token = `Bearer EXbeG27MDk1H6IOzCrF6E5lwpU530qQO`;
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
    queryKey: ["cart-data-list"],
    queryFn: getCartData,
    select: (res) => {
      const newData = res?.data?.data
        ?.map((item) => item?.productList)
        .flat(Infinity)
        .reduce((obj, key) => {
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
  console.log(`THIS IS   data:`, data);

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

  return  renderContentProducts 
};

export default CartContent;

