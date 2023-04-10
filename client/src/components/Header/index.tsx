import { useDisclosure } from "@chakra-ui/react";
import { HeaderOne, HeaderThree, HeaderTwo } from "components";
type Props = {};

const Header = (props: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isOpenSearchBox,
    onClose: onCloseSearchBox,
    onOpen: onOpenSearchBox,
  } = useDisclosure();

  return (
    <header className=" text-white sticky   top-0 z-[5] ">
      <HeaderOne />
      <div className="border-b  border-slate-600" />
      <HeaderTwo
        onClose={onClose}
        onOpen={onOpen}
        onCloseSearchBox={onCloseSearchBox}
        onOpenSearchBox={onOpenSearchBox}
      />
      <HeaderThree />
      <div
        className={`absolute  basic__transition pointer-events-auto  ${
          isOpen || isOpenSearchBox
            ? "bg-black/75 top-full bottom-0 w-[100%]   h-screen  "
            : ""
        } `}
      ></div>
    </header>
  );
};

export default Header;
