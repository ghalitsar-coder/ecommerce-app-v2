import { Badge } from "@chakra-ui/react";
import Button from "components/Button";
import React from "react";
import UserAddress from "./UserAddress";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { CartItems } from "modules/cart/components";

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

const CheckoutContent = (props: Props) => {
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
  const renderContentProducts = React.useMemo(() => {
    if (!Object.keys(data || {}).length) {
      return null;
    }
    return <CartItems data={data} />;
  }, [data]);

  return (
    <div className="lg:col-span-8 col-span-1  ">
      <h1 className="text-2xl font-semibold mb-5 ">Checkout</h1>
      <UserAddress />
      {renderContentProducts}
    </div>
  );
};

export default CheckoutContent;
