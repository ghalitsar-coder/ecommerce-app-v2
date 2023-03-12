import { arrOfInformationDetails } from "../constant";

const DetailLocation = () => {
  return (
    <div className="col-span-2 md:col-span-1 ">
      <h1 className="text-2xl font-semibold mb-5">Get In Touch With Us</h1>
      <ul className=" grid gap-y-6 ">
        {arrOfInformationDetails?.map((item) => (
          <li key={item.label} className="flex gap-x-2 items-center">
            <span>{item?.icon}</span>
            <h3 className="text-sm text-slate-500"> {item.label} </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default DetailLocation;
