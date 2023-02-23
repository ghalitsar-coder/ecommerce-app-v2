import { sectionTwoData } from "modules/home/pages/Home/constant";

const Excellence = () => {
  return (
    <div className="  py-10">
      <div className="container flex items-center flex-wrap justify-evenly md:justify-between gap-y-7 gap-x-5  ">
        {sectionTwoData?.sectionTwoPartOne?.map((item, idx) => (
          <div className=" flex items-center gap-x-2" key={idx}>
            <span>{item?.icon}</span>
            <div className="text-sm">
              <h2 className="font-semibold whitespace-nowrap">
                {" "}
                {item?.label}{" "}
              </h2>
              <h3 className="whitespace-nowrap"> {item?.text} </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Excellence;
