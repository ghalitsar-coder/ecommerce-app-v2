import Blog from "./Blog";

const Blogs = () => {
  return (
    <section id="blogs" className="container overflow-hidden my-10">
      <div className="grid grid-cols-4 gap-5 ">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
    </section>
  );
};

export default Blogs;
