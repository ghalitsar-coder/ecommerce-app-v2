import {
  CurrentFilter,
  CurrentFilterProps,
  filterBy,
  PriceFilter,
} from "modules/our-store/pages/OurStore/constant";

type Props = {
  currentFilter: CurrentFilterProps;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const Prices = ({ currentFilter, handleChange }: Props) => {
  return (
    <>
      <h1 className=" font-semibold text-lg ">Price</h1>
      <div className="flex gap-x-2 justify-between">
        {filterBy["prices"]?.map((item) => (
          <div key={item.name}>
            <fieldset className="flex gap-x-1 items-center  ">
              <h3>$</h3>
              <input
                type="text"
                className="input__class-borderless !bg-slate-200 placeholder:text-slate-500 "
                placeholder={item.placeholder}
                name={item.name}
                onChange={handleChange}
                value={
                  currentFilter?.["price"]?.[
                    item.name as "min" | "max"
                  ]?.toLocaleString("id-ID") ?? ""
                }
              />
            </fieldset>
          </div>
        ))}
      </div>
    </>
  );
};
export default Prices;
