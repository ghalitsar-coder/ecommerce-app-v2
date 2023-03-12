import { ViewHome } from "modules/home/pages";
import React from "react";

const Home = () => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return <ViewHome />;
};

export default Home;
