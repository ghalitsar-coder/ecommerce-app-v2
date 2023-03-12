import React, { useState } from "react";

type Props = {
  handleFilter: any;
  currentFilter: any;
};
export type Color = { label: string; value: string };

const Colors = ({ handleFilter, currentFilter }: Props) => {
  const [arrOfColors, setArrOfColors] = React.useState<Array<Color>>([]);

  React.useEffect(() => {
    const arr = [];
    for (let i = 0; i < 32; i++) {
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      arr.push({ label: randomColor, value: randomColor });
    }

    setArrOfColors(arr);
  }, []);

  return (
    <>
      <h3 className="font-semibold ">Colors</h3>
      <div className="flex gap-2 flex-wrap">
        {arrOfColors?.map((item: Color) => (
          <div
            style={{
              backgroundColor: item.value,
            }}
            key={item.label}
            onClick={handleFilter("color", item)}
            className={`w-5 h-5 hover:shadow-md basic__transition cursor-pointer ${
              currentFilter?.["color"]?.label === item?.label
                ? "ring-4 ring-orange-accent-2"
                : ""
            } rounded-full`}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Colors;
