import { useRef, useState } from "react";
import { HiChevronRight } from "react-icons/hi";
import { list } from "./constants";
const HeaderWishlistItem = () => {
  const [currentFilter, setCurrentFilter] = useState<string | null>(null);
  const [showFilter, setShowFilter] = useState(false);
  const filterRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="flex justify-between items-center ">
      <div className="flex gap-x-4 text-sm">
        <span className="font-semibold ">69</span>
        <h3> Barang </h3>
        <h3 className="font-semibold text-orange-accent-3"> Atur </h3>
      </div>
      <div className="flex gap-x-3 items-center">
        <h4 className="text-sm font-semibold">Urutkan</h4>
        <div
          ref={filterRef}
          tabIndex={0}
          onClick={() => setShowFilter((prev) => !prev)}
          onBlur={() => setShowFilter(false)}
          className={`px-3 py-2 rounded-lg cursor-pointer  basic__border flex justify-between items-center w-[210px] relative  basic__transition    ${
            showFilter ? "ring-2 ring-orange-accent-3 border-transparent" : ""
          }  group`}
        >
          <h3 className="text-sm whitespace-nowrap ">
            {currentFilter ?? list[0]}
          </h3>
          <HiChevronRight
            className={`shrink-0 basic__transition  ${
              showFilter ? "-rotate-90 " : ""
            }  `}
          />
          <ul
            className={`absolute top-full     basic__border py-1 rounded-lg overflow-hidden w-full left-0 translate-y-1 grid gap-y-1.5 [&>li>h4:hover]:bg-slate-100/75 [&>li>h4]:rounded-md first:mt-2 basic__transition ${
              showFilter ? " opacity-100 z-10 bg-white" : "opacity-0 -z-[1] "
            } `}
          >
            {list.map((item, idx) => (
              <li
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentFilter(item);
                  setShowFilter(false);
                  filterRef.current!.blur();
                }}
                className={`border-l-4 cursor-pointer basic__transition   px-1 ${
                  item === currentFilter
                    ? " border-orange-accent-3 bg-slate-100/75 font-semibold text-orange-accent-3 "
                    : "border-transparent"
                } `}
              >
                {" "}
                <h4 className="text-sm w-full    pl-1 py-2">{item} </h4>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default HeaderWishlistItem;
