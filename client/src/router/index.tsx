import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "components";
import {
  BlogsPage,
  Contact,
  Home,
  OurStore,
  CompareProducts,
  WishList,
  Auth,
  ResetPassword,
  DetailBlog,
  DetailProduct,
  Cart,
  Checkout,
} from "pages";

const RouterRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" >
        <Route index element={<OurStore />} />
        <Route path=':productId' element={<DetailProduct />} />
        </Route>
        <Route path="/blogs">
          <Route index element={<BlogsPage />} />
          <Route path=":blogId" element={<DetailBlog />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/compare-product" element={<CompareProducts />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/auth">
          <Route index element={<Auth />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default RouterRoutes;
