import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { rightSection } from "../constants";

const HeaderTwo = () => (
  <div className="container flex items-center  md:justify-between  py-4 gap-y-4 gap-x-3 flex-wrap px-3 md:px-0  ">
    <h1 className="font-semibold text-2xl ">Dev Corner</h1>
    <fieldset className="flex transition-all duration-300 ease-in-out focus-within:ring focus-within:ring-orange-accent-2 items-center w-full max-w-lg justify-between bg-white  rounded-md flex-1 ">
      <input
        type="text"
        placeholder="Search Product..."
        className="outline-none bg-transparent text-sm pl-2 flex-1 placeholder:text-sm text-dark "
      />
      <button
        type="button"
        className="bg-orange-accent-2 rounded-r-md   py-2 px-3"
      >
        <FiSearch className="text-dark" />
      </button>
    </fieldset>
    <ul className="flex items-center   gap-x-5">
      {rightSection?.map((item, idx) => (
        <li key={+idx} className="flex items-center gap-x-2">
          <span>{item.icon}</span>
          <span className="text-xs">
            <Link to={item.path}>{item.name}</Link>
          </span>
        </li>
      ))}
      <li className="flex items-center gap-x-2">
        <span>
          <AiOutlineShoppingCart />
        </span>
        <div className="text-xs">
          <p className="text-center bg-white rounded-xl w-fit px-1 mx-auto text-dark">
            0
          </p>
          $0.00
        </div>
      </li>
    </ul>
  </div>
);

export default HeaderTwo;
