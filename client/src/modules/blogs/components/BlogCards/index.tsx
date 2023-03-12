import React from "react";
import Blog from "components/Blogs/Blog";

type Props = {};
const arrOfImages = ["blog-3.webp", "blog-1.jpg", "blog-4.webp", "blog-3.webp"];
const parentGridUp = "lg:grid-cols-4 grid-cols-2  md:grid-cols-3   gap-4 ";
const BlogCards = (props: Props) => {
  return (
    <div className="lg:col-span-9  col-span-12">
      <div className={`grid ${parentGridUp}`}>
        {arrOfImages.map((item, idx) => (
          <Blog key={idx} className={"col-span-1"} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
