import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "components";
import { BlogsPage, Contact, Home, OurStore } from "pages";

const RouterRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/our-store" element={<OurStore />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default RouterRoutes;
