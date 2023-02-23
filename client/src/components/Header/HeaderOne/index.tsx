import { links } from "../constants";

const HeaderOne = () => (
  <nav className="container text-xs pt-2 py-1 px-3 md:px-0 flex justify-between items-center  ">
    <h6 className="capitalize">Free Shippin over $100 & Free Returns</h6>
    <ul className="">
      {links?.map((item, idx) => (
        <li key={+idx}> {item} </li>
      ))}
    </ul>
  </nav>
);
export default HeaderOne;
