import { ViewDetailBlog } from "modules/blogs/pages";
import React from "react";

type Props = {};

const DetailBlog = (props: Props) => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return <ViewDetailBlog />;
};

export default DetailBlog;
