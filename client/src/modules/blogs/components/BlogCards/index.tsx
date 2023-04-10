import React from "react";
import Blog from "components/Blogs/Blog";
import { arrOfImagesBlog } from "constants";

type Props = {};

const parentGridUp = "lg:grid-cols-4 grid-cols-2  md:grid-cols-3   gap-4 ";
const BlogCards = (props: Props) => {
  return (
    <div className="lg:col-span-9  col-span-12">
      <div className={`grid ${parentGridUp}`}>
        {arrOfImagesBlog.map((item, idx) => (
          <Blog key={idx} className={"col-span-1"} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
