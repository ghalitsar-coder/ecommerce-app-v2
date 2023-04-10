import {
  IconButton,
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
import CartDrawer from "./CartDrawer";

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
    <ul className="flex items-center   gap-x-5">
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
                    <IconButton
                      size={"sm"}
                      variant="unstyled"
                      className={
                        "hover:bg-white/25 hover:backdrop-blur-sm flex  [&>svg]:m-auto  [&:hover>svg]:fill-orange-accent-3"
                      }
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(item.path);
                        close();
                      }}
                      aria-label="Search database"
                      icon={item.icon}
                    />
                  </PopoverTrigger>
                  <PopoverContent className="z-[3] !translate-y-2.5 text-dark">
                    <PopoverHeader>Confirmation!</PopoverHeader>
                    <PopoverBody>Are you sure you want</PopoverBody>
                  </PopoverContent>
                </>
              );
            }}
          </Popover>
        </li>
      ))}
      <CartDrawer />
    </ul>
  );
};

export default SectionRight;
