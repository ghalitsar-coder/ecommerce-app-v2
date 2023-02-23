import Blogs from "components/Blogs";
import {
  BrandVendor,
  CategoryItems,
  Excellence,
  MainSale,
} from "modules/home/components";

type Props = {};

const Home = (props: Props) => {
  return (
    <section id="home" className="grid gap-y-4  ">
      <MainSale />
      <div className=" !bg-gray-accent-2 px-3 ">
        <Excellence />
        <CategoryItems />
        <BrandVendor />
        <Blogs />
      </div>
    </section>
  );
};

export default Home;
