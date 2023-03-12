import { FaGripLines, FaGripLinesVertical } from "react-icons/fa";

export const options = [
    { value: "chocolate", label: "Best Selling" },
    { value: "strawberry", label: "Cheapest" },
    { value: "vanilla", label: "Highest" },
  ];
  
  export const arrOfAligns = [
    { name: "up", icon: <FaGripLines /> },
    { name: "down", icon: <FaGripLinesVertical /> },
    { name: "left", icon: <FaGripLines /> },
    { name: "right", icon: <FaGripLinesVertical /> },
  ];