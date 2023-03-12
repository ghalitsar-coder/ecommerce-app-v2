import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "components";
import { BlogsPage, Contact, Home, OurStore,CompareProducts, WishList, Auth } from "pages";

const RouterRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/our-store" element={<OurStore />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/compare-product" element={<CompareProducts />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/auth" element={<Auth />} />
      </Route>
    </Routes>
  );
};

export default RouterRoutes;
