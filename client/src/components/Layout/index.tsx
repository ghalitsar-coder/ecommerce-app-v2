import React, { useMemo } from "react";
import { Header, Footer } from "components";
import { Outlet, useLocation } from "react-router-dom";

type Props = {};

const Layout = (props: Props) => {
  const location = useLocation();

  const renderLayout = useMemo(() => {
    let layout;
    if (location.pathname.startsWith("/auth")) {
      layout = <Outlet />;
    } else {
      layout = (
        <>
          <Header />
          <main className=" ">
            <Outlet />
          </main>
          <Footer />
        </>
      );
    }
    return layout;
  }, [location.pathname]);

  return renderLayout;
};

export default Layout;
