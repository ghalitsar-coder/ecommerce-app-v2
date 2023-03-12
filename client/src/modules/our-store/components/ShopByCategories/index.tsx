import { categories } from "modules/our-store/pages/OurStore/constant";

const ShopByCategories = ({
  handleFilter,
  currentFilter,
}: {
  handleFilter(type: "categories" | "availability", item: string): () => void;
  currentFilter: { availability?: string; categories?: string };
}) => {
  return (
    <div className=" rounded-lg shadow-md basic__border mb-5 p-2.5 ">
      <h1 className="mb-4 font-bold text-lg ">Shop By Categories</h1>
      <ul className="  grid gap-y-3 ">
        {categories.map((item) => (
          <li
            className="cursor-pointer"
            onClick={handleFilter("categories", item)}
            key={item}
          >
            <h5
              className={`transition text-sm ${
                currentFilter["categories"] === item ? " font-semibold" : ""
              }  text-slate-500  `}
            >
              {item}
            </h5>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ShopByCategories;
