import { Spinner } from "@chakra-ui/react";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps {
  text?: string;
  type?: any | ButtonHTMLAttributes<HTMLButtonElement>;
  onClick?: () => void;
  children?: ReactNode;
  childrenClass?: string;
  buttonClass?: string;
  rounded?: "xl" | "md" | "sm" | "lg" | "full";
  buttonType?: string;
  disabled?: boolean;
  loading?: boolean;
  color?: "green" | "red" | "orange" | "dark" | "gray";
}

const outlined =
  "border border-dark-accent-3 bg-transparent text-dark-accent-3  hover:border hover:border-transparent hover:bg-dark-accent-3 hover:text-white    ";
// const outlined =
//   "border  bg-transparent   hover:bg-dark-accent-3 hover:text-white    ";
const contained =
  "border border-transparent bg-dark-accent-3 text-white hover:border hover:border-dark-accent-3 hover:bg-transparent hover:text-dark-accent-3";
const disabledButton =
  "bg-muted-accent-2 text-muted-accent-1   pointer-events-none ";

const Button = ({
  text,
  color,
  children,
  buttonClass,
  buttonType,
  loading,
  ...props
}: ButtonProps) => {
  const renderColorAndType = React.useMemo(() => {
    let colorAndType;
    if (buttonType === "contained") {
      switch (color) {
        case "green":
          colorAndType = "basic__button-green";
          break;
        case "red":
          colorAndType = "basic__button-red";
          break;
        case "dark":
          colorAndType = "basic__button-dark";
          break;
        default:
          colorAndType = "basic__button-orange";
          break;
      }
    }
    if (buttonType === "outlined") {
      switch (color) {
        case "green":
          colorAndType = "basic__button-green";
          break;
        case "red":
          colorAndType = "basic__button-red";
          break;
        case "dark":
          colorAndType = "basic__button-dark";
          break;
        case "gray":
          colorAndType = "basic__button-gray-outlined";
          break;
        default:
          colorAndType = "basic__button-orange-outlined";
          break;
      }
    }
    return colorAndType;
  }, [buttonType, color]);
  // ${buttonType === "outlined" ? `${outlined}  ` : `${contained} `}
  return (
    <button
      className={`${buttonClass} ${props.disabled && disabledButton} ${
        props?.rounded ? `rounded-${props?.rounded}` : "!rounded-md"
      }  ${renderColorAndType}
  `}
      {...props}
    >
      {loading ? <Spinner /> : text || children}
    </button>
  );
};

export default Button;
