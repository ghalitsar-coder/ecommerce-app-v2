import { SectionFilter, WishlistItem } from "modules/wish-list/components";

const WishList = () => {
  return (
    <section id="auth" className="container mb-40 md:px-0 px-5">
      <div className=" my-10">
        <h1 className="font-semibold text-2xl">Semua Wishlist</h1>
      </div>
      <div className="grid grid-cols-12 gap-5 ">
        <SectionFilter />
        <WishlistItem />
      </div>
    </section>
  );
};

export default WishList;
