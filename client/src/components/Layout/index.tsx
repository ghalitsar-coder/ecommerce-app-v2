import React from "react";
import { Header, Footer } from "components";
import { Outlet } from "react-router-dom";

type Props = {};

const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
