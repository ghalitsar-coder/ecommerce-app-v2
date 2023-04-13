import { useRef, useState } from "react";
import { HiChevronRight } from "react-icons/hi";
import { list } from "./constants";
import { FilterSelect } from "components";
const HeaderWishlistItem = () => {
  const [currentFilter, setCurrentFilter] = useState<string>("");
  const [showFilter, setShowFilter] = useState(false);
  const filterRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="flex justify-between items-center ">
      <div className="flex gap-x-4 text-sm">
        <span className="font-semibold ">69</span>
        <h3> Barang </h3>
        <h3 className="font-semibold text-orange-accent-3"> Atur </h3>
      </div>
      <FilterSelect
        setShowFilter={setShowFilter}
        setCurrentFilter={setCurrentFilter}
        currentFilter={currentFilter}
        showFilter={showFilter}
        data={list}
        filterRef={filterRef}
      />
    </div>
  );
};
export default HeaderWishlistItem;
