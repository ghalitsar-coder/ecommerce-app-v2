import { Image } from "@chakra-ui/react";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type Props = {};

const BlogDetail = (props: Props) => {
  const navigate = useNavigate();
  return (
    <section id="detail-blog" className="lg:col-span-9   col-span-12  ">
      <Article />
      <div className="border-b my-5"></div>
      <div className="flex justify-between items-center">
        <div className="flex items-center  gap-x-4">
          <BsArrowLeft
            className="cursor-pointer"
            onClick={() => navigate("/blogs")}
          />
          <button
            className="text-sm text-slate-500"
            onClick={() => navigate("/blogs")}
          >
            Back To Blogs
          </button>
        </div>
        <div className="flex items-center  gap-x-4">
          <a
            href="https://facebook.com/Ghalitsar"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://instagram.com/lostpandora.__"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/elon"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
      <div className="border-b my-5"></div>
    </section>
  );
};

export default BlogDetail;

const Article = () => {
  return (
    <article className="">
      <h1 className="text-2xl mb-8 font-semibold">
        A Beautiful Sunday Morning Renaissance
      </h1>
      <div className="w-full h-[43vh] aspect-video">
        <Image
          src={`https://cdn.shopify.com/s/files/1/0620/5082/8457/articles/blog-5_910x.jpg?v=1654929043`}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-sm my-4 text-slate-600/90">
        You’re only as good as your last collection, which is an enormous
        pressure. I think there is something about luxury – it’s not something
        people need, but it’s what they want. It really pulls at their heart. I
        have a fantastic relationship with money.Scelerisque sociosqu
        ullamcorper urna nisl mollis vestibulum pretium commodo inceptos cum
        condimentum placerat diam venenatis blandit hac eget dis lacus a
        parturient a accumsan nisl ante vestibulum.
      </p>
      <div className="flex text-sm text-slate-600/90 gap-x-5">
        <h3> 11 March, 2023 </h3>
        <div className="h-5 w-[1px] bg-slate-300"></div>
        <h3 className="cursor-pointer">Sandhika Galih</h3>
      </div>
    </article>
  );
};
