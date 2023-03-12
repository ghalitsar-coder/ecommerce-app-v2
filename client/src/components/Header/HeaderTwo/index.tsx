import { FiSearch } from "react-icons/fi";
import { useRef, useState } from "react";
import SectionRight from "./SectionRight";
import DataContentSearchBox from "./DataContentSearchBox";
import { useOutsideClick } from "utils/useOutsideClick";
import { Link } from "react-router-dom";

type Props = {
  onOpen(): void;
  onClose(): void;
  onOpenSearchBox(): void;
  onCloseSearchBox(): void;
};

const HeaderTwo = ({
  onOpen,
  onClose,
  onOpenSearchBox,
  onCloseSearchBox,
}: Props) => {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  useOutsideClick(wrapperRef, () => {
    setShowSearchBox(false);
    onCloseSearchBox();
  });

  return (
    <div className="bg-dark-accent-1">
      <div className="container flex items-center  md:justify-between  py-7 gap-y-4 gap-x-3 flex-wrap px-3 md:px-0  ">
        <h1 className="font-semibold text-2xl ">
          <Link to="/">Elfaris</Link>
        </h1>
        <div
          tabIndex={0}
          onClick={(e) => {
            setShowSearchBox(true);
            onOpenSearchBox();
          }}
          ref={wrapperRef}
          className="flex basic__transition focus-within:ring focus-within:ring-orange-accent-2 items-center w-full max-w-4xl justify-between bg-white  h-9 flex-1 relative rounded-lg"
        >
          <input
            type="text"
            placeholder="Search Product..."
            className="outline-none bg-transparent text-sm pl-2   flex-1 placeholder:text-sm text-dark h-full "
          />
          <button
            type="button"
            className="bg-orange-accent-2 rounded-r-md h-full  px-3"
          >
            <FiSearch className="text-dark" />
          </button>
          <DataContentSearchBox showSearchBox={showSearchBox} />
        </div>
        <SectionRight onOpen={onOpen} onClose={onClose} />
      </div>
    </div>
  );
};

export default HeaderTwo;
