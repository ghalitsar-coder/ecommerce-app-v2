import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import { rightSection } from "components/Header/constants";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SectionRight = ({
  onOpen,
  onClose,
}: {
  onOpen(): void;
  onClose(): void;
}) => {
  const navigate = useNavigate();
  const handleRoute = (path: string) => {
    navigate(path);
  };

  return (
    <ul className="flex items-center z-[5]  gap-x-5">
      {rightSection?.map((item, idx) => (
        <li key={+idx} className="flex items-center gap-x-2">
          <Popover
            onOpen={onOpen}
            onClose={onClose}
            closeOnBlur
            trigger="hover"
          >
            {({ isOpen, onClose: close }) => {
              return (
                <>
                  <PopoverTrigger>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(item.path);
                        close();
                      }}
                    >
                      {item.icon}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className=" !translate-y-2.5 text-dark">
                    <PopoverHeader>Confirmation!</PopoverHeader>
                    <PopoverBody>Are you sure you want</PopoverBody>
                  </PopoverContent>
                </>
              );
            }}
          </Popover>
        </li>
      ))}
      <li className="flex items-center gap-x-2">
        <span>
          <AiOutlineShoppingCart />
        </span>
        <div className="text-xs">
          <p className="text-center bg-white rounded-xl w-fit px-1 mx-auto text-dark">
            0
          </p>
          $0.00
        </div>
      </li>
    </ul>
  );
};

export default SectionRight;
