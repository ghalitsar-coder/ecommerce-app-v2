import { AiOutlineUser,AiOutlineShoppingCart } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { SlRefresh } from "react-icons/sl";

export const links = ["Hotline +62 81223378021"];
export const rightSection = [
  {
    name: "Cart",
    icon: <AiOutlineShoppingCart />,
    path: "cart",
  },
  {
    name: "Compare products",
    icon: <SlRefresh />,
    path: "compare-product",
  },
  {
    name: "Favourite Wishlist",
    icon: <MdFavorite />,
    path: "wishlist",
  },
  {
    name: "Sign in",
    icon: <AiOutlineUser />,
    path: "auth",
  },
];
export const thirdHeader = [
  {
    name: "Home",
    path: "",
  },
  {
    name: "Our Store",
    path: "products",
  },
  {
    name: "Blogs",
    path: "blogs",
  },
  {
    name: "Contact",
    path: "contact",
  },
];
