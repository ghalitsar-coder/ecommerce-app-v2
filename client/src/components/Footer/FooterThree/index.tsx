import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { FaCcJcb, FaCcMastercard, FaCcVisa } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";

const FooterThree = () => {
  return (
    <div className="bg-dark-accent-3 text-white">
      <div className="container flex py-2 text-sm items-center justify-between ">
        <h1> &copy; 2023 Digtic Powered by Shopify </h1>
        <ul className="flex items-center gap-x-3">
          {[
            <FaCcVisa size={"2em"} />,
            <BsFillCreditCard2FrontFill size={"2em"} />,
            <FaCcMastercard size={"2em"} />,
            <FaCcJcb size={"2em"} />,
            <SiAmericanexpress size={"2em"} />,
          ].map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default FooterThree;
