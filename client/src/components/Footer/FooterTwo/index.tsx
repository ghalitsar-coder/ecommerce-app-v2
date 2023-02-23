import { sectionTwo } from "components/Footer/constant";
import { BsApple } from "react-icons/bs";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { Link } from "react-router-dom";

const FooterTwo = () => {
  return (
    <div className="bg-dark-accent-3 py-6 px-5 text-white border-b ">
      <div className="container flex justify-between flex-wrap gap-x-5 items-baseline  ">
        <FooterTwoSectionOne />
        <FooterTwoSectionTwo />
        <FooterTwoSectionThree />
      </div>
    </div>
  );
};
export default FooterTwo;

const ListItem = ({
  data,
}: {
  data: string[] | { label: string; path: string }[];
}) => {
  return (
    <ul className="grid gap-y-4">
      {data?.map(
        (item: string | { label: string; path: string }, idx: number) => (
          <li key={idx} className="text-xs">
            {" "}
            {typeof item === "string" ? (
              item
            ) : (
              <Link to={item.path} className="whitespace-nowrap">
                {item.label}
              </Link>
            )}{" "}
          </li>
        )
      )}
    </ul>
  );
};

const FooterTwoSectionOne = () => {
  return (
    <div className="flex-1">
      <h1 className="font-semibold mb-6">Contact Us</h1>
      <ListItem data={sectionTwo?.contact} />
      <ul className="flex items-center gap-x-3 my-3">
        {sectionTwo?.icons?.map((item, key) => (
          <li key={key} className="bg-white p-1 rounded-full cursor-pointer ">
            {" "}
            <span className="text-dark-accent-3">{item}</span>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

const FooterTwoSectionTwo = () => {
  return (
    <div className="flex-[3] flex items-baseline flex-wrap justify-between  lg:justify-around gap-5   ">
      <FooterTwoSectionTwoList
        data={sectionTwo?.information}
        text={"Information"}
      />
      <FooterTwoSectionTwoList data={sectionTwo?.account} text={"Account"} />
      <FooterTwoSectionTwoList
        data={sectionTwo?.quickLinks}
        text={"Quick Links"}
      />
    </div>
  );
};
const FooterTwoSectionTwoList = ({
  data,
  text,
}: {
  data: { label: string; path: string }[];
  text: string;
}) => {
  return (
    <div className="  whitespace-nowrap ">
      <h1 className="font-semibold mb-6">{text}</h1>
      <ListItem data={data} />
    </div>
  );
};

const FooterTwoSectionThree = () => {
  return (
    <div className="flex-1 grid gap-y-6">
      <h1 className="font-semibold ">Our App</h1>
      <p className="text-xs text-muted-accent-2  ">
        Download our App and get extra 15% Discount on your first Order..!
      </p>
      <div className="gap-x-1 flex items-center">
        <Button
          icon={<IoLogoGooglePlaystore size={"1.6em"} />}
          text={"Google Play"}
          subText={"Get in on"}
        />
        <Button
          icon={<BsApple size={"1.6em"} />}
          text={"App Store"}
          subText={"Download on the"}
        />
      </div>
    </div>
  );
};
const Button = ({
  icon,
  text,
  subText,
}: {
  icon: React.ReactNode;
  text: string;
  subText: string;
}) => {
  return (
    <button className="flex items-center gap-x-2 rounded-md shadow-md px-3 py-1 bg-white text-dark-accent-1">
      <span>{icon}</span>
      <div className="text-left  ">
        <h5 className=" whitespace-nowrap text-xs">{subText}</h5>
        <h4 className=" whitespace-nowrap text-sm font-semibold ">{text}</h4>
      </div>
    </button>
  );
};
