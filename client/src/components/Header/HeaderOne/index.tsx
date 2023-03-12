import { links } from "../constants";

const HeaderOne = () => (
  <div className="bg-dark-accent-1">
    <nav className="container text-xs   py-2.5 px-3 md:px-0 flex justify-between items-center  ">
      <h6 className="capitalize">Free Shippin over $100 & Free Returns</h6>
      <ul className="">
        {links?.map((item, idx) => (
          <li key={+idx}> {item} </li>
        ))}
      </ul>
    </nav>
  </div>
);
export default HeaderOne;
