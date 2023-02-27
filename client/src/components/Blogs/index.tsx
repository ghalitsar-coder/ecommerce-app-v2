import Blog from "./Blog";

const Blogs = () => {
  return (
    <section
      id="blogs"
      className="container overflow-hidden py-4 px-3 md:px-0 my-10"
    >
      <h1 className="mb-5 font-semibold text-2xl">Our Latest Blog</h1>
      <div className="grid grid-cols-4 gap-5 ">
        {["blog-3.webp", "blog-1.jpg", "blog-4.webp", "blog-3.webp"].map(
          (item, idx) => (
            <Blog key={idx} item={item} />
          )
        )}
      </div>
    </section>
  );
};

export default Blogs;
