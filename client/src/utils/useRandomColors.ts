import { Color } from "modules/our-store/components/Colors";
import React from "react";
export const useRandomColors = ({ colorSize }: { colorSize: number }) => {
  const [arrOfColors, setArrOfColors] = React.useState<
    { label: string; value: string }[]
  >([]);
  React.useEffect(() => {
    const arr: Color[] = [];
    for (let i = 0; i < colorSize; i++) {
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      arr.push({ label: randomColor, value: randomColor });
    }

    setArrOfColors(arr);
  }, []);
  return { arrOfColors };
};
