import { HeaderOne, HeaderThree, HeaderTwo } from "components";
type Props = {};

const Header = (props: Props) => {
  return (
    <header className="bg-dark-accent-1 text-white ">
      <HeaderOne />
      <div className="border-b pb-1 border-slate-600" />
      <HeaderTwo />
      <HeaderThree />
    </header>
  );
};

export default Header;
