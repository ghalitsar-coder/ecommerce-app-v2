import { ViewBlogs } from "modules/blogs/pages";
import React from "react";

type Props = {};

const Blogs = (props: Props) => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return <ViewBlogs />;
};

export default Blogs;
