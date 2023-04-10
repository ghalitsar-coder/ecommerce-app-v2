import Meta from "components/Meta";
import { BlogCards, BlogDetail, Sidebar } from "modules/blogs/components";
import { CategoriesAndFilter, Products } from "modules/our-store/components";
import React from "react";

type Props = {};

const DetailBlog = (props: Props) => {

  return (
    <>
      {/* {meta} */}
      <div className="container my-10 px-3">
        <div className="grid grid-cols-12  gap-4 ">
          <Sidebar />
          <BlogDetail />
        </div>
      </div>
    </>
  );
};

export default DetailBlog;
