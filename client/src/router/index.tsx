import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "components";
import Home from "pages/Home";

const RouterRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default RouterRoutes;
