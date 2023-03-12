import { ViewOurStore } from "modules/our-store/pages";
import React from "react";

type Props = {};

const OurStore = (props: Props) => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return <ViewOurStore />;
};

export default OurStore;
